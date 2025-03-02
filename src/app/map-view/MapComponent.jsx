import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

function MapComponent() {
  const position1 = [-7.782794123757193, 110.36709914609082];
  const position2 = [-7.803516642784995, 110.36461141110689];
  const position3 = [-7.78231588155492, 110.3656809477647];
  const position4 = [-7.78119742107567, 110.36765070796278];

  return (
    <MapContainer
      center={position1}
      zoom={17}
      scrollWheelZoom={false}
      style={{ height: "100vh", width: "100%" }}
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position1}>
        <Popup>Halo dari Tugu Jogja!</Popup>
      </Marker>
      <Marker position={position2}>
        <Popup>Halo dari Rumah</Popup>
      </Marker>
      <Marker position={position3}>
        <Popup>Pasar Kranggan</Popup>
      </Marker>
      <Marker position={position4}>
        <Popup>Hotel</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
