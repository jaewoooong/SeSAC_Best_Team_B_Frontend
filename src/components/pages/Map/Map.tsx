import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, MarkerF, Marker, InfoWindow } from '@react-google-maps/api';
import { DataItem } from "../data/data";
import BoxList from "../First/BoxList";
const myStyles = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
];
const containerStyle = {
  width: '400px',
  height: '600px'
};
interface MapProps {
  data: DataItem[]
}
// 지도 초기 중심값
const center = {
  lat: 36.586148,
  lng: 128.1867972
};
const img_src = 'https://picsum.photos/id/237/200/300';
const zoom = 7;
function Map({ data }: MapProps) {
  console.log("Map.tsx", data)
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY as string
  })
  const [map, setMap] = React.useState(null)
  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    // zoom props에 맞춰서 크기 조절하기 위해 비활성화
    // map.fitBounds(bounds);
    setMap(map)
  }, [])
  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ disableDefaultUI: true, styles: myStyles }}
    >
      { /* Child components, such as markers, info windows, etc. */}
      {data?.map((item, index) => (
        item.images.length > 0 && (
          <Marker
            key={index} // 고유한 키 사용 (인덱스 대신 데이터에서 고유한 식별자 사용하는 것이 좋습니다)
            position={{
              lat: item.images[0].GPSLatitude, // 데이터에서 가져온 위치 정보 사용
              lng: item.images[0].GPSLongitude,
            }}
            icon={{ url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png', scale: 5 }}
          >
            <InfoWindow>
              <div>
                {item.record.recordValue}
                <BoxList key={item.record.recordId} images={item.images} record={item.record} />
              </div>
            </InfoWindow>
          </Marker>
        )
      ))}
      <></>
    </GoogleMap>
  ) : <></>
}
export default React.memo(Map)