import React , { Component } from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?libraries=visualization&key=AIzaSyCGjATBrCWBodZMNsGI0UoPPw9ayD3-D4g",
    loadingElement: <div style={{ height: "100%" }} />,
    containerElement: <div style={{ height: '100%', width:'100%'}} />,
    mapElement: <div style={{ height: "100%", width:'100%' }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <div>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
      </GoogleMap>
  </div>
);
export default Map;