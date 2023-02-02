import axios from 'axios';

export const baseUrl ='https://bayut.p.rapidapi.com'


export const fetchApi= async (url) => {
    const {data} = await axios.get((url), {
        headers: {
                'X-RapidAPI-Key': 'cc270e767dmsh943207e744c00a7p1a7a66jsn41a8b34fe252',
                'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
             }
    });
    return data;
}