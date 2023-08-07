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