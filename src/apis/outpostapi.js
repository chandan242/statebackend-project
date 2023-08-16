
import axios from 'axios';

const apiUrl = 'https://outpost.mapmyindia.com/api/security/oauth/token';

const getAccessToken = async () => {
  const formData = new FormData();
  formData.append('grant_type', 'client_credentials');
  formData.append('client_id', '33OkryzDZsI6zffdbNB9YyDNAmelVSXDKSkJLtIewBqnSWSL7G00JjLOmkbk2_lnLq--lTIRujdaUcHN-bQjzYsArtDL_pYj');
  formData.append('client_secret', 'lrFxI-iSEg8SoKZacRf0sf3O3g4CcSDYVBjx1ULzenLsFzpntO9B20Ku62oHo63-kuEtTuxFFbXDsjNHE8A2aggVmHcXmqP4yTjcYHwro7Q=');

  try {
    const response = await axios.post(apiUrl, formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    console.log("222222222222");
    const { access_token } = response.data;
    localStorage.setItem("ACCESS_TOKEN_KEY", access_token);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getAccessToken;


export const fetchDataToken = async (token) => {
  const API_URL = 'https://intouch.mapmyindia.com/iot/api/devices/';
  const access_token = localStorage.getItem("ACCESS_TOKEN_KEY");
  
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const locationData = response.data.data;
    console.log(locationData);
    const locations = locationData.filter(item=>item.location !== undefined).map(item=>item.location)
    const latitudes = locationData
    .filter(item => item.location && item.location.latitude !== undefined)
    .map(item => item.location.latitude);
  
  const longitudes = locationData
    .filter(item => item.location && item.location.longitude !== undefined)
    .map(item => item.location.longitude);  

    // Now you can save latitudes and longitudes to your application state or process them as needed
    // For example, you can save them to a Redux store or a state hook in a functional component.

    return { latitudes, longitudes,locations }; // Return the extracted data
  } catch (error) {
    throw error;
  }
};

