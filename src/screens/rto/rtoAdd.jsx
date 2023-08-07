// import { useState, useEffect } from "react";
// import { addentity } from "../../apis/entities";
// import { AddUser } from "../userManagement/userAdd";  
// import { LoadingWidget } from "../../components/loading";

// export const AddRTO = () => {

//     const [data, setData] = useState({})
//     const [isLoading, setIsLoading] = useState(false)
//     const [userAddition, setUserAddition] = useState(false)
//     const [errors, setErrors] = useState({});

//     const onChange = (e) => {
//       const fieldName = e.target.name;
//       const value = e.target.value;

//       // Clear the error for the current field when the user starts typing
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         [fieldName]: "",
//       }));

//       const data_new = { ...data };
//       data_new[fieldName] = value;
//       setData(data_new);
//     }

//     const validateForm = () => {
//         let hasErrors = false;
//         const newErrors = {};
    
//         // Define validation rules
//         const validationRules = {
//             entityCode: {
//               required: true,
//               minLength: 3,
//               maxLength: 10,
//               pattern: /^[A-Za-z0-9]+$/,
//             },
//             entityName: {
//               required: true,
//               minLength: 5,
//               maxLength: 50,
//             },
//             kycgstpan: {
//               required: true,
//             },
//             address: {
//               required: true,
//             },
//             district: {
//               required: true,
//             },
//             state: {
//               required: true,
//             },
//             pincode: {
//               required: true,
//             },
//             contactName: {
//               required: true,
//             },
//             emailId: {
//               required: true,
//             },
//             contactNo: {
//               required: true,
//             },
//             // Add more fields here with the required flag set to true
//           };
        
    
//         for (const fieldName in validationRules) {
//           const value = data[fieldName];
//           const rules = validationRules[fieldName];
    
//           if (rules.required && (!value || value.trim() === "")) {
//             newErrors[fieldName] = "Field is required";
//             hasErrors = true;
//           } else if (rules.minLength && value.length < rules.minLength) {
//             newErrors[fieldName] = `Minimum ${rules.minLength} characters required`;
//             hasErrors = true;
//           } else if (rules.maxLength && value.length > rules.maxLength) {
//             newErrors[fieldName] = `Maximum ${rules.maxLength} characters allowed`;
//             hasErrors = true;
//           } else if (rules.pattern && !rules.pattern.test(value)) {
//             newErrors[fieldName] = "Invalid input";
//             hasErrors = true;
//           }
//         }
    
//         setErrors(newErrors);
//         return !hasErrors;
//     };


//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (validateForm()) {
//             setIsLoading(true);
//             const uploadData = { ...data };
//             uploadData["entityType"] = "RTO";
//             const response = await addentity(uploadData);
//             setUserAddition(true);
//             setIsLoading(false);
//         }
//         else{
//           setTimeout(() => {
//             setErrors({});
//           }, 5000);
//         }
//     }

//     const formFieldUI = (label, name, type,star) => {
//         return (<div key = {name} className="form-groups">
//                     <label className="form-labels">{label}<sup>{star}</sup></label>
//                     <input required className="form-inputs" name={name} type={type} onChange={e=>onChange(e)}></input>
//                     {errors[name] && <div className="error-message" style={{color:"red",fontSize:"13px"}}>{errors[name]}</div>}
//                 </div>)
//     }

//     return (
//         <>
//         <p className="form-heading-para">ADD RTO</p><hr />
//         <div  className="form-container">  
//         {userAddition ? <AddUser /> : 
//             isLoading ? <LoadingWidget /> : <form >
//                 <div className = "form-tag">
//                 <p className="form-identifire-para">RTO identifiers</p>
//                 <div className="form-rows">
//                     {formFieldUI("RTO Code", "entityCode", "text","*")}
//                     {formFieldUI("RTO Name", "entityName", "text","*")}
//                     {formFieldUI("KYC Identifier", "kycgstpan", "text","*")}
//                 </div>
//                 <p className="form-identifire-para">Address Details</p>
//                 <div className="form-rows">
//                     {formFieldUI("Address", "address", "text")}
//                     {formFieldUI("District", "district", "text")}
//                 </div>
//                 <div className="form-rows">
//                     {formFieldUI("State", "state", "text")}
//                     {formFieldUI("Pin Code", "pincode", "text")}
//                 </div>
//                 <p className="form-identifire-para">Contact details</p>
//                 <div className="form-rows">
//                     {formFieldUI("Admin name", "contactName", "text","*")}
//                     {formFieldUI("Email", "emailId", "text","*")}
//                     {formFieldUI("Contact", "contactNo", "text")}      
//                 </div>
//                 </div>
                
