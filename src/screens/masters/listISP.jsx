import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { getEntitiesByType } from "../../apis/entities"
import {DynamicTable} from "../../components/table"
import downloadExcel from '../../helpers/excel'
import { generatePDF } from "../../helpers/pdf"
import DetailModal from "../../components/DetailModal"

export const ISPList = () => {

    const [isp, setISP] = useState([])
    const [selectedRTO, setSelectedRTO] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchField, setSearchField] = useState("");

    // Modal open and close function 
    const handleModalOpen = (rto) => {
        setSelectedRTO(rto);
        setIsModalOpen(true);
        };
    
        const handleModalClose = () => {
        setSelectedRTO(null);
        setIsModalOpen(false);
        };

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

    // write a function to search table list data
    const handleSearchChange = (value) => {
        setSearchField(value);
    };
    const filteredisp = searchField
    ? isp.filter((isp_data) =>
        isp_data.entityName.includes(searchField) ||
        isp_data.entityCode.includes(searchField) ||
        isp_data.address.includes(searchField) ||
        isp_data.contactName.includes(searchField) ||
        isp_data.contactNo.includes(searchField)
        )
    : isp;

    return(
        <div>
            <div className="table-header-section">
            <p className="table-listp">Internet Service Providers</p>
                {/* <div className="download-btn-container">
                    <button onClick={()=>downloadExcel(isp,'imp')}>Download as Ms Excel</button>
                    <button onClick={handlePDFDownload}>Download as PDF</button>
                </div> */}
            </div>
            <div className="table-list">
                <DynamicTable 
                    data={filteredisp} 
                    sequence={["entityName", "entityCode", "address", "contactName", "contactNo"]}
                    datas={isp}
                    onDetailClick={handleModalOpen}
                    filter_required={true}
                    onSearchChange={handleSearchChange}
                    searchField={searchField}
                    isPdfDownloadBtnVisible={true}
                    isExcelDownloadBtnVisible={true}
                    onPDFDownload={handlePDFDownload}
                />
                <DetailModal isOpen={isModalOpen} onClose={handleModalClose} data={selectedRTO} />
            </div>
        </div>
    )
}

