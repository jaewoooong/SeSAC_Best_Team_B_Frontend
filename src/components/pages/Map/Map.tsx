import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, MarkerF, Marker, InfoWindow } from '@react-google-maps/api';
import { DataItem } from "../data/data";
import BoxList from "../First/BoxList";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
const myStyles = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
];
const containerStyle = {
  width: '100vw',
  height: '100vh'
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
  const { roomId } = useParams(); 
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
    <>
      <aside style={{background : "#000"}}>
          <div>
            <Link to="/">
              <img src="/Home.png" alt="" />
              
            </Link>
            <Link to={`/map/${roomId}`}>
              <div className="menu">
                <img src="/earth.png" alt="" />
                <span>Map</span>
              </div>
            </Link>
            <Link to={`/timeline/${roomId}`}>
              <div className="menu">
                <img src="/Image.png" alt="" />
                <span>timeline</span>
              </div>
            </Link>
            <Link to="/login">
              <div className="menu">
                <img src="/Settings.png" alt="" />
                <span>login</span>
              </div>
            </Link>
            <div style={{width:"80%" , textAlign:"center", color:"#fff", marginTop:"100px",margin:"20px 10%", background: "rgb(255 255 255 / 15%)", padding:"7px 0", borderRadius:"15px 25px 15px 25px"}}> 
              <img style={{marginRight:"5px"}} className='/uploadImg.png' src="/upload.png" alt="" width={40} height={40}/>
              <div>upload</div>
            </div>
            <div className="close-button"></div>
          </div>
        </aside>
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
    </>
  
  ) : <></>
}
export default React.memo(Map)