import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper,useMediaQuery,Typography } from "@material-ui/core";
import useStyle from "./styles"

const Map = () => {
    const classes = useStyle();
    const coordinates = { lat: 0, lng: 0 };
    return (
        <div className={classes.mapContainer}>
            <h1>Map</h1>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyDibe11DtmwDS6hCKn33yETMwOaZKnfPZ0'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={11}
                margin={[50]}
                options={''}
                onChange={''}
                onChildClick={''}
            />
        </div>
    );
}

export default Map;