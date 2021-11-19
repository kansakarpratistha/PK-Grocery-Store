import React, { useState } from "react";
import MapGL, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN = "pk.eyJ1IjoicHJhdGlzdGhhIiwiYSI6ImNrdGN0dDM0NTBnYTYyb21hdnpoeTZzNGcifQ.Kpw1PTL5VVUTbk0sNF5M3g";

// const geolocateStyle = {
//   float: "left",
//   margin: "50px",
//   padding: "10px",
// };

const Map = () => {
  // const [viewport, setViewPort] = useState({
  //   width: "100%",
  //   height: 900,
  //   latitude: 38.8951,
  //   longitude: -77.0364,
  //   zoom: 10,
  // });

  // const _onViewportChange = (viewport) =>
  //   setViewPort({ ...viewport, transitionDuration: 3000 });

  return (
    <h1>Map</h1>
    // <div style={{ margin: "0 auto" }}>

    //   <MapGL
    //     {...viewport}
    //     mapboxApiAccessToken={TOKEN}
    //     mapStyle="mapbox://styles/mapbox/dark-v8"
    //     onViewportChange={_onViewportChange}
    //   >
    //     <GeolocateControl
    //       style={geolocateStyle}
    //       positionOptions={{ enableHighAccuracy: true }}
    //       trackUserLocation={true}
    //     />
    //   </MapGL>
    // </div>
  );
};

export default Map;
