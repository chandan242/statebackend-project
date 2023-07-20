import {BaseURL} from '../constants/baseURL'

export const login = async (data) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: data["username"],
            password: data["password"],
        }),
    };
    const response = await fetch(`${BaseURL}/UserRoles/userlogin`, requestOptions)
    const responseParsed = await response.json()
    
    localStorage.setItem('token', (responseParsed.token))
    localStorage.setItem('id', (responseParsed.loginResp.id))
    localStorage.setItem("userObject", JSON.stringify(responseParsed));

    console.log("localstorage", localStorage.getItem("userObject"))

    window.location = '/dashboard';       

    return responseParsed
}


export function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("userObject")
    localStorage.removeItem("id")
    window.location = '/login';
  }