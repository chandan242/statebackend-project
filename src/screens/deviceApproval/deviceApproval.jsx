import { Outlet, Link } from "react-router-dom";
import { matchPath, useLocation } from "react-router-dom"

export const DeviceApproval = () => {

    const location = useLocation()
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
      }

    return (
        <div>
            <nav className="sub-nav">
                <ul className ="sub-nav-item">
                    <li className="nav-item">
                        <Link className = {` ${matchRoute(`deviceApproval/listDeviceApproval`)?"sub-nav-text-active":"sub-nav-text"}`} to={`listDeviceApproval`}>All Device Types</Link>
                    </li>
                    <li className="nav-item">
                        <Link className = {` ${matchRoute(`deviceApproval/addDeviceApproval`)?"sub-nav-text-active":"sub-nav-text"}`} to={`addDeviceApproval`}>Add Device</Link>
                    </li>
                </ul>
            </nav>

            <div className="sub-nav-outlet">
                <Outlet />
            </div>
        </div>
    )

}

