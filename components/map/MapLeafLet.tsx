import React from "react";
import { GeoJSON, MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import * as topojson from "topojson-client";
import { GeoJsonObject } from "geojson";
import L, { LeafletMouseEvent } from "leaflet";
import "leaflet/dist/leaflet.css";

const COUNTRY_VIEW_ID = "default";

const MapLeaflet = () => {
  const aujson = require("../../lib/au.json");
  const geoJson: GeoJsonObject = topojson.feature(
    aujson,
    aujson.objects[COUNTRY_VIEW_ID]
  ) as GeoJsonObject;

  L.Marker.prototype.options.icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  });

  const svR = `data:image/svg+xml;utf8,${encodeURIComponent(`<?xml version="1.0" encoding="iso-8859-1"?>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="skyblue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    `)}`;
  const skyBlueIcon = L.icon({
    iconUrl: svR,
    iconSize: [45, 61],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  function onEachFeature(
    feature: GeoJSON.Feature<GeoJSON.Geometry, any>,
    layer: L.Layer
  ) {
    layer.on({
      mouseover: showOverlayOnHover,
      mouseout: resetHighlight,
    });
  }
  function showOverlayOnHover(e: LeafletMouseEvent) {
    var layer = e.target;
    //var stateName = layer.feature.properties.name;
    layer.setStyle({
      fillColor: "#2A4783",
    });
    //layer.bindPopup(stateName).openPopup();
  }

  function resetHighlight(e: L.LeafletMouseEvent) {
    var layer = e.target;
    layer.setStyle({
      fillColor: "#C8D0D8",
    });
  }

  function geoJSONStyle() {
    return {
      color: "#ffffff",
      weight: 1,
      fillOpacity: 0.5,
      fillColor: "#C8D0D8",
    };
  }

  return (
    <>
      <MapContainer
        doubleClickZoom={false}
        id="mapId"
        zoom={4}
        minZoom={4}
        center={[-26.844614737703015, 136.01307392322454]}
        className="h-[500px] w-[100%]"
      >
        <Marker icon={skyBlueIcon} position={[-23.1364, 144.778]}>
          <Popup className="custom-popup">
            <p className="text-sm">Branch Location 1</p> Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </Popup>
        </Marker>
        <Marker icon={skyBlueIcon} position={[-35.4618, 148.983]}>
          <Popup className="custom-popup">
            <p className="text-sm">Branch Location 2</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Popup>
        </Marker>
        <GeoJSON
          data={geoJson}
          style={geoJSONStyle}
          onEachFeature={onEachFeature}
        />
      </MapContainer>
    </>
  );
};

export default MapLeaflet;
