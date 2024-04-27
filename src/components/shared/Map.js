import React, { useState } from "react";
import CustomInput from "../shared/CustomInput";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

function LocationMarker() {
  const [position, setPosition] = useState(null);

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function MapComponent() {
  return (
    <div className="map flex-column flex-sm-row d-flex gap-3 w-100 z-index-0">
      <div className="w-sm-50 w-100">
        <MapContainer
          style={{ height: "300px", zIndex: "0" }}
          center={{ lat: 51.505, lng: -0.09 }}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
        </MapContainer>
      </div>
      <div className="d-flex w-sm-50 flex-column p-4  w-100 ">
        <CustomInput
          name="type"
          label="Type"
          placeholder="Enter type"
          type="text"
        />
        <CustomInput
          name="latitude"
          label="Latitude"
          placeholder="Add latitude"
          type="text"
        />
        <CustomInput
          name="longitude"
          label="Longitude"
          placeholder="Add longitude"
          type="text"
        />
      </div>
    </div>
  );
}

export default MapComponent;
