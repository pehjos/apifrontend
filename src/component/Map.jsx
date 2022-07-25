import React from 'react'
import './map.css'
import { useEffect, useState } from "react";
import ReactMapGL, { Marker, FlyToInterpolator }
      from "react-map-gl";
import Fly from "./Fly";
import { ImLocation } from "react-icons/im";
function Map() {
    const [lat, setLat] = useState(7.33991);
  const [lon, setLon] = useState(-2.32676);
  
  // Setting up the state for the map
  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lon,
    zoom: 12,
    bearing: 0,
    pitch: 0,
    width: "100%",
    height: "100vh",
    borderRadious:"30px"
  });
  
  // Map viewport updates whenever the
  // latitude and longitude changes
  useEffect(() => {
    setViewport({
      latitude: lat,
      longitude: lon,
      zoom: 12,
      transitionInterpolator: 
        new FlyToInterpolator({ speed: 1.0 }),
      transitionDuration: "auto",
      width: "100%",
      height: "60vh",
      borderRadious:"30px"
    });
  }, [lat, lon]);
  return (
    <div className='map_gl'>
        

        <ReactMapGL
      mapboxApiAccessToken={"pk.eyJ1IjoiZGphbmdvdGVzdDQ1IiwiYSI6ImNsMnNja3J0ejA1YXYzY2xtdnBjbW5qYXIifQ.PS1zPRb01DPmyA1B4ca5Ug"}
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      <Marker latitude={lat} longitude={lon}>
        <ImLocation color='red' size="30px" />
      </Marker>
      <Fly setLat={setLat} setLon={setLon} />
    </ReactMapGL>

        
    </div>
  )
}

export default Map