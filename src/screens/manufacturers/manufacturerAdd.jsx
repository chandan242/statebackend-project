import { useState, useEffect } from "react";
import { addentity } from "../../apis/entities";
import { AddUser } from "../userManagement/userAdd";
import { LoadingWidget } from "../../components/loading";
import useFormValidation from "../../constants/Validation";
import usePincodeFetch from "../../constants/usePincodeFetch";

export const AddManufacturer = () => {

    // const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [userAddition, setUserAddition] = useState(false)

    const { districtOptions, stateOptions, pincodeLoading, pincodeError, fetchPincodeData } =
    usePincodeFetch();

    const handlePincodeChange = async (e) => {
      const pincode = e.target.value;
      const { district, state } = await fetchPincodeData(pincode);
      onChange({ target: { name: 'district', value: district } });
      onChange({ target: { name: 'state', value: state } });
    };

    const handleFileUpload = async (e) => {
        const response = await uploadDoc(e.target.files[0])
        console.log("upload file response", response)
    }

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
        address: {
          required: true,
        },
        district: {
          required: true,
        },
        state: {
          required: true,
        },
        pincode: {
          required: true,
        },
        contactName: {
          required: true,
        },
        emailId: {
          required: true,
        },
        contactNo: {
          required: true,
        },
        // registrationForm:{
        //     required : true
        // },
        // kycDocuments:{
        //     required : true
        // }
      };
  
      const { data, errors,setErrors, onChange, validateForm } = useFormValidation(
        initialData,
        validationRules
      );

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (validateForm()) {
            setIsLoading(true)
            const uploadData = {...data}
            uploadData["entityType"] = "MNF"
            const response = await addentity(uploadData)
            setUserAddition(true)
            setIsLoading(false)
        // }
        // else{
        //   setTimeout(() => {
        //     setErrors({});    
        //   }, 5000);
        // }
    }

    const formFieldUI = (label, name, type, star) => {
        return (<div key = {name} className="form-groups">
                    <label className="form-labels">{label}<sup>{star}</sup></label>
                    <input required className="form-inputs" name={name} type={type}  value={data[name]} onChange={e=>onChange(e)} onKeyUp={name === "pincode" ? handlePincodeChange : undefined}></input>
                    {errors[name] && <div className="error-message" style={{color:"red",fontSize:"13px"}}>{errors[name]}</div>}
                </div>)
    }

    const fileUploadUI = (label, name, type,star) => {
        return (<div key = {name} className="form-groups">
                    <label className="form-labes">{label}<sup>{star}</sup></label>
                    <input required className="form-inputs" name={name} type={type} onChange={e=>handleFileUpload(e)}></input>
                    {errors[name] && <div className="error-message" style={{color:"red",fontSize:"13px"}}>{errors[name]}</div>}
                </div>)
    }

    return (
        <>
        <p className="form-heading-para">ADD MANUFACTURER</p><hr />
        <div  className="form-container">  
            {userAddition ? <AddUser entityType = "MNF" navigateto={'/manufacturers/listManufacturer'}/> : 
            isLoading ? <LoadingWidget /> : <form>
                <div className = "form-tag">
                    <p className="form-identifire-para">Manufacturer identifiers</p>
                    <div className="form-rows">
                        {formFieldUI("Manufacturer Code", "entityCode", "text","*")}
                        {formFieldUI("Manufacturer Name", "entityName", "text","*")}
                        {formFieldUI("KYC Identifier", "kycgstpan", "text","*")}
                    </div>
                    <p className="form-identifire-para">Address Details</p>
                    <div className="form-rows">
                        {formFieldUI("Address", "address", "text","*")}
                        {formFieldUI("Pin Code", "pincode", "text","*")}
                    </div>
                    <div className="form-rows">
                        {formFieldUI("District", "district", "text","*")}
                        {formFieldUI("State", "state", "text","*")}
                    </div>
                    <p className="form-identifire-para">Contact details</p>
                    <div className="form-rows">
                        {formFieldUI("Admin Name", "contactName", "text","*")}
                        {formFieldUI("Email", "emailId", "text","*")}
                        {formFieldUI("Contact", "contactNo", "text","*")}      
                    </div>
                    <p className="form-identifire-para">Documents Upload</p>
                    <div className="form-rows">
                        {fileUploadUI("Registration Form", "registrationForm", "file")}
                        {fileUploadUI("KYC Document", "kycDocuments", "file")}
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


