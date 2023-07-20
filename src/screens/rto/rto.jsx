import { Outlet, Link } from "react-router-dom";

export const RTO = () => {

    return (
        <>
            <div id="sidebar" className="m-2">
                <nav className="m-2">
                    <ul className ="nav nav-tabs">
                        <li className="nav-item">
                            <Link className = "nav-link font-weight-bold" to={`listRTO`}>All RTO</Link>
                        </li>
                        <li className="nav-item">
                            <Link className = "nav-link font-weight-bold" to={`addRTO`}>Add RTO</Link>
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

