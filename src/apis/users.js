import {BaseURL} from '../constants/baseURL'


export const addUserAPI = async (data) =>{
    let token = localStorage.getItem("token");

    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("x-api-version", "1.0 ");
    myHeaders.append("Content-Type", "application/json");
    

    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
            ...data
        }),
        headers: myHeaders
    };
    const response = await fetch(`${BaseURL}/UserRoles/saveuserpermission`, requestOptions);
    const responseParsed = await response.json()
    console.log(responseParsed, "responseParsed")
    return responseParsed;
}

export const updateUserRole = async (data) =>{
    let token = localStorage.getItem("token");

    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("x-api-version", "1.0 ");
    myHeaders.append("Content-Type", "application/json");
  
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
            ...data
        }),
        headers: myHeaders
    };
    const response = await fetch(`${BaseURL}/UserRoles/updateuserpermission`, requestOptions);
    const responseParsed = await response.json()
    console.log(responseParsed, "responseParsed")
    return responseParsed;
}

import axios from "axios";
export const getUserRoles = async () => {
  try {
    let token = localStorage.getItem("token");
    let id = localStorage.getItem('userid')
    let type;
    let userTypes = localStorage.getItem("type")
    console.log(userTypes);
    if(userTypes==="2"){
      type = "SBU";
    }
    else if(userTypes==="3"){
      type = "RTO";
    }
    else if(userTypes==="4"){
      type = "Manufacturer";
    }
    else if(userTypes==="5"){
      type = "Distributor";
    }
    else {
      type = "SUP";
    }
    console.log(type);
    
    let url = `http://www.thexyz.biz:8087/api/${type}/getuserrole?userid=${id}`
    console.log(url);
    const response = await axios.get(
      url,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.data.status) {
      const userRoleNames = response.data.result.map((role) => role.name);
      const userCode = response.data.result.map((role) => role.code);
      return {userRoleNames,userCode};
    }
  } catch (error) {
    console.error("Error fetching user roles:", error);
    throw error;
  }
};