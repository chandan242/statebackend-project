// import { useState, useEffect } from "react"
// import {GrRadialSelected} from "react-icons/gr";

// export const MultipleSelection = ({data, updateList}) => {

//     console.log(data);
//     const [uiList, setUIList] = useState([])

//     useEffect(() =>{
//         if(data){
//             const newData = data.map(item=>{
//                 item["isActive"] = false
//                 return item})
//                 console.log(newData);
//             setUIList(newData)
//         }
        
//     },[])

//     const onSelection = (selectedItem) => {
//         const changedArray = uiList.map(item => {
//             if(item["code"] == selectedItem["code"]){
//                 item["isActive"] = !item["isActive"]        
//             }
//             return item})
//         setUIList(changedArray)
//         updateList(changedArray.filter(item=>item["isActive"]===true))
//     }
//     console.log("UI LIST",uiList);

//     return <div>
//     {uiList.map(item=><div key = {item.id} className={"" + (item["isActive"] ? "bg-warning" : "bg-light")} onClick={()=>onSelection(item)}>
//                         <p className="map-roles-text">
//                             {item.name}
//                         </p>
//                         {item["isActive"] ? <GrRadialSelected className=""/> : null }
//                         </div>
//         )}
// </div>
// }


// MultipleSelection.js

// import React, { useState, useEffect } from 'react';

// export const MultipleSelection = ({ rolesWithValue1, rolesWithValue0, selectedRoles, setSelectedRoles }) => {
//   const [selectedRolesWithValue1, setSelectedRolesWithValue1] = useState([]);

//   useEffect(() => {
//     // Set default selected rolesWithValue1
//     const defaultSelectedRolesWithValue1 = rolesWithValue1.map((role) => role.name);
//     setSelectedRolesWithValue1(defaultSelectedRolesWithValue1);
//     setSelectedRoles(defaultSelectedRolesWithValue1); // Set default selected permissions
//   }, [rolesWithValue1, setSelectedRoles]);

//   const handleRoleSelection = (e) => {
//     const roleName = e.target.name;
//     const isChecked = e.target.checked;

//     if (isChecked) {
//       setSelectedRoles((prevPermissions) => [...prevPermissions, roleName]);
//     } else {
//       setSelectedRoles((prevPermissions) =>
//         prevPermissions.filter((permission) => permission !== roleName)
//       );
//     }
    
//   };

//   return (
//     <div>
//       {rolesWithValue1.map((role) => (
//         <div key={role.id}>
//           <label>
//             <input
//               type="checkbox"
//               name={role.name}
//               checked={selectedRolesWithValue1.includes(role.name)}
//               disabled
//             />
//             {role.name}
//           </label>
//         </div>
//       ))}
//       {rolesWithValue0.map((role) => (
//         <div key={role.id}>
//           <label>
//             <input
//               type="checkbox"
//               name={role.name}
//               checked={selectedRoles.includes(role.name)}
//               onChange={handleRoleSelection}
//             />
//             {role.name}
//           </label>
//         </div>
//       ))}
//     </div>
//   );
// };

import React, { useState, useEffect } from 'react';
import './common.css'

export const MultipleSelection = ({ rolesWithValue1, rolesWithValue0, selectedRoles, setSelectedRoles }) => {
  const [selectedRolesWithValue1, setSelectedRolesWithValue1] = useState([]);

  useEffect(() => {
    const defaultSelectedRolesWithValue1 = rolesWithValue1.map((role) => role.name);
    setSelectedRolesWithValue1(defaultSelectedRolesWithValue1);
    if (selectedRoles.length === 0) {
      setSelectedRoles(rolesWithValue1);
    }
  }, [rolesWithValue1, setSelectedRoles]);

  const handleRoleSelection = (e) => {
    const roleName = e.target.name;
    const isChecked = e.target.checked;

    let updatedRoles = [];
    if (isChecked) {
      updatedRoles = [...selectedRoles, rolesWithValue0.find((role) => role.name === roleName)];
    } else {
      updatedRoles = selectedRoles.filter((role) => role.name !== roleName);
    }

    setSelectedRoles(updatedRoles);
  };
  console.log(selectedRoles);

  return (
    <div>
      {rolesWithValue1.map((role) => (
        <div key={role.id} className='roles-slection-container'>
          <label className='roles-slection-label'>
            <input
              type="checkbox"
              name={role.name}
              checked={selectedRoles.some((r) => r.name === role.name)}
              disabled
              className='roles-slection-checkbo'
            />
            {role.name}
          </label>
        </div>
      ))}
      {rolesWithValue0.map((role) => (
        <div key={role.id} className='roles-slection-container'>
          <label className='roles-slection-label'>
            <input
              type="checkbox"
              name={role.name}
              checked={selectedRoles.some((r) => r.name === role.name)}
              onChange={handleRoleSelection}
              className='roles-slection-checkbo'
            />
            {role.name}
          </label>
        </div>
      ))}
    </div>
  );
};
