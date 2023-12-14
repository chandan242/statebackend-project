import { useState, useEffect } from "react";
import { addentity } from "../../apis/entities";
import { LoadingWidget } from "../../components/loading";
import useFormValidation from "../../constants/Validation";
import usePincodeFetch from "../../constants/usePincodeFetch";
import { createApprovingAuthority } from "../../apis/masters";
import { useNavigate } from "react-router-dom";

export const AddApprovingAuthority = () => {
    const navigate = useNavigate();
    // const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    
    // const onChange = (e) => {
    //     const data_new = {...data}
    //     data_new[e.target.name] = e.target.value
    //     setData(data_new)
    // }
    const { districtOptions, stateOptions, pincodeLoading, pincodeError, fetchPincodeData } =
    usePincodeFetch();

    const handlePincodeChange = async (e) => {
      const pincode = e.target.value;
      const { district, state } = await fetchPincodeData(pincode);
      onChange({ target: { name: 'district', value: district } });
      onChange({ target: { name: 'state', value: state } });
    };

    const initialData = {
      authID: '',
      authName: '',
      authAddress:'',
      authDistrict:'',
      authPincode:'',
      pocName:'',
      pocEmail:'',
      pocPhone:''
    };
  
      const validationRules = {
        authID: {
          required: true,
        },
        authName: {
          required: true,
          minLength: 5,
          maxLength: 50,
        },
        authAddress: {
          required: true,
        },
        authDistrict: {
          required: true,
        },
        authPincode: {
          required: true,
        },
        pocName: {
          required: true,
        },
        pocEmail: {
          required: true,
        },
        pocPhone: {
          required: true,
        },
      };
  
      const { data, errors,setErrors, onChange, validateForm } = useFormValidation(
        initialData,
        validationRules
      );

    const handleSubmit = async (e) => {
        e.preventDefault();
        let parentId = localStorage.getItem('parentId')
        if (validateForm()) {
            setIsLoading(true)
            const uploadData = {
              authID: data.authID,
              authName: data.authName,
              authAddress: data.authAddress,
              authPincode: data.authPincode,
              authDistrict: data.authDistrict,
              pocName: data.pocName,
              pocEmail: data.pocEmail,
              pocPhone: data.pocPhone,
              parentId: parseInt(parentId),
            };
            const response = await createApprovingAuthority(uploadData);
            navigate("/masters/listApprovingAuthority")
            setIsLoading(false)
        }
        else{
          setTimeout(() => {
            setErrors({});    
          }, 5000);
        }
    }

    const formFieldUI = (label, name, type,star) => {
        return (<div key = {name} className="form-groups">
                    <label className="form-labels">{label}<sup>{star}</sup></label>
                    <input required className="form-inputs" name={name} type={type} value={data[name]} onChange={e=>onChange(e)} onKeyUp={name === "pincode" ? handlePincodeChange : undefined}></input>
                    {errors[name] && <div className="error-message" style={{color:"red",fontSize:"13px"}}>{errors[name]}</div>}
                </div>)
    }

    return (
        <>
        <p className="form-heading-para">ADD DEVICE AUTHORITY</p><hr />
        <div  className="form-container">  
            {isLoading ? <LoadingWidget /> : <form>
                <div className = "form-tag">
                    <p className="form-identifire-para">Device Approving Authority Details</p>
                    <div className="form-rows">
                        {formFieldUI("Authority Code", "authID", "text","*")}
                        {formFieldUI("Authority Name", "authName", "text","*")}
                    </div>
                    <p className="form-identifire-para">Address Details</p>
                    <div className="form-rows">
                        {formFieldUI("Address", "authAddress", "text")}
                        {formFieldUI("Pin Code", "authPincode", "text","*")}
                        {formFieldUI("District", "authDistrict", "text","*")}
                    </div>
                    <p className="form-identifire-para">Contact details</p>
                    <div className="form-rows">
                        {formFieldUI("Name", "pocName", "text","*")}
                        {formFieldUI("Email", "pocEmail", "text","*")}
                        {formFieldUI("Contact", "pocPhone", "text","*")}      
                    </div>
                </div>

                <div className="form-submit-btn">
                    <button className="btn btn-primary" onClick={e=>handleSubmit(e)}>Save</button>
                </div>
                   
            </form>}
        </div>
        </>
    )
}


