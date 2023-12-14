import {BaseURL} from '../constants/baseURL'

export const uploadDocESIM = async (file) => {
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
    const response = await fetch(`${BaseURL}/EsimProvider/uploaddoc`, requestOptions);
    const responseParsed = await response.json();
    console.log(responseParsed, 'responseParsed');
    return responseParsed;
};

export const createESIM = async (data) =>{
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
    const response = await fetch(`${BaseURL}/EsimProvider/createEsimProvider`, requestOptions);
    const responseParsed = await response.json()
    console.log(responseParsed, "responseParsed")
    return responseParsed;
}