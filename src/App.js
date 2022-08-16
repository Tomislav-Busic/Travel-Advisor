import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
    const [ places, setPlaces ] = useState([]);
    const [ childClicked, setChildClicked ] = useState(null);

    const [ coordinates, setCoordinates ] = useState({});
    const [ bounds, setBounds ] = useState({});

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude} }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        });
    }, []);

    useEffect(() => {
        setIsLoading(true);
        getPlacesData(bounds.sw, bounds.ne)
        .then((data) => {
            setIsLoading(false);
            setPlaces(data);
        })
    }, [coordinates, bounds]);

    return (
        <div>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{width: '100%', margin: '0px'}}>
                <Grid item xs={12} md={4}>
                    <List 
                    places={places}
                    childClicked={childClicked}
                    isLoading={isLoading}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={places}
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

/*
xs={12} this means that this grid is going to take full width on mobile devices
md={4} on medium and larger devices only going to take 4 spaces
margin: '0px' also for mobile devices
*/

export default App;