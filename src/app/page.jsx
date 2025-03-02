"use  client";

// import { Button, ButtonGroup } from "@heroui/button";
import MapPage from "./map-view/page";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>use routes: "/map-view" to preview the content </h1>
      <h1>use routes: "/map-set" to set the location (lat,long) </h1>
    </div>
    // <MapPage />
  );
}
