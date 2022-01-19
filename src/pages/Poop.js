import React, { Component } from "react";
import './Poop.css';
import { GoogleMap, LoadScript, Marker, InfoBox, } from '@react-google-maps/api';
import poopIcon from '../images/poopIcon.svg';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 42.359331586138204, 
  lng: -71.09311744384267,
};

const mitmedical = {
    lat: 42.361311694039244, 
    lng: -71.08662343035172
}

class Poop extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyCdH7c_I_CiTAPMc08ZXhoo4VCl4A_N5WM"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
          <Marker
            position={mitmedical}
            icon={poopIcon}
            />
        </GoogleMap>
      </LoadScript>
    )
  }
}
export default Poop;
