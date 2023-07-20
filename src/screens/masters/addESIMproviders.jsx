import { useState, useEffect } from "react";
import { addentity } from "../../apis/entities";

export const AddESIMProviders = () => {

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
        uploadData["entityType"] = "ESM"
        response = await addentity(uploadData)

    }

    const formFieldUI = (label, name, type) => {
        return (<div key = {name} className="form-group col">
                    <label className="form-label m-0">{label}</label>
                    <input required className="form-control" name={name} type={type} onChange={e=>onChange(e)}></input>
                </div>)
    }

    return (
        <div  className="w-75 mx-auto mt-5">  
            <form className = "m-2">

                <p><b>ESIM Provider identifiers</b></p>
                <div className="row">
                    {formFieldUI("ESIM Provider Code", "entityCode", "text")}
                    {formFieldUI("ESIM Provider Name", "entityName", "text")}
                    {formFieldUI("KYC Identifier", "kycgstpan", "text")}
                </div>
                <p><b>Address Details</b></p>
                <div className="row">
                    {formFieldUI("Address", "address", "text")}
                    {formFieldUI("District", "district", "text")}
                </div>
                <div className="row">
                    {formFieldUI("State", "state", "text")}
                    {formFieldUI("Pin Code", "pincode", "text")}
                </div>
                <p><b>Contact details</b></p>
                <div className="row">
                    {formFieldUI("Admin Name", "contactName", "text")}
                    {formFieldUI("Email", "emailId", "text")}
                    {formFieldUI("Contact", "contactNo", "text")}      
                </div>
                   
                <button className="btn btn-primary" onClick={e=>handleSubmit(e)}>Save</button>
            </form>
        </div>
    )
}


