import React, { useState } from 'react';
import './CSS/SubDash.css';

const DataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage,setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  const data = [
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},
    { VehicleNo: 'ABC123', OwnerMobileNo: '1234567890', IMEINo:"HGYET763h",OwnerName:"Chandan",VehicleCategory:"Motor CAB",AlertCount:"2"},

  ];

  // Filter the data based on the search term
  const filteredData = data.filter(item =>
    item.VehicleNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the indexes for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Function to change the number of items per page
    const changeItemsPerPage = (newItemsPerPage) => {
      setItemsPerPage(newItemsPerPage);
      setCurrentPage(1); // Reset to the first page when changing items per page
    };

     // Function to generate an array of page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const maxPageNumbers = 5; // Change this to adjust the number of page numbers displayed

    if (totalPages <= maxPageNumbers) {
      // If there are fewer pages than maxPageNumbers, display all page numbers
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Display a subset of page numbers with ellipsis
      const halfMaxPageNumbers = Math.floor(maxPageNumbers / 2);
      const leftOffset = currentPage - halfMaxPageNumbers;
      const rightOffset = currentPage + halfMaxPageNumbers;

      if (currentPage <= halfMaxPageNumbers) {
        // Display page numbers from 1 to maxPageNumbers with ellipsis at the end
        for (let i = 1; i <= maxPageNumbers - 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - halfMaxPageNumbers) {
        // Display page numbers with ellipsis at the beginning and from totalPages - maxPageNumbers + 3 to totalPages
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - maxPageNumbers + 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // Display page numbers with ellipsis on both sides
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = leftOffset; i <= rightOffset; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <div className='device-tempered-container'>
      <div className='device-tempered-header-section'>
        <h3>Device Tempered Alert Report(Today)</h3>
        <button className='excel-export-button'>Export as Excel</button>
      </div>
      <div className="table-header">
        <div className="items-per-page">
            Show:
            <select
              value={itemsPerPage}
              onChange={(e) => changeItemsPerPage(parseInt(e.target.value))}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
            entries
        </div>
        <input
          type="text"
          placeholder="Search by Vehicle No"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="data-table">
        <table >
          <thead>
            <tr>
              <th>S. No</th>
              <th>Vehicle No</th>
              <th>Owner Mobile No</th>
              <th>IMEI No</th>
              <th>Owner Name</th>
              <th>Vehicle Category</th>
              <th>Alert Count</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td>{indexOfFirstItem + index + 1}</td>
                <td>{item.VehicleNo}</td>
                <td>{item.OwnerMobileNo}</td>
                <td>{item.IMEINo}</td>
                <td>{item.OwnerName}</td>
                <td>{item.VehicleCategory}</td>
                <td>{item.AlertCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <div className="page-info">
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredData.length)} of {filteredData.length} entries
        </div>
        <ul className="page-numbers"> 
        <li>
          <button
            onClick={() => paginate(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {getPageNumbers().map((pageNumber, index) => (
          <li key={index}>
            {pageNumber === '...' ? (
              <span>{pageNumber}</span>
            ) : (
              <button
                onClick={() => paginate(pageNumber)}
                className={currentPage === pageNumber ? 'active-page' : ''}
              >
                {pageNumber}
              </button>
            )}
          </li>
        ))}
        <li>
          <button
            onClick={() =>
              paginate(Math.min(currentPage + 1, Math.ceil(filteredData.length / itemsPerPage)))
            }
            disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)}
          >
            Next
          </button>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default DataTable;
