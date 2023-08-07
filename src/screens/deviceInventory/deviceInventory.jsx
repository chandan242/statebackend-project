import { Outlet, Link} from "react-router-dom";
import { matchPath, useLocation } from "react-router-dom"

export function DeviceInventory() {
    const location = useLocation()
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
      }
    return (
        <>
            {/* <div id="sidebar" className="sub-nav"> */}
                <nav className="sub-nav">
                    <ul className ="sub-nav-item">
                        <li className="nav-item">
                            <Link className={` ${matchRoute(`deviceInventory/deviceInventoryList`)?"sub-nav-text-active":"sub-nav-text"}`} to={`deviceInventoryList`}>All Device Inventory</Link>
                        </li>
                        <li className="nav-item">
                            <Link className = {` ${matchRoute(`deviceInventory/addDeviceInventory`)?"sub-nav-text-active":"sub-nav-text"}`} to={`addDeviceInventory`}>Create Device Inventory</Link>
                        </li>
                        <li className="nav-item">
                            <Link className = {` ${matchRoute(`deviceInventory/activateDevice`)?"sub-nav-text-active":"sub-nav-text"}`} to={`activateDevice`}>Activate Device</Link>
                        </li>
                    </ul>
                </nav>      
            {/* </div> */}
            <div className="sub-nav-outlet">  
                <Outlet />
            </div>
        </>
    )
}





