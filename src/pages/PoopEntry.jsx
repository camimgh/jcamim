import React, { Component, } from 'react'

export default class PoopMarker extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return(
            <div>
            {this.props.poopList.map((poop, index) => (
                <div>
                {/* <h6>{poop.description} {poop.gender === "" ? <></> : ({poop.gender})}</h6> */}
                {poop.gender === "" ? <h6>{poop.description}</h6> : <h6>{poop.description} ({poop.gender})</h6>}
                <p>
                    Accessibility: {poop.accessibility}
                    <br/>
                    Ambiance: {poop.ambiance}
                    <br/>
                    Amenity quality: {poop.amenity}
                    <br/>
                    Cleanliness: {poop.cleanliness}
                    <br/>
                    Privacy: {poop.privacy}
                    <br/>
                    Restroom Spaciousness: {poop.restroomSpaciousness}
                    <br/>
                    Stall Spaciousness: {poop.stallSpaciousness}
                    <br/>
                    Availability: {poop.availability}
                    <br/>
                    {poop.comment === "" ? <></> : <p>Comment: {poop.comment}</p>}
                </p>
                </div>
            ))}
            </div>
        );
    }
}