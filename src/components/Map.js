import { useState } from "react";
import ReactMapGL from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 39.52814860486671,
    longitude: -122.19857065478892,
    zoom: 11,
  });
  /*
width: "100%",
    height: "100%",
    latitude: 39.52814860486671,
    longitude: -122.19857065478892,
    zoom: 11,
  */
  return (
    <ReactMapGL
      {...viewport}
      // mapLib={import("mapbox-gl")}
      mapboxAccessToken={process.env.mapbox_key}
      mapStyle="mapbox://styles/raba64577/clnf7erzf01hs01ps3veca2928"
      // initialViewState={{
      //   longitude: -122.19857065478892,
      //   latitude: 39.52814860486671,
      //   zoom: 11,
      // }}
      // style={{ width: "100%", height: "100%" }}
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
    />
  );
};

export default Map;
