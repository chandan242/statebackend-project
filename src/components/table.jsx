// import { useState, useEffect } from "react";
// import { BiDetail } from "react-icons/bi";
// import "./common.css";

// export const DynamicTable = (params) => {
//   const data_table = params.data;
//   const column = params.sequence;
//   const filter_required = params.filter_required || false;

//   const [searchField, setSearchField] = useState("");
//   const [pageCount, setPageCount] = useState(0);
//   const [filteredArray, setFilteredArray] = useState(null);
//   const [pageMoverRequired, setPageMoverRequired] = useState(false);

//   useEffect(() => {
//     setFilteredArray([]);
//     if (data_table.length > 10) {
//       setFilteredArray(
//         data_table.slice(0 + pageCount * 20, 20 + pageCount * 20)
//       );
//       setPageMoverRequired(true);
//     } else {
//       setFilteredArray(data_table);
//       setPageMoverRequired(false);
//     }
//   }, [data_table, pageCount]);

//     useEffect(() => {
//         const startIndex = pageCount * 20;
//         const endIndex = startIndex + 20;

//         if (filter_required && searchField.length >= 10) {
//             const filteredData = data_table.filter(item =>
//                 item["iccid"].includes(searchField)
//             ).slice(startIndex, endIndex);
//             setFilteredArray(filteredData);
//         } else {
//             setFilteredArray(data_table.slice(startIndex, endIndex));
//         }
//     }, [data_table, pageCount, searchField]);

//   const ThData = () => {
//     return column.map((data) => {
//       return <th key={data}>{data}</th>;
//     });
//   };
//   // get table row data
//   const tdData = () => {
//     if (filteredArray && filteredArray.length > 0) {
//       return filteredArray.map((data) => {
//         return (
//           <tr>
//             {column.map((v, index) => {
//               return index === 0 ? (
//                 <td className="">
//                   <span>{data[v]}</span>
//                   <BiDetail
//                     size="1rem"
//                     className=""
//                     onClick={() => params.onDetailClick(data)}
//                   />
//                 </td>
//               ) : (
//                 <td>{data[v] && data[v].toString()}</td>
//               );
//             })}
//           </tr>
//         );
//       });
//     }
//   };

// //   const searchESIM = (e) => {
// //     if (searchField.length >= 5) {
// //       const filteredArraySearched = data_table.filter((item) =>
// //         item["iccid"].includes(searchField)
// //       );
// //       setFilteredArray(filteredArraySearched);
// //     }
// //   };

//   const decrement = (e) => {
//     if (pageCount > 0) {
//       setPageCount(pageCount - 1);
//     }
//   };

//   const increment = (e) => {
//     if (
//       pageCount < Math.floor(data_table.length / 20) &&
//       Math.floor(data_table.length / 20) > 1
//     ) {
//       setPageCount(pageCount + 1);
//     }
//   };

//   return (
//     <div className="">
//       <div className="">
//         {filter_required ? (
//           <div className="">
//             <input
//               placeholder="search..."
//               className="search-feild"
//               type="text"
//               value={searchField}
//               onChange={(e) => {
//                 setSearchField(e.target.value);
//                 params.onSearchChange && params.onSearchChange(e.target.value);
//               }}
//             />
//             {/* <button className="" onClick={(e) => searchESIM(e)}>
//               <b>search</b>
//             </button> */}
//           </div>
//         ) : null}

//         {pageMoverRequired ? (
//           <div className="">
//             <button className="" onClick={decrement}>
//               previous page
//             </button>
//             <button className="" onClick={increment}>
//               next page
//             </button>
//           </div>
//         ) : null}
//       </div>
//       <div className="scroll_table">
//         <table className="table-striped">
//           <thead>
//             <tr>{ThData()}</tr>
//           </thead>
//           <tbody>{tdData()}</tbody>
//         </table>
//       </div>
//     </div>
//   );
// };



// import { useState, useEffect } from "react";
// import { BiDetail } from "react-icons/bi";
// import {AiOutlineFilePdf} from 'react-icons/ai'
// import {SiMicrosoftexcel} from 'react-icons/si'
// import downloadExcel from '../helpers/excel'
// import "./common.css";

