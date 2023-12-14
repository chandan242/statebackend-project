// import {useState, useEffect} from "react"
// import {DynamicTable} from "../../components/table"
// import { generatePDF } from "../../helpers/pdf"
// import DetailModal from "../../components/DetailModal"
// import { getRTOList } from "../../apis/rto"

// export const DeviceInventoryList = () => {

//     const [inventory, setInventory] = useState([])
//     const [selectedInventory, setSelectedInventory] = useState(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [searchField, setSearchField] = useState("");

//     // Modal open and close function 
//     const handleModalOpen = (list) => {
//         setSelectedRTO(list);
//         setIsModalOpen(true);
//       };
    
//       const handleModalClose = () => {
//         setSelectedRTO(null);
//         setIsModalOpen(false);
//       };

//     useEffect(()=>{
//         const fetchData = async () => {
//             const result = await getRTOList()
//             console.log(result, "Device Inventory")
//             setInventory(result)    
//         }
        
//         fetchData()

//     },[])

//     // pdf download function
//     const headers = ["deviceSerialNo","imeiNo","iccidNumber"];
//     const data = rtos.map(item => [item.deviceSerialNo, item.entitycode, item.address]);

//     const handlePDFDownload = () => {
//         generatePDF(headers, data,"Device_Inventory_list");
//     };

//     // write a function to search table list data
//     const handleSearchChange = (value) => {
//         setSearchField(value);
//     };
//     const filteredInventories = searchField
//     ? inventory.filter((item) =>
//           item.deviceSerialNo.includes(searchField) ||
//           item.vltdModelName.includes(searchField) ||
//           item.iccidNumber.includes(searchField) 
//       )
//     : rtos;

//     return(
//         <div>
//             <div className="table-header-section">
//                 <p className="table-listp">Device Inventory LIST</p>
//                 {/* <div className="download-btn-container">
//                     <button onClick={()=>downloadExcel(rtos,'imp')} style={{display:"flex",gap:"10px",alignItems:"center"}}>Download as <SiMicrosoftexcel/></button>
//                     <button onClick={handlePDFDownload} style={{display:"flex",gap:"10px",alignItems:"center"}}>Download as <AiOutlineFilePdf/></button>
//                 </div> */}
//             </div>
//             <div className="table-list">
//                 <DynamicTable
//                     data={filteredRTOs}
//                     sequence={["deviceSerialNo", "imeiNo", "iccidNumber"]}
//                     datas={rtos}
//                     onDetailClick={handleModalOpen}
//                     filter_required={true}
//                     onSearchChange={handleSearchChange}
//                     searchField={searchField}
//                     isPdfDownloadBtnVisible={true}
//                     isExcelDownloadBtnVisible={true}
//                     onPDFDownload={handlePDFDownload}
//                     userType="RTO"  
//                     navigateto={"/rtos/listRTO"}
//                 />
//                 <DetailModal isOpen={isModalOpen} onClose={handleModalClose} data={selectedRTO} />

//             </div>
//         </div>
//     )
// }

// export default DeviceInventoryList