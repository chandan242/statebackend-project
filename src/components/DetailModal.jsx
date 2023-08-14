import React from 'react';

const DetailModal = ({ isOpen, onClose, data }) => {
  console.log(data);
  if (!isOpen) return null;

  const renderTableRows = () => {
    return Object.keys(data).map((key, index) => (
      <tr key={index}>
        <td>{key}</td>
        <td>{typeof data[key] === 'object' ? JSON.stringify(data[key]) : data[key]}</td>
      </tr>
    ));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <table>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>{renderTableRows()}</tbody>
        </table>
        <button onClick={onClose} className="close-modal-btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default DetailModal;

