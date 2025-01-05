"use client";

import React from "react";
import { FaSatellite, FaMapMarkedAlt, FaRegCompass } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import { Button } from "@nextui-org/react";
import { useDataISS } from "@/hook/usaDataISS";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/map/map"), { ssr: false });

const TrackISS = () => {
    const { issData, path } = useDataISS()

    return (
        <section className="h-screen z-30">
            <div className="flex justify-between items-center px-5 sm:px-[60px] py-8">
                <h1 className="py-8 text-[23px] text-center font-semibold">Track ISS</h1>
                <div>
                    <Button onPress={() => window.location.replace("/")} className=" bg-white" radius="sm">
                        Back to Home
                    </Button>
                </div>
            </div>
            {issData ? (
                <div className="px-5 sm:px-[60px] py-8">
                    <div className="mb-8 flex flex-col justify-between items-center sm:items-start bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-center space-x-3 sm:mb-5">
                            <FaSatellite className="text-2xl text-blue-500" />
                            <h3 className="text-xl font-semibold text-gray-800">Live Tracking {issData.name.toLocaleUpperCase()}</h3>
                        </div>

                        <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row justify-between w-full">
                            <div className="flex items-center space-x-2">
                                <FaMapMarkedAlt className="text-gray-600" />
                                <p className="text-gray-700">Altitude: {issData.altitude} km</p>
                            </div>
                            <div className="mt-2 sm:mt-0 flex items-center space-x-2">
                                <FaRegCompass className="text-gray-600" />
                                <p className="text-gray-700">Latitude: {issData.latitude}</p>
                            </div>
                            <div className="mt-2 sm:mt-0 flex items-center space-x-2">
                                <FaRegCompass className="text-gray-600" />
                                <p className="text-gray-700">Longitude: {issData.longitude}</p>
                            </div>
                        </div>
                    </div>
                    <Map issData={issData} path={path} />
                </div>
            ) : (
                <p className="text-center text-[20px] font-semibold py-5">Loading data...</p>
            )}
        </section>
    );
};

export default TrackISS;
