import { useState, useEffect } from "react";
import { MultipleSelection } from "../../components/multipleSelection";
import { UserPermissions } from "../../constants/permissions";
import { addUserAPI } from "../../apis/users";
import { LoadingWidget } from "../../components/loading";

export const AddUser = (props) => {

    const entityType = props.entityType || "DST"
    
    const filteredPermissions = UserPermissions.filter(item=>item["users"].includes(entityType))    

    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [selectedPermissions, setSelectedPermissions] = useState([]) 

    const onChange = (e) => {
        const data_new = {...data}
        data_new[e.target.name] = e.target.value
        setData(data_new)
    }

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        setIsLoading(true)
        const uploadData = {...data}

        uploadData["entityId"] = "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        uploadData["parentId"] = "ae5f5038-f387-487b-83fb-2221a20ee4ca"
        
        uploadData["type"] = "A"
        uploadData["userType"] = entityType
        
        uploadData["createdBy"] = JSON.parse(localStorage.getItem("userObject"))["loginResp"]["id"]
        uploadData["updateBy"] = uploadData["createdBy"]
        uploadData["createdOn"] = new Date()
        uploadData["updateOn"] = new Date()
        uploadData["status"] = 1
        uploadData["roleLists"] = selectedPermissions.map(item => ({"code": item["code"], "value":1}))
        console.log("uploadData_roles", uploadData["roleLists"])    
        const response = await addUserAPI(uploadData)
        console.log(response, "user created")
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
        <p className="form-heading-para">USER ADD</p><hr />
        <div  className="form-container">  
            {isLoading ? <LoadingWidget /> : <form>
                <div className = "form-tag">
                    <p className="form-identifire-para">User identifiers</p>
                    <div className="form-rows">
                        {formFieldUI("Designation", "designation", "text")}
                        {formFieldUI("User Name", "userName", "text")}
                        {formFieldUI("Email ID", "emailId", "text")}
                    </div>
                    <div className="form-rows">
                        {formFieldUI("Password", "password", "text")}
                        {formFieldUI("Confirm Password", "confirmPassword", "text")}
                    </div>
                    <p className="form-identifire-para">Map Roles</p>
                    <div className="form-rows">
                        <MultipleSelection data = {filteredPermissions} updateList= {setSelectedPermissions}/>
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


