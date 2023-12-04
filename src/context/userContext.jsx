import React, {createContext, useState, useEffect} from 'react';
export const UserContext = createContext(undefined);
export const setUserContext = createContext(undefined)

export const  UserProvider = ({ children }) => {
  
  const [userDetails, setUserDetails] = useState(null);

  const user = (localStorage.getItem('userObject') && JSON.parse(localStorage.getItem('userObject'))["loginResp"]) || null
  

  useEffect(()=>{
    if (user!==null){
      setUserDetails(user)      
      console.log("setting timeout of 1 min")
      setTimeout(logOutUser, 30 * 60 * 1000);
    }
  },[])

  const logOutUser = () => {
    console.log("Logging out...");
    setUserDetails(null)
    
    localStorage.removeItem("token")
    localStorage.removeItem("id")
    localStorage.removeItem("userObject")
  }

  return (
    <UserContext.Provider value={userDetails}>
        <setUserContext.Provider value={{setUserDetails, logOutUser}}>
            {children}
        </setUserContext.Provider>
    </UserContext.Provider>
  );
}
