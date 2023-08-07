import { useState, useEffect } from "react";
import { addentity } from "../../apis/entities";
import { LoadingWidget } from "../../components/loading";

export const AddISP = () => {

    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    
    
    const onChange = (e) => {
        const data_new = {...data}
        data_new[e.target.name] = e.target.value
        setData(data_new)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const uploadData = {...data}
        uploadData["entityType"] = "ISP"
        const response = await addentity(uploadData)
        console.log("response", response)
        setIsLoading(false)
    }

    const formFieldUI = (label, name, type) => {
        return (<div key = {name} className="form-groups">
                    <label className="form-labels">{label}</label>
                    <input required className="form-inputs" name={name} type={type} onChange={e=>onChange(e)}></input>
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
                        {formFieldUI("ISP Code", "entityCode", "text")}
                        {formFieldUI("ISP Name", "entityName", "text")}
                        {formFieldUI("KYC Identifier", "kycgstpan", "text")}
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
                        {formFieldUI("Name", "contactName", "text")}
                        {formFieldUI("Email", "emailId", "text")}
                        {formFieldUI("Contact", "contactNo", "text")}      
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


