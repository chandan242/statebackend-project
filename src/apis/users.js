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
    let id = localStorage.getItem('id')
    const response = await axios.get(
      `http://www.thexyz.biz:8087/api/UserRoles/getuserrole?userid=${id}`,
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