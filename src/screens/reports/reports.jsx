import BarChart from "../../components/barChart"
import DonutChart from "../../components/donutChart"
import PieChart from "../../components/pieChart"
import PincodeForm from "../../components/ErrorUI"
export const Reports = () => {
 
    return (
            <>
            <h1 className="h1">Reports</h1><hr/>
            <PincodeForm/>
            <div className="reports">
                <div className="report-bar-container">
                    <div>
                        <DonutChart/>
                        <p>Donut Chart</p>
                    </div>
                    <div>
                    <PieChart/>
                    <p>Pie Chart</p>
                    </div>
                </div>
                <div className="pie-chart">
                    <BarChart/>
                    <p>Bar Chart</p>
                </div>
            </div>
            </>  
        )
}