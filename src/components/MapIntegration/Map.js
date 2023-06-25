import React from "react";
import GoogleMapReact from 'google-map-react';
import { Loader } from "@googlemaps/js-api-loader"
import './Map.css'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
    const defaultProps = {
        center: {
            lat: 30.3255646,
            lng: 78.0436813
        },
        zoom: 11
    };

    return (
        <>
            <div className="map-container">
                <div style={{ height: '100vh', width: '100vw' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyC27MYJJlpto2AL6s1o2kCfVE9tTzKDYV8" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            </div>
        </>
    );
}