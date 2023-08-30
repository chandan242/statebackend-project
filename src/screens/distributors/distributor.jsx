import { Outlet, Link } from "react-router-dom";
import { matchPath, useLocation } from "react-router-dom"

export const Distributor = () => {

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
                            <Link className = {` ${matchRoute(`distributors/listDistributor`)?"sub-nav-text-active":"sub-nav-text"}`} to={`listDistributor`}>All Distributors</Link>
                        </li>
{/* {   true?null:                     <li className="nav-item">
                            <Link className = {` ${matchRoute(`distributors/addDistributor`)?"sub-nav-text-active":"sub-nav-text"}`} to={`addDistributor`}>Add Distributor</Link>
                        </li>} */}
                        <li className="nav-item">
                            <Link className = {` ${matchRoute(`distributors/addDistributor`)?"sub-nav-text-active":"sub-nav-text"}`} to={`addDistributor`}>Add Distributor</Link>
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

