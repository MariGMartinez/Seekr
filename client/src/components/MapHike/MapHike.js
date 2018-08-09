import React, { Component } from "react"
import "./MapHike.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Row, Col, Input, Button, Card, CardTitle } from 'react-materialize'
import { API, USER } from "../../utils";
import SaveButton from "../SaveButton"
import DeleteButton from "../DeleteButton"

export class MapContainer extends Component {
  state = {
    trails:[],
    results: [],
    isLoggedIn: sessionStorage.isLoggedIn,
    userId: sessionStorage.userId,
    userAc:[],
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    selectedHikeLat: '',
    selectedHikeLng: '',
    startLat: 0,
    startLng: 0,
    position: null,
    addressNum: "",
    city: "",
    state: ""
  }
//  
  componentWillMount() {
    this.showCurrentPos()
    this.loadUser(this.state.userId)
}
loadUser =(id)=>{
  USER.getUser(id)
      .then(res=>{
          this.setState({
            userAc: res.data,
            selectedHikeLat:res.data.selectedHikeLat,
            selectedHikeLng:res.data.selectedHikeLng,
          })
          console.log(res.data.selectedHikeLat)
      })
}

  startHike = () => {

      var secondsLabel = document.getElementById("time");
      var totalSeconds = 0;
      setInterval(setTime, 1000);
      
      function setTime() {
        ++totalSeconds;
        // console.log(totalSeconds);
        secondsLabel.innerHTML = pad(totalSeconds % 60);
      }
      var distanceTravelledLabel = document.getElementById("distance");
      var totalDistance = 0;
      setInterval(setDistance, 25000);
      
      function setDistance() {
        ++totalDistance;
        // console.log(totalSeconds);
        distanceTravelledLabel.innerHTML = pad(totalSeconds % 60);
      }
      
      function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
          return "0" + valString;
        } else {
          return valString;
        }
      }
    }
  
    endHike = () => {
    }
    

  showCurrentPos = () => {
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position.coords.latitude);
          console.log(position.coords.longitude);
          this.setState({
            startLat: position.coords.latitude,
            startLng: position.coords.longitude
          })
        }
      )
    } else {
      error => console.log(error)
    }
   

  }

  onInfoWindowClose = () => {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }
  mapClicked = (mapProps, map, event) => {
    //this.setState({
    //   lat: event.latLng.lat(), lng: event.latLng.lng()
    //})
    alert(event.latLng.lat() + '/' + event.latLng.lng())

  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  render() {
    const style = {
      width: '100%',
      height: '100vh'
    }

    const { startLat, startLng} = this.state;

    return (
      <Row id="pos">
        <Col s={12} id="pos">

          <Map style={style}
            google={this.props.google}
            mapTypeId={this.satellite}
            zoom={9}
            onClick={this.mapClicked}
            
            center={{ lat: this.state.startLat, lng: this.state.startLng }}>
            
            <Marker
              onClick={this.onMarkerClick}
              name={'Your current location'}
              position={{ lat: startLat, lng: startLng }} />
            <Marker 
              onClick={this.onMarkerClick}
              name={'The end location'}
              position={{ lat: this.state.selectedHikeLat, lng: this.state.selectedHikeLng}}/>
          </Map>
          <Row id="pos">
            <Button className='red' waves='light' id='start' onClick={() => this.startHike()}>Start Hike</Button>
          </Row>
          <Row id="pos">
            <Button className='red' waves='light' id='end' onClick={() => this.endHike()} >End Hike</Button>
          </Row>
          <Row id="pos">
            <h6>Distance Traveled: </h6><h6 id='distance'></h6>
            <h6>Time: </h6><h6 id='time'></h6>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBOWlSKL22cnTlCyamBX-CpBHKu6DKt7qU'
})(MapContainer)