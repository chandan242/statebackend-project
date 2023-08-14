import React, { useState } from "react";

const TableControls = ({ onSearchChange, onPreviousPage, onNextPage }) => {
  const [searchField, setSearchField] = useState("");

  return (
    <div className="table-controls">
      <div className="search">
        <input
          placeholder="search..."
          className="search-field"
          type="text"
          value={searchField}
          onChange={(e) => {
            setSearchField(e.target.value);
            onSearchChange && onSearchChange(e.target.value);
          }}
        />
      </div>
      <div className="pagination">
        <button className="pagination-button" onClick={onPreviousPage}>
          Previous Page
        </button>
        <button className="pagination-button" onClick={onNextPage}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default TableControls;
