import {useState, useEffect} from "react"
import { getEntitiesByType } from "../../apis/entities"
import {DynamicTable} from "../../components/table"
import { generatePDF } from "../../helpers/pdf"
import DetailModal from "../../components/DetailModal"
import { getEsimAllProvider, getEsimAllProviderIdCodeName } from "../../apis/masters"
import { Table } from "../../components/DynamicTable"

export const ESIMProviderList = () => {

    const [esimProviders, setESIMProviders] = useState([])
    const [selectedESIM, setSelectedESIM] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchField, setSearchField] = useState("");

    let user;
    // Modal open and close function 
    const handleModalOpen = (item) => {
        setSelectedESIM(item);
        setIsModalOpen(true);
        };
    
        const handleModalClose = () => {
        setSelectedESIM(null);
        setIsModalOpen(false);
        };

    useEffect(()=>{

        const fetchData = async () => {
            console.warn("test","result2")
            user = localStorage.getItem("userType")

            const result = await getEsimAllProvider()
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

    // write a function to search table list data
    const handleSearchChange = (value) => {
        setSearchField(value);
    };
    const filteredesimProviders = searchField
    ? esimProviders.filter((esimProvider) =>
        esimProvider.entityName.includes(searchField) ||
        esimProvider.entityCode.includes(searchField) ||
        esimProvider.address.includes(searchField) ||
        esimProvider.contactName.includes(searchField) ||
        esimProvider.contactNo.includes(searchField)
        )
    : esimProviders;


    return(
        <div>
            <div className="table-header-section">
            {user==="RTO"?<p className="table-listp">ESIM Provider Details</p>:<p className="table-listp">ESIM Provider List</p>}
                {/* <div className="download-btn-container">
                    <button onClick={()=>downloadExcel(esimProviders,'imp')}>Download as Ms Excel</button>
                    <button onClick={handlePDFDownload}>Download as PDF</button>
                </div> */}
            </div>
        <div className="table-list">
            <Table 
                data={filteredesimProviders} 
                sequence={["providerName", "providerCode", "address", "pocName", "pocPhone"]}
                datas={esimProviders}
                onDetailClick={handleModalOpen}
                filter_required={true}
                onSearchChange={handleSearchChange}
                searchField={searchField}
                isPdfDownloadBtnVisible={true}
                isExcelDownloadBtnVisible={true}
                onPDFDownload={handlePDFDownload}
            />
            <DetailModal isOpen={isModalOpen} onClose={handleModalClose} data={selectedESIM} />
        </div>
        </div>
    )
}

