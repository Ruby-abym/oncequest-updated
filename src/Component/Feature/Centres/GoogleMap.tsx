import { useState } from 'react';

import SectionLoader from '@/Component/Common/Loader/SectionLoader';
const InfoWindow = require('react-google-maps').InfoWindow

import {
    GoogleMap,
    useLoadScript,
    Marker,
    Autocomplete,
  } from "@react-google-maps/api";

  const containerStyle={
    height:"100%",
    maxHeight:"700px",
    width:"100%",
  }
const SIZE = 400;
const MapWithMarker = ((props: any) => {
  const [popupInfo, setPopupInfo] = useState<any>("");
  let arr: any[] = [];
  let lat: number = 0;
  let lng: number = 0;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBdZRmvc_EiOcYC2w9uIzO4h3xaq6Rebds',
    libraries: ["places"],
  });
  if (!isLoaded) return  <SectionLoader/>;
  if (Object.values(props) && Object.values(props)?.length > 0) {
    Object.values(props)?.map((item: any) => {
      if (
        item?.CentreLat !== "" &&
        item?.CentreLat !== null &&
        item?.CentreLng !== "" &&
        item?.CentreLng !== null
      ) {
        arr.push(item);
        lat += parseFloat(item?.CentreLat);
        lng += parseFloat(item?.CentreLng);
      }
    })
  }
  console.log("hello")
  return (
    // <>hello</>
    <GoogleMap
      zoom={5}
      center={{ lat: lat / arr.length || 22.729860, lng: lng / arr.length || 75.898130 }}
      mapContainerStyle={containerStyle}
    >
      {Object.keys(props) && Object.values(props)?.map((item: any, i: any) => {
        let marker = item;
        return (
          <>
            <Marker
              key={i}
              position={{ lat: parseFloat(marker?.CentreLat), lng: parseFloat(marker?.CentreLng) }}
              onClick={(e: any) => { setPopupInfo({ info: marker, lat: parseFloat(marker?.CentreLat), long: parseFloat(marker?.CentreLng) }); }}
            >
              <svg
                key={i}
                height={SIZE}
                viewBox="0 0 24 24"
                style={{
                  cursor: 'pointer',
                  fill: '#d00',
                  stroke: 'none',
                  transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
                }}
              />
              {popupInfo && marker?.CentreLat == popupInfo?.lat &&
                <InfoWindow key={i} onCloseClick={() => setPopupInfo({})}
                >
                  <div style={{ fontSize: "16px", padding: "5px", fontWeight: 400, maxWidth: "300px" }}>
                    <h6>{popupInfo?.info?.CentreName}</h6>
                    <div style={{ fontSize: "16px", padding: "5px", fontWeight: 400, textAlign: "left" }}>
                      {popupInfo?.info?.AddressLine1 ? popupInfo?.info?.AddressLine1 + ", " : ""}
                      {popupInfo?.info?.AddressLine2 ? popupInfo?.info?.AddressLine2 + ", " : ""}
                      {popupInfo?.info?.Locality ? popupInfo?.info?.Locality + ", " : ""}
                      {popupInfo?.info?.Locality ? popupInfo?.info?.Locality + ", " : ""}
                      {popupInfo?.info?.CityName ? popupInfo?.info?.CityName + ", " : ""}
                      {popupInfo?.info?.Pincode ? popupInfo?.info?.Pincode + "- " : ""}
                      {popupInfo?.info?.StateName ? popupInfo?.info?.StateName : ""}
                    </div>
                  </div>
                </InfoWindow>
              }
            </Marker>
          </>
        )
      })}
    </GoogleMap>
  )
}
);
export default MapWithMarker;


