import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { getEntitiesByType } from "../../apis/entities"
import {DynamicTable} from "../../components/table"
import downloadExcel from '../../helpers/excel'
import { generatePDF } from "../../helpers/pdf"

export const ESIMProviderList = () => {

    const [esimProviders, setESIMProviders] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const result = await getEntitiesByType("ESM")
            console.log(result, "ESM")
            setESIMProviders(result)
        }
    
        fetchData()

    },[])

    const headers = ["Entity Name", "Entity Code", "Address", "Contact Name", "Contact No"];
    const data = esimProviders.map(esimProvider => [esimProvider.entityName, esimProvider.entityCode, esimProvider.address, esimProvider.contactName, esimProvider.contactNo]);

    const handlePDFDownload = () => {
        generatePDF(headers, data,"esimProvider");
    };


    return(
        <div>
            <div className="table-header-section">
            <p className="table-listp">ESIM Provider List</p>
                <div className="download-btn-container">
                    <button onClick={()=>downloadExcel(esimProviders,'imp')}>Download as Ms Excel</button>
                    <button onClick={handlePDFDownload}>Download as PDF</button>
                </div>
            </div>
        <div className="table-list">
            <DynamicTable data={esimProviders} sequence={["entityName", "entityCode", "address", "contactName", "contactNo"]}/>
        </div>
        </div>
    )
}

