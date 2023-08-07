import {BaseURL} from '../constants/baseURL'

export const login = async (username,password) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    };
    const response = await fetch(`${BaseURL}/UserRoles/userlogin`, requestOptions)
    const responseParsed = await response.json()
    
    localStorage.setItem('token', (responseParsed.token))
    localStorage.setItem('id', (responseParsed.loginResp.id))
    localStorage.setItem("userObject", JSON.stringify(responseParsed));

    window.location = '/dashboard';       
    return responseParsed
}

export const logout = async () => {
    localStorage.setItem('token', "")
    localStorage.setItem('id', "")
    localStorage.setItem("userObject", "");
    window.location = '/';       
}
