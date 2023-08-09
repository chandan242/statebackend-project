import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { getEntitiesByType } from "../../apis/entities"
import {DynamicTable} from "../../components/table"
import downloadExcel from '../../helpers/excel'
import { generatePDF } from "../../helpers/pdf"

export const ApprovingAuthorityList = () => {

    const [approvingAuthority, setApprovingAuthority] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const result = await getEntitiesByType("AUT")
            console.log(result, "AUT")
            setApprovingAuthority(result)
        }
    
        fetchData()

    },[])

    const headers = ["Entity Name", "Entity Code", "Address", "Contact Name", "Contact No"];
    const data = approvingAuthority.map(approvingAuthorit => [approvingAuthorit.entityName, approvingAuthorit.entityCode, approvingAuthorit.address, approvingAuthorit.contactName, approvingAuthorit.contactNo]);

    const handlePDFDownload = () => {
        generatePDF(headers, data,"approvingAuthority");
    };

    return(
        <div>
            <div className="table-header-section">
            <p className="table-listp">Device Approving Authorities</p>
                <div className="download-btn-container">
                    <button onClick={()=>downloadExcel(approvingAuthority,'imp')}>Download as Ms Excel</button>
                    <button onClick={handlePDFDownload}>Download as PDF</button>
                </div>
            </div>
        <div className="table-list">
            <DynamicTable data={approvingAuthority} sequence={["entityName", "entityCode", "address", "contactName", "contactNo"]}/>
        </div>
        </div>
    )
}

