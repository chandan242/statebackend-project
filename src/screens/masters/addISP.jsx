import { useState, useEffect } from "react";
import { addentity } from "../../apis/entities";
import { LoadingWidget } from "../../components/loading";
import useFormValidation from "../../constants/Validation";

export const AddISP = () => {

    // const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    
    
    // const onChange = (e) => {
    //     const data_new = {...data}
    //     data_new[e.target.name] = e.target.value
    //     setData(data_new)
    // }

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
      };
  
      const { data, errors,setErrors, onChange, validateForm } = useFormValidation(
        initialData,
        validationRules
      );

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true)
            const uploadData = {...data}
            uploadData["entityType"] = "ISP"
            const response = await addentity(uploadData)
            console.log("response", response)
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
                    <input required className="form-inputs" name={name} type={type} onChange={e=>onChange(e)}></input>
                    {errors[name] && <div className="error-message" style={{color:"red",fontSize:"13px"}}>{errors[name]}</div>}
                </div>)
    }

    return (
        <>
        <p className="form-heading-para">ADD ISP</p><hr />
        <div  className="form-container">  
            {isLoading ? <LoadingWidget /> :<form>
                <div className="form-tag">
                    <p className="form-identifire-para">Internet Service provider</p>
                    <div className="form-rows">
                        {formFieldUI("ISP Code", "entityCode", "text","*")}
                        {formFieldUI("ISP Name", "entityName", "text","*")}
                        {formFieldUI("KYC Identifier", "kycgstpan", "text","*")}
                    </div>
                    <p className="form-identifire-para">Address Details</p>
                    <div className="form-rows">
                        {formFieldUI("Address", "address", "text")}
                        {formFieldUI("District", "district", "text","*")}
                    </div>
                    <div className="form-rows">
                        {formFieldUI("State", "state", "text","*")}
                        {formFieldUI("Pin Code", "pincode", "text","*")}
                    </div>
                    <p className="form-identifire-para">Contact details</p>
                    <div className="form-rows">
                        {formFieldUI("Name", "contactName", "text","*")}
                        {formFieldUI("Email", "emailId", "text","*")}
                        {formFieldUI("Contact", "contactNo", "text","*")}      
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


