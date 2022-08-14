import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from './style';


const List = () => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    const places = [
        {name: 'Cool Place'},
        {name: 'Best Beer'},
        {name: 'Best Steak'}
    ];


    return (
        <div className={classes.container}>
            <Typography variant="h4">Restaurants, Hotels and Attractions around you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>                   
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3</MenuItem>
                    <MenuItem value={4}>Above 4</MenuItem>                   
                    <MenuItem value={4.5}>Above 4.5</MenuItem>                   
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                       <CARD/>     
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default List;

/*
plases?   -> this means only if you have places only then map over them
map takes in a callback function and then in each interation of callback it has one new place
(place, i) -> index is always given to you as the second parameter
{} = () in this case we only need parentheses because we're going to instantly return
*/