//                 <div className="form-submit-btn">
//                     <button onClick={e=>handleSubmit(e)}>Save</button>
//                 </div>
//             </form>}
//         </div>
//         </>
//     )
// }





import { useState, useEffect } from "react";
import { addentity } from "../../apis/entities";
import { AddUser } from "../userManagement/userAdd";  
import { LoadingWidget } from "../../components/loading";
import useFormValidation from "../../constants/Validation";

export const AddRTO = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [userAddition, setUserAddition] = useState(false)

    const initialData = {
      entityCode: '',
      entityName: '',
      kycgstpan: '',
      address:'',
      district:'',
      state:'',
      pincode:'',
      contactName:'',
      emailId:'',
      contactNo:''
    };

    const validationRules = {
      entityCode: {
        required: true,
        minLength: 3,
        maxLength: 10,
        pattern: /^[A-Za-z0-9]+$/,
      },
      entityName: {
        required: true,
        minLength: 5,
        maxLength: 50,
      },
      kycgstpan: {
        required: true,
      },
      // address: {
      //   required: true,
      // },
      // district: {
      //   required: true,
      // },
      // state: {
      //   required: true,
      // },
      // pincode: {
      //   required: true,
      // },
      contactName: {
        required: true,
      },
      emailId: {
        required: true,
      },
      contactNo: {
        required: true,
      },
    };

    const { data, errors,setErrors, onChange, validateForm } = useFormValidation(
      initialData,
      validationRules
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true);
            const uploadData = { ...data };
            uploadData["entityType"] = "RTO";
            const response = await addentity(uploadData);
            setUserAddition(true);
            setIsLoading(false);
        }
    //     else{
    //       // setTimeout(() => {
    //       //   setErrors({});    
    //       // }, 5000);
    //     }
    }

    const formFieldUI = (label, name, type,star) => {
        return (<div key = {name} className="form-groups">
                    <label className="form-labels">{label}<sup>{star}</sup></label>
                    <input required className="form-inputs" name={name} type={type} onChange={e=>onChange(e)}></input>
                    {errors[name] && <div className="error-message" style={{color:"red",fontSize:"13px"}}>{errors[name]}</div>}
                </div>)
    }

    return (
        <>
        <p className="form-heading-para">ADD RTO</p><hr />
        <div  className="form-container">  
        {userAddition ? <AddUser /> : 
            isLoading ? <LoadingWidget /> : <form >
                <div className = "form-tag">
                <p className="form-identifire-para">RTO identifiers</p>
                <div className="form-rows">
                    {formFieldUI("RTO Code", "entityCode", "text","*")}
                    {formFieldUI("RTO Name", "entityName", "text","*")}
                    {formFieldUI("KYC Identifier", "kycgstpan", "text","*")}
                </div>
                <p className="form-identifire-para">Address Details</p>
                <div className="form-rows">
                    {formFieldUI("Address", "address", "text")}
                    {formFieldUI("District", "district", "text")}
                </div>
                <div className="form-rows">
                    {formFieldUI("State", "state", "text")}
                    {formFieldUI("Pin Code", "pincode", "text")}
                </div>
                <p className="form-identifire-para">Contact details</p>
                <div className="form-rows">
                    {formFieldUI("Admin name", "contactName", "text","*")}
                    {formFieldUI("Email", "emailId", "text","*")}
                    {formFieldUI("Contact", "contactNo", "text","*")}      
                </div>
                </div>
                
                <div className="form-submit-btn">
                    <button onClick={e=>handleSubmit(e)}>Save</button>
                </div>
            </form>}
        </div>
        </>
    )
}