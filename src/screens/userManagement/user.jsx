import { Outlet, Link } from "react-router-dom";
import { matchPath, useLocation } from "react-router-dom"

export const User = () => {

    const location = useLocation()
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
      }

    return (
        <>
            {/* <div id="sidebar" className="m-2"> */}
                <nav className="sub-nav">
                    <ul className ="sub-nav-item">
                        <li>
                            <Link className = {` ${matchRoute(`userManagement/listUser`)?"sub-nav-text-active":"sub-nav-text"}`} to={`listUser`}>All Users</Link>
                        </li>
                        <li>
                            <Link className = {` ${matchRoute(`userManagement/AddUser`)?"sub-nav-text-active":"sub-nav-text"}`} to={`AddUser`}>Add User</Link>
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

