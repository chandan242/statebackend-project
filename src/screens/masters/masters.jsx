import { Outlet, Link } from "react-router-dom";
import { matchPath, useLocation } from "react-router-dom"

export const Masters = () => {

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
                            <Link className = {` ${matchRoute(`masters/listESIMProviders`)?"sub-nav-text-active":"sub-nav-text"}`} to={`listESIMProviders`}>ESIM Providers</Link>
                        </li>
                        <li>
                            <Link className = {` ${matchRoute(`masters/addESIMProviders`)?"sub-nav-text-active":"sub-nav-text"}`} to={`addESIMProviders`}>Add ESIM Provider</Link>
                        </li>
                        <li>
                            <Link className = {` ${matchRoute(`masters/listApprovingAuthority`)?"sub-nav-text-active":"sub-nav-text"}`} to={`listApprovingAuthority`}>Device Authorities</Link>
                        </li>
                        <li>
                            <Link className = {` ${matchRoute(`masters/addApprovingAuthority`)?"sub-nav-text-active":"sub-nav-text"}`} to={`addApprovingAuthority`}>Add Device Authority</Link>
                        </li>
                        <li>
                            <Link className = {` ${matchRoute(`masters/listISP`)?"sub-nav-text-active":"sub-nav-text"}`} to={`listISP`}>ISPs</Link>
                        </li>
                        <li>
                            <Link className = {` ${matchRoute(`masters/addISP`)?"sub-nav-text-active":"sub-nav-text"}`} to={`addISP`}>Add ISP</Link>
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

