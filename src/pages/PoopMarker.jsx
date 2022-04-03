import React, { Component } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow, } from '@react-google-maps/api';
import poopIcon from '../images/poopEmoji_36.png';
import sadPoop from '../images/sad-pile-of-poo-36.png';
import PoopEntry from './PoopEntry'

export default class PoopMarker extends Component {
    constructor(props) {
        super(props);
        this.state = {infoVisible: false}
        this.averagePoopObject = {}
        this.averagePoopObject['accessibility'] = 0
        this.averagePoopObject['ambiance'] = 0
        this.averagePoopObject['amenity'] = 0
        this.averagePoopObject['cleanliness'] = 0
        this.averagePoopObject['privacy'] = 0
        this.averagePoopObject['restroomSpaciousness'] = 0
        this.averagePoopObject['stallSpaciousness'] = 0
        this.averagePoopObject['mirror'] = false
        this.averagePoopObject['comments'] = []
        for (let i = 0; i < props.poopList.length; i++) {
          this.averagePoopObject['accessibility'] += props.poopList[i]['accessibility']
          this.averagePoopObject['ambiance'] += props.poopList[i]['ambiance']
          this.averagePoopObject['amenity'] += props.poopList[i]['amenity']
          this.averagePoopObject['cleanliness'] += props.poopList[i]['cleanliness']
          this.averagePoopObject['comments'].push(props.poopList[i]['comment'])
          this.averagePoopObject['privacy'] += props.poopList[i]['privacy']
          this.averagePoopObject['restroomSpaciousness'] += props.poopList[i]['restroomSpaciousness']
          this.averagePoopObject['stallSpaciousness'] += props.poopList[i]['stallSpaciousness']
          this.averagePoopObject['mirror'] += props.poopList[i]['mirror']
        }
        this.averagePoopObject['accessibility'] /= props.poopList.length
        this.averagePoopObject['ambiance'] /= props.poopList.length
        this.averagePoopObject['amenity'] /= props.poopList.length
        this.averagePoopObject['cleanliness'] /= props.poopList.length
        this.averagePoopObject['privacy'] /= props.poopList.length
        this.averagePoopObject['restroomSpaciousness'] /= props.poopList.length
        this.averagePoopObject['stallSpaciousness'] /= props.poopList.length
  }
    render() {
        return(
          <div>
            <Marker 
              position={{lat: this.props.poopList[0].lat, lng: this.props.poopList[0].long}}
              icon={this.props.isBad ? sadPoop : poopIcon}
              onClick={() => {this.setState({infoVisible: !this.state.infoVisible})}}
              >
                { this.state.infoVisible ? <InfoWindow position={{lat: this.props.poopList[0].lat, lng: this.props.poopList[0].long}}>
                  <div>
                    <h3>{this.props.poopList[0].name}</h3>
                    <h5>Average ratings:</h5>
                    <p>Accessibility: {this.averagePoopObject.accessibility.toFixed(1)}
                    <br/>
                    Ambiance: {this.averagePoopObject.ambiance.toFixed(1)}
                    <br/>
                    Amenity quality: {this.averagePoopObject.amenity.toFixed(1)}
                    <br/>
                    Cleanliness: {this.averagePoopObject.cleanliness.toFixed(1)}
                    <br/>
                    Privacy: {this.averagePoopObject.privacy.toFixed(1)}
                    <br/>
                    Restroom Spaciousness: {this.averagePoopObject.restroomSpaciousness.toFixed(1)}
                    <br/>
                    Stall Spaciousness: {this.averagePoopObject.stallSpaciousness.toFixed(1)}
                    <br/>
                    Full Length Mirror: {this.averagePoopObject.mirror ? 'Yes' : 'No'}
                    </p>
                    <h5>Individual ratings ({this.props.poopList.length}):</h5>
                    <PoopEntry poopList={this.props.poopList}/>

                  </div>
                </InfoWindow> : <></>}
              </Marker>


          </div>
        )
    }
}