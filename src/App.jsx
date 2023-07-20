import { useState } from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from './components/navigation';
import {FaUserAstronaut} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";

function App() {
  let token = localStorage.getItem("token")
  const [navigationOpen, setNavigationOpen] = useState(false)

  return (
    <>
      <div className='wrapper'>
        <div className='navs'>
          <div className="nav-title">
            {
              token!==null && <GiHamburgerMenu size={30} onClick={()=>setNavigationOpen(!navigationOpen)}/>
            }
            <h4>State Backend</h4>
          </div>
          <div>
            <FaUserAstronaut size={30} className='mr-2'/>
          </div>
        </div>
        
        <div className='containers'>
          <div className="row sidebar">
          {navigationOpen ? <div className="sidebar-item col-lg-2">
            <Sidebar />
          </div>: null}
            
          <div id="detail" className={"m-0 " + (navigationOpen ? "col-lg-10" : "col-lg-12") }>
            <Outlet />
          </div>
        </div>
        </div> 
      </div>

    </>
  )
}

export default App
