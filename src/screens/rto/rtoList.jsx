import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { getEntitiesByType } from "../../apis/entities"
import {DynamicTable} from "../../components/table"
import downloadExcel from '../../helpers/excel'
import { generatePDF } from "../../helpers/pdf"


export const RTOList = () => {

    const [rtos, setRTOs] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const result = await getEntitiesByType("RTO")
            console.log(result, "RTO")
            setRTOs(result)
        }
    
        fetchData()

    },[])

    const headers = ["Entity Name", "Entity Code", "Address", "Contact Name", "Contact No"];
    const data = rtos.map(rto => [rto.entityName, rto.entityCode, rto.address, rto.contactName, rto.contactNo]);

    const handlePDFDownload = () => {
        generatePDF(headers, data,"RTO_list");
    };

    return(
        <div>
            <div className="table-header-section">
                <p className="table-listp">RTO LIST</p>
                <div className="download-btn-container">
                    <button onClick={()=>downloadExcel(rtos,'imp')}>Download as Ms Excel</button>
                    <button onClick={handlePDFDownload}>Download as PDF</button>
                </div>
            </div>
            <div className="table-list">
                <DynamicTable data={rtos} sequence={["entityName", "entityCode", "address", "contactName", "contactNo"]}/>
            </div>
        </div>
    )
}
