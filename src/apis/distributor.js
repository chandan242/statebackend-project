import {BaseURL} from '../constants/baseURL'

export const getAllDistributor = async () => {
    let token = localStorage.getItem("token");

    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("x-api-version", "1.0 ");
    myHeaders.append("Content-Type", "application/json");
    
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      const response = await fetch(`${BaseURL}/StateBackendUsers/getallDistributor`, requestOptions)
      const responseParsed = await response.json()
      return responseParsed["result"];
}

export const uploadDocDistributor = async (file) => {
  let token = localStorage.getItem('token');
  let myHeaders = new Headers();
  myHeaders.append('accept', '*/*');
  myHeaders.append('Authorization', 'Bearer ' + token);
  var formdata = new FormData();
  formdata.append('file', file);
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow',
  };
  const response = await fetch(`${BaseURL}/Distributor/uploaddoc`, requestOptions);
  const responseParsed = await response.json();
  console.log(responseParsed, 'responseParsed');
  return responseParsed;
};

export const createDistributor = async (data) =>{
  let token = localStorage.getItem("token");
  console.log(token);
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("accept","*/*")
  
  const requestOptions = {
      method: 'POST',
      body: JSON.stringify({
          ...data
      }),
      headers: myHeaders
  };
  const response = await fetch(`${BaseURL}/Distributor/createDistributor`, requestOptions);
  const responseParsed = await response.json()
  console.log(responseParsed, "responseParsed")
  return responseParsed;
}

export const addUserDistributor = async (data) =>{
  let token = localStorage.getItem("token");

  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);
  myHeaders.append("Content-Type", "application/json");
  

  const requestOptions = {
      method: 'POST',
      body: JSON.stringify({
          ...data
      }),
      headers: myHeaders
  };
  const response = await fetch(`${BaseURL}/Distributor/createuser`, requestOptions);
  const responseParsed = await response.json()
  console.log(responseParsed, "responseParsed")
  return responseParsed;
}

export const checkUserDistributor = async (username) => {
  const url = `http://www.thexyz.biz:8087/api/Distributor/checkuser?UserName=${username}`;
  let token = localStorage.getItem("token");
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': '*/*',
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Request failed');
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};