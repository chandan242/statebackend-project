import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { getEntitiesByType } from "../../apis/entities"
import {DynamicTable} from "../../components/table"
import downloadExcel from '../../helpers/excel'
import { generatePDF } from "../../helpers/pdf"
import {AiOutlineFilePdf} from 'react-icons/ai'
import {SiMicrosoftexcel} from 'react-icons/si'
import DetailModal from "../../components/DetailModal"


export const RTOList = () => {

    const [rtos, setRTOs] = useState([])
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
            const result = await getEntitiesByType("RTO")
            console.log(result, "RTO")
            setRTOs(result)
        }
    
        fetchData()

    },[])

    // pdf download function
    const headers = ["Entity Name", "Entity Code", "Address", "Contact Name", "Contact No"];
    const data = rtos.map(rto => [rto.entityName, rto.entityCode, rto.address, rto.contactName, rto.contactNo]);

    const handlePDFDownload = () => {
        generatePDF(headers, data,"RTO_list");
    };

    // write a function to search table list data
    const handleSearchChange = (value) => {
        setSearchField(value);
    };
    const filteredRTOs = searchField
    ? rtos.filter((rto) =>
          rto.entityName.includes(searchField) ||
          rto.entityCode.includes(searchField) ||
          rto.address.includes(searchField) ||
          rto.contactName.includes(searchField) ||
          rto.contactNo.includes(searchField)
      )
    : rtos;

    return(
        <div>
            <div className="table-header-section">
                <p className="table-listp">RTO LIST</p>
                <div className="download-btn-container">
                    <button onClick={()=>downloadExcel(rtos,'imp')} style={{display:"flex",gap:"10px",alignItems:"center"}}>Download as <SiMicrosoftexcel/></button>
                    <button onClick={handlePDFDownload} style={{display:"flex",gap:"10px",alignItems:"center"}}>Download as <AiOutlineFilePdf/></button>
                </div>
            </div>
            <div className="table-list">
                <DynamicTable
                    data={filteredRTOs}
                    onDetailClick={handleModalOpen}
                    sequence={["entityName", "entityCode", "address", "contactName", "contactNo"]}
                    filter_required={true}
                    onSearchChange={handleSearchChange}
                    searchField={searchField}
                />
                <DetailModal isOpen={isModalOpen} onClose={handleModalClose} data={selectedRTO} />

            </div>
        </div>
    )
}
