import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';



export const getPlacesData = async (sw, ne) => {
    try {
        const {data: {data}} = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng
          },
          headers: {
            'X-RapidAPI-Key': '3819bbdfbemsh728d704970277e1p165420jsn747a79b95703',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
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