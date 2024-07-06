"use client";
import dynamic from "next/dynamic";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MapLeaflet = dynamic(() => import("./MapLeafLet"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const Map = () => {
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>Branch Location</CardTitle>
        <CardDescription>Click on marker for branch details</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[500px] w-auto p-10 flex flex-col items-center justify-center">
          <MapLeaflet />
        </div>
      </CardContent>
    </Card>
  );
};

export default Map;
