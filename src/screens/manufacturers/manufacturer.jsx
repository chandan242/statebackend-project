import { Outlet, Link } from "react-router-dom";
import { matchPath, useLocation } from "react-router-dom"

export const Manufacturer = () => {

    const location = useLocation()
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
      }

    return (
        <>
            {/* <div id="sidebar" className="m-2"> */}
                <nav className="sub-nav">
                    <ul className ="sub-nav-item">
                        <li className="nav-item">
                            <Link className = {` ${matchRoute(`manufacturers/listManufacturer`)?"sub-nav-text-active":"sub-nav-text"}`} to={`listManufacturer`}>All Manufacturers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className = {` ${matchRoute(`manufacturers/addManufacturer`)?"sub-nav-text-active":"sub-nav-text"}`} to={`addManufacturer`}>Add Manufacturer</Link>
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

