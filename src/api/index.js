import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359'
    },
    headers: {
      'X-RapidAPI-Key': '3819bbdfbemsh728d704970277e1p165420jsn747a79b95703',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
  


export const getPlacesData = async () => {
    try {
        const {data: {data}} = await axios.get(URL, options);
        return data;
    } catch (error) {
        console.log(error)
    }    
}

/*
{data: {data}}   -> we can immediately destrusture the data right in here
now that we have our function we can 'export' it  
*/ 

/*
axios is the library that's going to help us make our calls
*/