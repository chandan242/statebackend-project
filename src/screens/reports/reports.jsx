import BarChart from "../../components/barChart"
import DonutChart from "../../components/donutChart"
import PieChart from "../../components/pieChart"
import PincodeForm from "../../components/ErrorUI"
import { Link } from "react-router-dom"
export const Reports = () => {
 
    return (
            <div>
                <div className="reports-menu">
                    <h2>Alerts & Reports</h2><hr />
                    <ul>
                        <Link to={"/sub-dash-mini"}><li>Device Registration Dashboard</li></Link>
                        <Link to={"/sub-dash-emergency-alert"}><li>Emergency Alert Table</li></Link>
                        <Link to={"/sub-dash-health"}><li>Health Monitoring Data Table</li></Link>
                        <Link to={"/sub-dash-device-tempered"}><li>Device Tempered Alert Report</li></Link>
                        <Link to={"/sub-dash-device-sending"}><li>Device Sending Data Status Report</li></Link>
                        <Link to={"/sub-dash-esim-validity"}><li>ESIM Validity</li></Link>
                        <Link to={"/sub-dash-device-total-alert"}><li>Device Wise Total Alerts</li></Link>
                        <Link to={"/sub-dash-vehicle-map-search"}><li>Vehicle Wise Map Search</li></Link>
                    </ul>
                </div>
                <h1 className="h1">Reports</h1><hr/>
                <div className="reports">
                    <div className="report-bar-container">
                        <div>
                            <p>Donut Chart</p>
                            <DonutChart/>
                        </div>
                        <div>
                        <p>Pie Chart</p>
                        <PieChart/>
                        </div>
                    </div>
                    <div className="pie-chart">
                        <p>Bar Chart</p>
                        <BarChart/>
                    </div>
                </div>
            </div>  
        )
}