import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component} from "react"
import "./MapHike.css";
import { Row, Col, Input, Button, Card, CardTitle } from 'react-materialize'
import { API, USER } from "../../utils";
import SaveButton from "../SaveButton"
import DeleteButton from "../DeleteButton"

export class MapContainer extends Component {
  state = {
    results: [],
    userAc: [],
    isLoggedIn: sessionStorage.isLoggedIn,
    userId: sessionStorage.userId,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    lat: 33.87844665140749,
    lng: -117.80288169790663,
    position: null,
    addressNum: "",
    city: "",
    state: ""
  }
  onInfoWindowClose = () => {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }
  mapClicked = (mapProps, map, event) => {
    this.setState({
      lat: event.latLng.lat(), lng: event.latLng.lng()
    })

  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  render() {
    return (
      <Map google={this.props.google} zoom={14}
        onClick={this.mapClicked}
        centerAroundCurrentLocation={true}
        center={{ lat: this.state.lat, lng: this.state.lng }}
          >

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} 
                position={{ lat: this.state.lat, lng: this.state.lng }}
                />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo')
})(MapContainer)