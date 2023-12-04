import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import {DynamicTable} from "../../components/table"
import downloadExcel from '../../helpers/excel'
import { generatePDF } from "../../helpers/pdf"
import DetailModal from "../../components/DetailModal"
import { getAllManufacturer } from "../../apis/manufacture"

export const ManufacturerList = () => {

    const [distributors, setDistributorss] = useState([])
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
            const result = await getAllManufacturer()
            console.log(result, "MNF")
            setDistributorss(result)
        }
        fetchData()

    },[])

    // PDF Download Function
    const headers = ["Entity Name", "Entity Code", "Address", "Contact Name", "Contact No"];
    const data = distributors.map(distributor => [distributor.entityName, distributor.entitycode, distributor.address, distributor.contactName, distributor.contactNo]);

    const handlePDFDownload = () => {
        generatePDF(headers, data,"Distributor List");
    };

    // write a function to search table list data
    const handleSearchChange = (value) => {
        setSearchField(value);
    };
    const filteredDistributors = searchField
    ? distributors.filter((distribut) =>
        distribut.entityName.includes(searchField) ||
        distribut.entitycode.includes(searchField) ||
        distribut.address.includes(searchField) ||
        distribut.contactName.includes(searchField) ||
        distribut.contactNo.includes(searchField)
        )
    : distributors;


    return(
        <div>
            <div className="table-header-section">
            <p className="table-listp">Manufactures List</p>
                {/* <div className="download-btn-container">
                    <button onClick={()=>downloadExcel(distributors,'imp')}>Download as Ms Excel</button>
                    <button onClick={handlePDFDownload}>Download as PDF</button>
                </div> */}
            </div>
        <div className="table-list">
            <DynamicTable 
                data={filteredDistributors}
                datas={distributors} 
                onDetailClick={handleModalOpen}
                sequence={["entityName", "entitycode", "address", "contactName", "contactNo"]}
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

