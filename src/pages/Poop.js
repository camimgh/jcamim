import React, { Component } from "react";
import './Poop.css';
import { GoogleMap, LoadScript} from '@react-google-maps/api';
import goodPoopData from "./goodPoopData";
import PoopMarker from "./PoopMarker";
import config from '../config'
import badPoopData from "./badPoopData";

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
      <div id="poop">
        <div id="poop-text">
        <h5>What am I looking at?</h5>
        <p>Welcome to my Poop Map! 
          Back on November 29, 2021 I sent
          out an email to all MIT students asking them their favorite
          and least favorite places to shit on campus.
          Here are those results. All ratings are on a scale of 1 to 5. Happy poop emojis indicate
          a favorite poop location. Sad poop emojis represent a person's least favorite poop locale.
        </p>
        </div>
      <LoadScript
        googleMapsApiKey={U_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
          {Object.values(goodPoopData).map((poopList, index) => (
            <PoopMarker poopList={poopList} isBad={false}/>
          ))}
          {Object.values(badPoopData).map((poopList, index) => (
            <PoopMarker poopList={poopList} isBad={true}/>
          ))}
        </GoogleMap>
      </LoadScript>

      </div>
    )
  }
}
export default Poop;
