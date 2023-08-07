// import { LoginScreen } from "./loginScreen";
// import { useState } from "react";
// import publicImage from "./GPS-tracker-3.jpg";
import { login } from "../../apis/authentication";
import { LoadingWidget } from "../../components/loading";

// export const PublicPage = () => {

//   const [data, setData] = useState({});
//   const [isLoading, setIsLoading] = useState(false);

//   const onChange = (e) => {
//     const data_new = { ...data };
//     data_new[e.target.name] = e.target.value;
//     setData(data_new);
//   };

//   const handleSubmit = async (e) => {
//     console.log(data);
//     e.preventDefault();
//     setIsLoading(true);
//     response = await login(data);
//     setIsLoading(false);
//   };

//   const formFieldUI = (label, name, type) => {
//     return (
//       <div key={name} className="form-groups ">

//         <label className="form-labels">{label}</label>
//         <input
//           required
//           className="form-inputs"
//           name={name}
//           type={type}
//           onChange={(e) => onChange(e)}
//         ></input>

//       </div>
//     );
//   };

//   return (
//     <div className="login-container">
//     {
//       isLoading ? (<LoadingWidget/>):(
//         <div >
//         <div className="navs">
//           <div className="nav-title">
//             <h4>State Backend</h4>
//           </div>
//         </div>
//         <div className="login-item-container">
//           <div className="login-item-image">
//             <img src={publicImage} alt="login_image"/>
//           </div>
//           <div className="login-item-screen">
//             <div   className="form-container login-form">
//                   <form>
//                     <div  className="form-tag">
//                     <h4>Login</h4>
//                     <div className="">{formFieldUI("Email ID", "username", "text")}</div>
//                     <div className="row">
//                       {formFieldUI("Password", "password", "password")}
//                     </div>
//                     </div>
  
//                     <div className="form-submit-btn">
//                       <button onClick={(e) => handleSubmit(e)}>Login</button>
//                     </div>
  
//                   </form>
//                 </div>
//           </div>
//         </div>
//       </div>
//       )
//     }
//     </div>
//   )
// };






// import ErrorUI from '../../components/ErrorUI'
import { validateUsername,validatePassword } from "../../constants/Validation";
import React, { useEffect, useState } from "react";

export const PublicPage = () => {
  const [Username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [usernameErrors, setUsernameErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);

  const handleUsernameChange = (e) => {
    setusername(e.target.value);
    setUsernameErrors(null); // Clear errors when the user starts typing again
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordErrors(null); // Clear errors when the user starts typing again
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Validate username
    const usernameErrors = validateUsername(Username);
    setUsernameErrors(usernameErrors || []);

    // Validate password
    const passwordErrors = validatePassword(password);
    setPasswordErrors(passwordErrors || []);

    // If there are any errors, stop the submission
    if (usernameErrors || passwordErrors) {
      return;
    }

    setIsLoading(true)
    response = await login(Username,password);
    setIsLoading(false)
    console.log(Username, password, "Aa");
  };

  return (
    <div className="login-contaner">
    {
      isLoading ? (<LoadingWidget/>):(
        <div >
        <div className="navs">
          <div className="nav-title">
            <h4>State Backend</h4>
          </div>
        </div>
        <div className="login-boxcon">
          <div className="login-box">
            <div className="logi-container">
              <div className="logo">
                <img
                  src="https://vlt.uk.gov.in/Content/assets/img/image.png"
                  alt=""
                />
              </div>
              <div className="loginLeftContainer">
                <p className="title">Sign in to Your Account</p>
                <p className="subTitle">Enter your username & password to Sign in</p>
                <div className="leftContainerData">
                  <p className="signin-text">Sign in to start your session</p>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label>User Name<sup>*</sup>:</label>
                      <input className="input" placeholder="Enter Username"
                        type="text"
                        value={Username}
                        onChange={handleUsernameChange}
                      />
                        {submitted && usernameErrors && (
                          <span className="error-message" style={{color:"red",fontSize:"12px"}}>{usernameErrors}</span>
                        )}

                    </div>
                    <div>
                      <label>Password<sup>*</sup>:</label>
                      <input className="input" placeholder="Enter Password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                        {submitted && passwordErrors && (
                          <span className="error-message" style={{color:"red",fontSize:"12px"}}>{passwordErrors}</span>
                        )}
                    </div>
                    <div className="btn">
                      <button className="login-btn" type="submit" >Sign In</button>
                    </div>
                    <div className="forget-password">
                      <a href="">I Forget My Password</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      )
    }
    </div>
  )
};
