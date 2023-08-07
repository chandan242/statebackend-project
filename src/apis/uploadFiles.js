import {BaseURL} from '../constants/baseURL'

export const uploadDoc = async (file) => {
    let token = localStorage.getItem("token");

    let myHeaders = new Headers();
    myHeaders.append("accept", "*/*");
    myHeaders.append("Authorization", "Bearer " + token);

    var formdata = new FormData();
    formdata.append("file", file);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
    };

    const response = await fetch(`${BaseURL}/Entity/uploaddoc`, requestOptions)
    const responseParsed = await response.json()
    console.log(responseParsed, "responseParsed")
    return responseParsed;
}
