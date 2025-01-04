"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { axiosInstance } from "@/lib/axiosInstance";
import { Button } from "@nextui-org/react";
import Link from "next/link";

interface ISSData {
    name: string;
    altitude: number;
    latitude: number;
    longitude: number;
}

const TrackISS = () => {
    const [issData, setIssData] = useState<ISSData | null>(null);
    const [path, setPath] = useState<{ lat: number; lng: number }[]>([]);

    const getData = async () => {
        try {
            const response = await axiosInstance.get("/v1/satellites/25544");
            const { name, altitude, latitude, longitude } = response.data;

            setIssData({
                name,
                altitude,
                latitude,
                longitude,
            });

            setPath((prev) => [...prev, { lat: latitude, lng: longitude }].slice(-50));
        } catch (error) {
            console.error("Error fetching ISS data:", error);
        }
    };

    useEffect(() => {
        getData();
        const interval = setInterval(() => {
            getData();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const satelliteIcon = new Icon({
        iconUrl: "/images/iss.svg",
        iconSize: [100, 85],
        iconAnchor: [25, 20],
    });

    return (
        <section className="h-screen">
            <div className="flex justify-between items-center px-5 sm:px-[60px] py-8">
                <h1 className="py-8 text-[23px] text-center font-semibold">Track ISS</h1>
                <div>
                    <Link href="/">
                        <Button className="bg-white" radius="sm">
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
            {issData ? (
                <div className="px-5 sm:px-[60px] py-8">
                    <div className="mb-8 flex flex-col sm:flex-row justify-between">
                        <h3>Name: {issData.name}</h3>
                        <p>Altitude: {issData.altitude} km</p>
                        <p>Latitude: {issData.latitude}</p>
                        <p>Longitude: {issData.longitude}</p>
                    </div>

                    <MapContainer
                        center={[issData.latitude, issData.longitude]}
                        scrollWheelZoom={false}
                        zoom={3}
                        style={{ height: "500px", width: "100%" }}

                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                        />
                        <Marker
                            position={[issData.latitude, issData.longitude]}
                            icon={satelliteIcon}
                        >
                            <Popup>
                                <span>{issData.name}</span>
                            </Popup>
                        </Marker>
                        <Polyline positions={path} color="yellow" weight={2} />
                    </MapContainer>
                </div>
            ) : (
                <p className="text-center text-[20px] font-semibold py-5">Loading data...</p>
            )}
        </section>
    );
};

export default TrackISS;
