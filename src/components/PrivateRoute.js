const PrivateRoute = ({children}) => {

    let token = localStorage.getItem("token")

    if(token !== null)
        {return children}
    else
        {window.location = '/login';}

}

export default PrivateRoute