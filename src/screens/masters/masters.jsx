import { Outlet, Link } from "react-router-dom";

export const Masters = () => {

    return (
        <>
            <div id="sidebar" className="m-2">
                <nav className="m-2">
                    <ul className ="nav nav-tabs">
                        <li className="nav-item">
                            <Link className = "nav-link font-weight-bold" to={`listESIMProviders`}>ESIM Providers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className = "nav-link font-weight-bold" to={`addESIMProviders`}>Add ESIM Provider</Link>
                        </li>
                        <li className="nav-item">
                            <Link className = "nav-link font-weight-bold" to={`listApprovingAuthority`}>Device Authorities</Link>
                        </li>
                        <li className="nav-item">
                            <Link className = "nav-link font-weight-bold" to={`addApprovingAuthority`}>Add Device Authority</Link>
                        </li>
                        <li className="nav-item">
                            <Link className = "nav-link font-weight-bold" to={`listISP`}>ISPs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className = "nav-link font-weight-bold" to={`addISP`}>Add ISP</Link>
                        </li>
                    </ul>
                </nav>      
            </div>

            <div className="m-2">
                <Outlet />
            </div>
        </>
    )

}

