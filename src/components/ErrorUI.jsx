// import React, { useState, useEffect } from 'react';
// const ErrorUI = ({ errorMessage }) => {
//   const [showError, setShowError] = useState(false);
//   useEffect(() => {
//     if (errorMessage) {
//       setShowError(true);
//       // Hide the error message after 3 seconds
//       const timer = setTimeout(() => {
//         setShowError(false);
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [errorMessage]);
//   return (
//     <div style={{
//       display: showError ? 'block' : 'none',
//       color: 'red',
//       marginTop: '5px',
//       fontFamily: 'sans-serif',
//       fontSize: '12px'
//     }}>
//       {errorMessage}
//     </div>
//   );
// };
// export default ErrorUI;

import React, { useState } from 'react';
import axios from 'axios';

function PincodeForm() {
  const [pincode, setPincode] = useState('');
  const [stateName, setStateName] = useState('');
  const [district, setDistrict] = useState('');

  const handlePincodeChange = (event) => {
    const newPincode = event.target.value;
    setPincode(newPincode);

    if (newPincode.length === 6) {
      // Assuming you have an API endpoint to fetch pincode data
      axios.get(`https://api.postalpincode.in/pincode/${newPincode}`)
        .then(response => {
          const { state, district } = response.PostOffice;
          setStateName(state);
          setDistrict(district);
        })
        .catch(error => {
          console.error('Error fetching pincode data:', error);
        });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Pincode:</label>
        <input type="text" value={pincode} onChange={handlePincodeChange} />
      </div>
      <div>
        <label>State:</label>
        <input type="text" value={stateName} readOnly />
      </div>
      <div>
        <label>District:</label>
        <input type="text" value={district} readOnly />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PincodeForm;
