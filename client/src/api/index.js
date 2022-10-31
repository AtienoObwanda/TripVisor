import axios from 'axios';
const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundaryS'

//const options = {
  //method: 'GET',
  //url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
  
//};
  
  
export const getPlacesData = async (sw,ne) => { 
    try {
      const { data: { data } } = await axios.get(URL, {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': 'de963f7390msh420e347ae78438fp1d4431jsn463bc05e563e'
        }});
        
      
      
      
      
      
      return data;

    } catch (error) {
        console.log(error)

    }


}