// export const DynamicTable = (params) => {
//   const data_table = params.data;
//   const column = params.sequence;
//   const filter_required = params.filter_required || false;
//   const isPdfDownloadBtnVisible = params.isPdfDownloadBtnVisible
//   const isExcelDownloadBtnVisible = params.isExcelDownloadBtnVisible
//   const onPDFDownload = params.onPDFDownload
//   const list = params.datas

//   const [searchField, setSearchField] = useState("");
//   const [pageCount, setPageCount] = useState(0);
//   const [filteredArray, setFilteredArray] = useState(null);
//   const [pageMoverRequired, setPageMoverRequired] = useState(false);

//   // useEffect(() => {
//   //   setFilteredArray([]);
//   //   if (data_table.length > 10) {
//   //     setFilteredArray(
//   //       data_table.slice(0 + pageCount * 20, 20 + pageCount * 20)
//   //     );
//   //     setPageMoverRequired(true);
//   //   } else {
//   //     setFilteredArray(data_table);
//   //     setPageMoverRequired(false);
//   //   }
//   // }, [data_table, pageCount]);

//     useEffect(() => {
//         const startIndex = pageCount * 20;
//         const endIndex = startIndex + 20;

//         if (filter_required && searchField.length >= 10) {
//             const filteredData = data_table.filter(item =>
//                 item["iccid"].includes(searchField)
//             ).slice(startIndex, endIndex);
//             setFilteredArray(filteredData);
//         } else {
//             setFilteredArray(data_table.slice(startIndex, endIndex));
//         }
//     }, [data_table, pageCount, searchField]);

//   const ThData = () => {
//     return column.map((data) => {
//       return <th key={data}>{data}</th>;
//     });
//   };
//   // get table row data
//   const tdData = () => {
//     if (filteredArray && filteredArray.length > 0) {
//       return filteredArray.map((data) => {
//         return (
//           <tr>
//             {column.map((v, index) => {
//               return index === 0 ? (
//                 <td className="">
//                   <span>{data[v]}</span>
//                   <BiDetail
//                     size="1rem"
//                     className=""
//                     onClick={() => params.onDetailClick(data)}
//                   />
//                 </td>
//               ) : (
//                 <td>{data[v] && data[v].toString()}</td>
//               );
//             })}
//           </tr>
//         );
//       });
//     }
//   };

// //   const searchESIM = (e) => {
// //     if (searchField.length >= 5) {
// //       const filteredArraySearched = data_table.filter((item) =>
// //         item["iccid"].includes(searchField)
// //       );
// //       setFilteredArray(filteredArraySearched);
// //     }
// //   };

//   const decrement = (e) => {
//     if (pageCount > 0) {
//       setPageCount(pageCount - 1);
//     }
//   };

//   const increment = (e) => {
//     if (
//       pageCount < Math.floor(data_table.length / 20) &&
//       Math.floor(data_table.length / 20) > 1
//     ) {
//       setPageCount(pageCount + 1);
//     }
//   };

//   return (
//     <div className="">
//       <div className="table-control">
        
//         {filter_required ? (
//           <div className="search-bar">
//             <input
//               placeholder="search..."
//               className=""
//               type="text"
//               value={searchField}
//               onChange={(e) => {
//                 setSearchField(e.target.value);
//                 params.onSearchChange && params.onSearchChange(e.target.value);
//               }}
//             />
//             {/* <button className="" onClick={(e) => searchESIM(e)}>
//               <b>search</b>
//             </button> */}
//           </div>
//         ) : null}
//         <div className="paginator">

//           {
//             pageMoverRequired ? (
//               <div className="">
//                 <button className="" onClick={decrement}>
//                   previous page
//                 </button>
//                 <button className="" onClick={increment}>
//                   next page
//                 </button>
//               </div>
//             ) : null
//           }
          
//           {
//             isPdfDownloadBtnVisible?(
//               <div className="download-btn-container">
//                 <button onClick={()=>downloadExcel(list,'imp')}>Download as <SiMicrosoftexcel/></button>
//               </div>
//             ):null
//           }
//           {
//             isExcelDownloadBtnVisible?(
//               <div className="download-btn-container">
//                 <button onClick={onPDFDownload}>Download as <AiOutlineFilePdf/></button>
//               </div>
//             ):null
//           }
//         </div>

//       </div>
      
