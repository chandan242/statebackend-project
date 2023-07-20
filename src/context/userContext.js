import React, {createContext, useState, useEffect} from 'react';
const UserContext = createContext(undefined);
const setUserContext = createContext(undefined)

function UserProvider({ children }) {
  const [userDetails, setUserDetails] = useState({userId: "", token: ""});

  useEffect(()=>{
    if (sessionStorage.getItem("token")!==null){
      setUserDetails({
        userId: localStorage.getItem("id"),
        token: localStorage.getItem("token"),
      })
    } else {
      setUserDetails({
        userId: "",
        token: "",
      })
    }
  },[])

  let logOutUser = () => {
    setUserDetails({
      userId: "",
      token: "",})
    
    localStorage.removeItem("token")
    localStorage.removeItem("id")
  }

  return (
    <UserContext.Provider value={userDetails}>
        <setUserContext.Provider value={{setUserDetails, logOutUser}}>
            {children}
        </setUserContext.Provider>
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext, setUserContext };
