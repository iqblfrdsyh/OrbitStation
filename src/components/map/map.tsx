import { Icon } from "leaflet";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup, useMap } from "react-leaflet";

interface ISSData {
    name: string;
    altitude: number;
    latitude: number;
    longitude: number;
}

interface IMapProps {
    issData: ISSData;
    path: { lat: number; lng: number }[];
}

const FollowSatellite = ({ latitude, longitude }: { latitude: number; longitude: number }) => {
    const map = useMap();

    useEffect(() => {
        map.setView([latitude, longitude], map.getZoom());
    }, [latitude, longitude, map]);

    return null;
};

const Map = ({ issData, path }: IMapProps) => {
    const [markerPosition, setMarkerPosition] = useState<[number, number]>([
        issData.latitude,
        issData.longitude,
    ]);

    useEffect(() => {
        setMarkerPosition([issData.latitude, issData.longitude]);
    }, [issData.latitude, issData.longitude]);

    const satelliteIcon = new Icon({
        iconUrl: "/images/iss.svg",
        iconSize: [100, 85],
        iconAnchor: [25, 20],
    });

    return (
        <MapContainer
            center={markerPosition}
            scrollWheelZoom={false}
            zoom={3}
            style={{ height: "500px", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            <FollowSatellite latitude={issData.latitude} longitude={issData.longitude} />
            <Marker position={markerPosition} icon={satelliteIcon}>
                <Popup>
                    <span>{issData.name}</span>
                </Popup>
            </Marker>
            <Polyline positions={path} color="yellow" weight={2} />
        </MapContainer>
    );
};

export default Map;
