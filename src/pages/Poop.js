import React, { Component } from "react";
import './Poop.css';
import { GoogleMap, LoadScript} from '@react-google-maps/api';
import goodPoopData from "./goodPoopData";
import PoopMarker from "./PoopMarker";

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


/**
 * TODO:
 * - resize SVG
 * - make new PoopEntry component
 * - import BAD poop data
 */
class Poop extends Component {
    constructor(props) {
        super(props);
        this.state = {visible: false};
    }
  render() {
    return (
      <LoadScript
        googleMapsApiKey=""
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
          {Object.values(goodPoopData).map((poopList, index) => (
            <PoopMarker poopList={poopList}/>
          ))}
        </GoogleMap>
      </LoadScript>
    )
  }
}
export default Poop;
