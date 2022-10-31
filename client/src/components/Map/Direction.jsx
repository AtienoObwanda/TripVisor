import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import mapStyles from '../../mapStyles';
import useStyles from './styles.js';

const Map = ({/*coordinates,*/places, setCoordinates, setBounds, setChildClicked, weatherData }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
  const coordinates = { lat: 0, lng: 0 };//comment out


  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key:'AIzaSyAfZVQGjCF87jQPdx0TGtAN2CnA9W1OMZc' /*process.env.REACT_APP_GOOGLE_MAP_API_KEY*/ }}
        //defaultCenter={coords}
        defaultCenter={coordinates}
        //center={coords}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={''}

      >
                
      </GoogleMapReact>
    </div>
  );
};

export default Map;