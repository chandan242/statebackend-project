import { Outlet, Link } from "react-router-dom";

export const Distributor = () => {

    return (
        <>
            <div id="sidebar" className="m-2">
                <nav className="m-2">
                    <ul className ="nav nav-tabs">
                        <li className="nav-item">
                            <Link className = "nav-link font-weight-bold" to={`listDistributor`}>All Distributors</Link>
                        </li>
                        <li className="nav-item">
                            <Link className = "nav-link font-weight-bold" to={`addDistributor`}>Add Distributor</Link>
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

