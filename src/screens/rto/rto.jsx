import { Outlet, Link } from "react-router-dom";
import { matchPath, useLocation } from "react-router-dom"

export const RTO = () => {
    const location = useLocation()
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
      }
    return (
        <>
            {/* <div className="sub-nav-container"> */}
                <nav className="sub-nav">
                    <ul className ="sub-nav-item">
                        <li>
                            <Link className = {` ${matchRoute(`rtos/listRTO`)?"sub-nav-text-active":"sub-nav-text"}`} to={`listRTO`}>All RTO</Link>
                        </li>
                        <li>
                            <Link className = {` ${matchRoute(`rtos/addRTO`)?"sub-nav-text-active":"sub-nav-text"}`} to={`addRTO`}>Add RTO</Link>
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

