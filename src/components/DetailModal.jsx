import React from "react";

const DetailModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <button onClick={onClose} className="close-modal-btn">Close</button>
      </div>
    </div>
  );
};

export default DetailModal;
