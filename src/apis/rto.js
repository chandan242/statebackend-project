import {BaseURL} from '../constants/baseURL'


export const createRTO = async (data) =>{
    let token = localStorage.getItem("token");
    console.log(token);
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
    const response = await fetch(`${BaseURL}/RTO/createrto`, requestOptions);
    const responseParsed = await response.json()
    console.log(responseParsed, "responseParsed")
    return responseParsed;
}

export const getRTOList = async () => {
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
      
      const response = await fetch(`${BaseURL}/StateBackendUsers/getallrto`, requestOptions)
      const responseParsed = await response.json()
      return responseParsed["result"];
}

export const addUserRTO = async (data) =>{
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
    const response = await fetch(`${BaseURL}/RTO/createuser`, requestOptions);
    const responseParsed = await response.json()
    console.log(responseParsed, "responseParsed")
    return responseParsed;
}