import React, { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from "@react-google-maps/api";
import MarkerInfo from "./MarkerInfo";

export default function ContactMap() {
  const [showMarkerInfo, setShowMarkerInfo] = useState(false);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
  });
  const center = useMemo(() => ({ lat: 51.14926879381884, lng: -113.97211809399805 }), []);

  return (
    <div className="map-div">
      {(!isLoaded) && <div>Loading..</div>}
      {isLoaded && <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        <MarkerF position={center} onMouseOver={() => setShowMarkerInfo(true)} onMouseOut={() => setShowMarkerInfo(false)}>
          {showMarkerInfo && <InfoWindowF>
            <MarkerInfo />
          </InfoWindowF>}

        </MarkerF>
      </GoogleMap>}
    </div>
  );
}