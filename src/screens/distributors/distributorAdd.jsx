import { useState, useEffect } from "react";
import { addentity } from "../../apis/entities";
import { AddUser } from "../userManagement/userAdd";  
import { LoadingWidget } from "../../components/loading";

export const AddDistributor = () => {

    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [userAddition, setUserAddition] = useState(false)
    
    const onChange = (e) => {
        const data_new = {...data}
        data_new[e.target.name] = e.target.value
        setData(data_new)
    }

    const handleFileUpload = async (e) => {
        const response = await uploadDoc(e.target.files[0])
        console.log("upload file response", response)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const uploadData = {...data}
        uploadData["entityType"] = "DST"
        const response = await addentity(uploadData)
        console.log(response)
        setUserAddition(true)
        setIsLoading(false)
    }

    const formFieldUI = (label, name, type) => {
        return (<div key = {name} className="form-groups">
                    <label className="form-labels">{label}</label>
                    <input required className="form-inputs" name={name} type={type} onChange={e=>onChange(e)}></input>
                </div>)
    }

    const fileUploadUI = (label, name, type) => {
        return (<div key = {name} className="form-groups">
                    <label className="form-labels">{label}</label>
                    <input required className="form-inputs" name={name} type={type} onChange={e=>handleFileUpload(e)}></input>
                </div>)
    }



    return (
        <>
        <p className="form-heading-para">ADD DISTRIBUTORS</p><hr />
        <div  className="form-container">  
            {userAddition ? <AddUser entityType = "DST" /> : 
            isLoading ? <LoadingWidget/> : <form>
                <div className="form-tag">
                    <p className="form-identifire-para">Distributor identifiers</p>
                    <div className="form-rows">
                        {formFieldUI("Distributor Code", "entityCode", "text")}
                        {formFieldUI("Distributor Name", "entityName", "text")}
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
                        {formFieldUI("Admin Name", "contactName", "text")}
                        {formFieldUI("Email", "emailId", "text")}
                        {formFieldUI("Contact", "contactNo", "text")}      
                    </div>
                    <p className="form-identifire-para">Documents Upload</p>
                    <div className="form-rows">
                        {fileUploadUI("Registration Form", "registrationForm", "file")}
                        {fileUploadUI("KYC Document", "kycDocuments", "file")}
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


