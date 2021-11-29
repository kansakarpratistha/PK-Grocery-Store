import React, { useState } from "react";
import MapGL, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
// import ReactMapGL, { FlyToInterpolator, NavigationControl } from "react-map-gl";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "@monsonjeremy/react-leaflet";
import mapboxgl from "mapbox-gl";
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
// mapboxgl.workerClass = MapboxWorker.default;

const TOKEN =
  "pk.eyJ1IjoicHJhdGlzdGhhIiwiYSI6ImNrdGN0dDM0NTBnYTYyb21hdnpoeTZzNGcifQ.Kpw1PTL5VVUTbk0sNF5M3g";

const geolocateStyle = {
  float: "left",
  margin: "50px",
  padding: "10px",
};

const Map = () => {
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: 900,
    latitude: 38.8951,
    longitude: -77.0364,
    zoom: 10,
  });

  const _onViewportChange = (viewport) =>
    setViewPort({ ...viewport, transitionDuration: 3000 });

  return (
    <div style={{ margin: "0 auto"}}>
      <MapContainer center={[26.66537506918353, 87.27050627796757]} zoom={15} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[26.66537506918353, 87.27050627796757]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      {/* {" "}
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v8"
        onViewportChange={_onViewportChange}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </ReactMapGL>{" "}
       */}
    </div>
  );
};

export default Map;