//       <div className="scroll_table">
//         <table className="table-striped">
//           <thead>
//             <tr>{ThData()}</tr>
//           </thead>
//           <tbody>{tdData()}</tbody>
//         </table>
//       </div>
//     </div>
//   );
// };


import { useState, useEffect } from "react";
import { BiDetail } from "react-icons/bi";
import {AiOutlineFilePdf} from 'react-icons/ai'
import {SiMicrosoftexcel} from 'react-icons/si'
import downloadExcel from '../helpers/excel'
import "./common.css";

export const DynamicTable = (params) => {
  const data_table = params.data;
  const column = params.sequence;
  const filter_required = params.filter_required || false;
  const isPdfDownloadBtnVisible = params.isPdfDownloadBtnVisible
  const isExcelDownloadBtnVisible = params.isExcelDownloadBtnVisible
  const onPDFDownload = params.onPDFDownload
  const list = params.datas

  const [searchField, setSearchField] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [filteredArray, setFilteredArray] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(10);

    useEffect(() => {
        const startIndex = pageCount * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        if (filter_required && searchField.length >= 20) {
            const filteredData = data_table.filter(item =>
                item["iccid"].includes(searchField)
            ).slice(startIndex, endIndex);
            setFilteredArray(filteredData);
        } else {
            setFilteredArray(data_table.slice(startIndex, endIndex));
        }
    }, [data_table, pageCount, searchField,itemsPerPage]);

  const ThData = () => {
    return column.map((data) => {
      return <th key={data}>{data}</th>;
    });
  };
  // get table row data
  const tdData = () => {
    if (filteredArray && filteredArray.length > 0) {
      return filteredArray.map((data) => {
        return (
          <tr>
            {column.map((v, index) => {
              return index === 0 ? (
                <td className="">
                  <span>{data[v]}</span>
                  <BiDetail
                    size="1rem"
                    className=""
                    onClick={() => params.onDetailClick(data)}
                  />
                </td>
              ) : (
                <td>{data[v] && data[v].toString()}</td>
              );
            })}
          </tr>
        );
      });
    }
  };
  const handlePageChange = (newPage) => {
    setPageCount(newPage);
  };

  const handleItemsPerPageChange = (e) => {
    const newItemsPerPage = parseInt(e.target.value);
    setItemsPerPage(newItemsPerPage);
    setPageCount(0); // Reset page count when items per page changes
  };

  const calculateTotalPages = () => {
    if (filteredArray) {
      console.log(list);
      return Math.ceil(list.length / itemsPerPage);
    }
    return 0;
  };

  const Paginator = () => {
    const totalPages = calculateTotalPages();

    return (
      <div className="paginators">
        <span>
          Page {pageCount + 1} of {totalPages}
        </span>
        {pageCount > 0 && (
          <button onClick={() => handlePageChange(pageCount - 1)}>Previous</button>
        )}
        {filteredArray && filteredArray.length >= itemsPerPage && (
          <button onClick={() => handlePageChange(pageCount + 1)}>Next</button>
        )}
        {/* Add the select field for items per page */}
        <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
    );
  };

  return (
    <div className="">
      <div className="table-control">
        
        {filter_required ? (
          <div className="search-bar">
            <input
              placeholder="search..."
              className=""
              type="text"
              value={searchField}
              onChange={(e) => {
                setSearchField(e.target.value);
                params.onSearchChange && params.onSearchChange(e.target.value);
              }}
            />
            {/* <button className="" onClick={(e) => searchESIM(e)}>
              <b>search</b>
            </button> */}
          </div>
        ) : null}
        <div className="paginator">
          <Paginator/>
          {
            isPdfDownloadBtnVisible?(
              <div className="download-btn-container">
                <button onClick={()=>downloadExcel(list,'imp')}>Download as <SiMicrosoftexcel/></button>
              </div>
            ):null
          }
          {
            isExcelDownloadBtnVisible?(
              <div className="download-btn-container">
                <button onClick={onPDFDownload}>Download as <AiOutlineFilePdf/></button>
              </div>
            ):null
          }
        </div>

      </div>
      
      <div className="scroll_table">
        <table className="table-striped">
          <thead>
            <tr>{ThData()}</tr>
          </thead>
          <tbody>{tdData()}</tbody>
        </table>
      </div>
    </div>
  );
};