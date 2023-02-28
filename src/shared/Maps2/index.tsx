import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -3.811487895146092,
  lng: -38.506513545210815,
};

const Maps = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA486Zf0COKeNTKbp3DqhauhFUBrBIXlNw",
  });

  const [map, setMap] = React.useState(null);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div style={{ width: "100%", height: "100%" }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        onUnmount={onUnmount}
      >
        <Marker
          position={center}
          label={{ text: "Provix", color: "#b1120c", fontWeight: "700" }}
        ></Marker>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default Maps;
