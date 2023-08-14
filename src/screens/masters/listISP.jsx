import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { getEntitiesByType } from "../../apis/entities"
import {DynamicTable} from "../../components/table"
import downloadExcel from '../../helpers/excel'
import { generatePDF } from "../../helpers/pdf"

export const ISPList = () => {

    const [isp, setISP] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const result = await getEntitiesByType("ISP")
            console.log(result, "ISP")
            setISP(result)
        }
    
        fetchData()

    },[])

    const headers = ["Entity Name", "Entity Code", "Address", "Contact Name", "Contact No"];
    const data = isp.map(isps => [isps.entityName, isps.entityCode, isps.address, isps.contactName, isps.contactNo]);

    const handlePDFDownload = () => {
        generatePDF(headers, data,"isp");
    };

    return(
        <div>
            <div className="table-header-section">
            <p className="table-listp">Internet Service Providers</p>
                <div className="download-btn-container">
                    <button onClick={()=>downloadExcel(isp,'imp')}>Download as Ms Excel</button>
                    <button onClick={handlePDFDownload}>Download as PDF</button>
                </div>
            </div>
        <div className="table-list">
            <DynamicTable 
                data={isp}
                sequence={["entityName", "entityCode", "address", "contactName", "contactNo"]}
            />
        </div>
        </div>
    )
}

