import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import axios from 'axios';


const style = {
    width: '100%',
    height: '100%'
  }

const containerStyle = {
    position: 'absolute',  
    width: '100%',
    height: '100%'
  }

export class Location extends Component {
  state = {
    showingInfoWindow: false,  //Hides or shows the infoWindow
    activeMarker: {},           //Shows the active marker upon click
    selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
    riders: []
  };

onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};

componentDidMount() {
  axios.get(`http://127.0.0.1:3000/api/riders`)
  .then(response => {
    this.setState({riders: response.data})
  })
  .catch(error => console.log(error))
} 


render() {
  return (
        <Map
          google={this.props.google}
          style={style}
          containerStyle={containerStyle}
          initialCenter={{
            lat: 40.01,
            lng: -105.28
          }}
          zoom={13}
          onClick={this.onMapClicked}
        >
        {this.state.riders.map( (rider, index) => {
          return (
            <Marker
              key={index}
              title={rider.firstname+" "+rider.lastname}
              name={"#"+rider.firstname+" from "+rider.city+" ("+rider.state+")"}
              position={{lat: rider.lat, lng: rider.lng}}
              onClick={this.onMarkerClick} >
                
              </Marker>
                

            
          )}
          
        )}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.title}</h4>
            <h5>{this.state.selectedPlace.name}</h5>
          </div>
        </InfoWindow>
    </Map>
  );
}
}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: '',
    language: props.language,
  }
))(Location); 


