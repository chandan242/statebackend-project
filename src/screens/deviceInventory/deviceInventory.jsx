import { Outlet, Link} from "react-router-dom";

export function DeviceInventory() {

    return (
        <>
            <div id="sidebar" className="m-2">
                <nav className="m-2">
                    <ul className ="nav nav-tabs">
                        <li className="nav-item">
                            <Link className = "nav-link font-weight-bold" to={`deviceInventoryList`}>All Device Inventory</Link>
                        </li>
                        <li className="nav-item">
                            <Link className = "nav-link font-weight-bold" to={`addDeviceInventory`}>Create Device Inventory</Link>
                        </li>
                        <li className="nav-item">
                            <Link className = "nav-link font-weight-bold" to={`activateDevice`}>Activate Device</Link>
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





