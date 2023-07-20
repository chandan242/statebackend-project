import { useState, useEffect } from "react";
import { addentity } from "../../apis/entities";
import '../../index.css'

export const AddRTO = () => {

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
        uploadData["entityType"] = "RTO"
        response = await addentity(uploadData)
        setIsLoading(false)
    }

    const formFieldUI = (label, name, type) => {
        return (<div key = {name} className="form-group">
                    <label className="form-label">{label}</label>
                    <input required className="form-control" name={name} type={type} onChange={e=>onChange(e)}></input>
                </div>)
    }

    return (    
        <div  className="form-container">  
            <form>
                <p className="form-identifire-para">RTO identifiers :</p>
                <div className="form-rows">
                    {formFieldUI("RTO Code", "entityCode", "text")}
                    {formFieldUI("RTO Name", "entityName", "text")}
                    {formFieldUI("KYC Identifier", "kycgstpan", "text")}
                </div>
                <p className="form-identifire-para">Address Details :</p>
                <div className="form-rows ">
                    {formFieldUI("Address", "address", "text")}
                    {formFieldUI("District", "district", "text")}
                </div>
                <div className=" form-rows rows-state">
                    {formFieldUI("State", "state", "text")}
                    {formFieldUI("Pin Code", "pincode", "text")}
                </div>
                <p className="form-identifire-para">Contact details :</p>
                <div className="form-rows ">
                    {formFieldUI("Admin name", "contactName", "text")}
                    {formFieldUI("Email", "emailId", "text")}
                    {formFieldUI("Contact", "contactNo", "text")}      
                </div>
                   
                <button className="btn btn-primary text-center" onClick={e=>handleSubmit(e)}>Save</button>
            </form>
        </div>
    )
}

