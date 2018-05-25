import React , { Component } from "react";
import ReactDOM from "react-dom";
import { compose, withProps, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?libraries=visualization&key=AIzaSyCGjATBrCWBodZMNsGI0UoPPw9ayD3-D4g",
    loadingElement: <div style={{ height: "100%" }} />,
    containerElement: <div style={{ height: '100%', width:'100%'}} />,
    mapElement: <div style={{ height: "100%", width:'100%' }} />,
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
  onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
  
)(props =>
  <div>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 43.0922383, lng: -70.7822634 }}
      >
       {props.isMarkerShown && props.markers.map(marker => (
            <Marker position={{ lat: Number(marker.lat), lng: Number(marker.lng) }}
                    key={marker.id} 
                    onClick={props.onToggleOpen}
            >
              {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
              <div style={{ padding: `12px` }}>
                  <h3 style={{ alignSelf: `center` }}> {marker.name}</h3>
                  <h4 style={{ alignSelf: `left` }}> {marker.date}</h4>
                  <h4 style={{ alignSelf: `left` }}> {marker.address1}</h4>
                  <h4 style={{ alignSelf: `left` }}> {marker.city}</h4>
                  <h4 style={{ alignSelf: `left` }}> {marker.zip}</h4>
              </div>
              </InfoWindow>}
            </Marker>))}
      </GoogleMap>
  </div>
);
export default Map;