import { useEffect, useState } from "react";
import { axiosInstance } from "./axiosInstance";

interface ISSData {
  name: string;
  altitude: number;
  latitude: number;
  longitude: number;
}

export function useDataISS() {
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

      setPath((prev) =>
        [...prev, { lat: latitude, lng: longitude }].slice(-50)
      );
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

  return { issData, path };
}
