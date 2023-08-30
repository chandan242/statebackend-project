import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { getEntitiesByType } from "../../apis/entities"
import {DynamicTable} from "../../components/table"
import { generatePDF } from "../../helpers/pdf"
import DetailModal from "../../components/DetailModal"


export const ApprovingAuthorityList = () => {

    const [approvingAuthority, setApprovingAuthority] = useState([])
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

    // write a function to search table list data
    const handleSearchChange = (value) => {
        setSearchField(value);
    };
    const filteredapprovingAuthority = searchField
    ? approvingAuthority.filter((approve_data) =>
        approve_data.entityName.includes(searchField) ||
        approve_data.entityCode.includes(searchField) ||
        approve_data.address.includes(searchField) ||
        approve_data.contactName.includes(searchField) ||
        approve_data.contactNo.includes(searchField)
        )
    : approvingAuthority;

    return(
        <div>
            <div className="table-header-section">
            <p className="table-listp">Device Approving Authorities</p>
                {/* <div className="download-btn-container">
                    <button onClick={()=>downloadExcel(approvingAuthority,'imp')}>Download as Ms Excel</button>
                    <button onClick={handlePDFDownload}>Download as PDF</button>
                </div> */}
            </div>
            <div className="table-list">
                <DynamicTable 
                    data={filteredapprovingAuthority} 
                    sequence={["entityName", "entityCode", "address", "contactName", "contactNo"]}
                    datas={approvingAuthority}
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

