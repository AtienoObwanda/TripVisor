import React,{useState, useEffect} from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import List from './components/List/List';
//import Map from './components/Map/Map';
import Direction from './components/Map/Direction'

import { getPlacesData } from './api';

const App = () => {

    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({ });
    const [bounds, setBounds] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
            
        })
    }, []);

    useEffect(() => {
        getPlacesData( /*bounds.sw, bounds.ne*/) //remove comments later once you've activated api
            .then((data) => {
                console.log(data);
                setPlaces(data);
            
        })
    }, [coordinates, bounds]);

    return (
        <>
        
        <CssBaseline />
        <Header />;
        
        <Grid container spacing={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
        <List />
        </Grid>
        <Grid item xs={12} md={8}>
        <Direction
                setCoordinates={setCoordinates}
                setBounds={setBounds}      
                    
                    />
        </Grid>
        </Grid>
    
        
            </>
            );
    
}

export default App;

