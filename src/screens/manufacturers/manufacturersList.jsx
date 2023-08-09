import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { getEntitiesByType } from "../../apis/entities"
import {DynamicTable} from "../../components/table"
import downloadExcel from '../../helpers/excel'
import { generatePDF } from "../../helpers/pdf"

export const ManufacturerList = () => {

    const [distributors, setDistributorss] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const result = await getEntitiesByType("MNF")
            console.log(result, "MNF")
            setDistributorss(result)
        }
    
        fetchData()

    },[])

    const headers = ["Entity Name", "Entity Code", "Address", "Contact Name", "Contact No"];
    const data = distributors.map(distributor => [distributor.entityName, distributor.entityCode, distributor.address, distributor.contactName, distributor.contactNo]);

    const handlePDFDownload = () => {
        generatePDF(headers, data,"Distributors List");
    };


    return(
        <div>
            <div className="table-header-section">
            <p className="table-listp">Distributors List</p>
                <div className="download-btn-container">
                    <button onClick={()=>downloadExcel(distributors,'imp')}>Download as Ms Excel</button>
                    <button onClick={handlePDFDownload}>Download as PDF</button>
                </div>
            </div>
        <div className="table-list">
            <DynamicTable data={distributors} sequence={["entityName", "entityCode", "address", "contactName", "contactNo"]}/>
        </div>
        </div>
    )
}

