import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import {getPlacesData} from './api/index';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
    const [ places, setPlaces ] = useState([]);

    const [ coordinates, setCoordinates ] = useState({});
    const [ bounds, setBounds ] = useState(null)

    useEffect(() => {
        getPlacesData()
        .then((data) => {
            console.log(data)
            setPlaces(data)
        })
    }, []);

    return (
        <div>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{width: '100%', margin: '0px'}}>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
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