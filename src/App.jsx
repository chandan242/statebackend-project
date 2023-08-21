import { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/navigation";
import { FaUserAstronaut } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { UserContext } from "./context/userContext";
import { PublicPage } from "./screens/publicScreens/publicPage";
import { useSelector,useDispatch  } from 'react-redux';
import { setNavigationOpen } from './reducer/slice/commonSlice';

function App() {
  let {navigationOpen} = useSelector( (state) => state.common );
  console.log(navigationOpen);
  const dispatch = useDispatch()
  const userDetails = useContext(UserContext);
  console.log("User Context Data", userDetails);

  return (
    <>
      {userDetails ? (
      <div className='wrapper'>
      <div className='navs'>
        <div className="nav-title">
          {
            localStorage.getItem("token") && <GiHamburgerMenu size={30} onClick={()=>dispatch(setNavigationOpen(!navigationOpen))}/>
          }
          <h4>State Backend</h4>
        </div>
        <div>
          <FaUserAstronaut size={30} style={{marginRight:"10px"}}/>
        </div>
      </div>
      
      <div className='containers'>
        <div className="sidebar">
          {/* {navigationOpen ? <div className="sidebar-item">
            <Sidebar/>
          </div>: null} */}
          {navigationOpen 
          ? (<div className="sidebar-item"><Sidebar navigationOpen={navigationOpen}/></div>) 
          : (<div className="sidebar-item-shrink"><Sidebar navigationOpen={navigationOpen}/></div>) }
            
          <div id="detail" className={(navigationOpen ? "container-item-shrink" : "container-item-expand")} >
            <Outlet navigationOpen={navigationOpen}/>
          </div>
        </div>
      </div> 
    </div>
      ) : (
        <PublicPage />
      )}
    </>
  );
}

export default App;
