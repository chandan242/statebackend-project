import { useState, useEffect } from "react";
import { UserPermissions } from "../constants/permissions";
import {GrRadialSelected} from "react-icons/gr";

export const AddUser = (params) => {

    const entityType = params.entityType || "DST"
 

    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [roles, setRoles] = useState([])
    
    useEffect(()=>{
        const rolesApplicable = UserPermissions.filter(item=>item["users"].includes(entityType))
        //const rolesModified = rolesApplicable.map(item => return ({...item}))
        setRoles(rolesApplicable)
    },[])

    const onChange = (e) => {
        const data_new = {...data}
        data_new[e.target.name] = e.target.value
        setData(data_new)
    }

    const onSelection = (item) => {
        const data_new = {...roles}
        data_new.push(item)
        setRoles(data_new)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const uploadData = {...data}
    }

    const formFieldUI = (label, name, type) => {
        return (<div key = {name} className="form-group col">
                    <label className="form-label m-0">{label}</label>
                    <input required className="form-control" name={name} type={type} onChange={e=>onChange(e)}></input>
                </div>)
    }

    const rolesSelectionUI = () => {
        return <div className="m-2 w-100 bg-light border-rounded">
            {roles.map(item=>{
            return <div className="row m-1 justify-content-between align-items-center" onClick={()=>onSelection(item)}><p className="p-2 col-11 m-0">{item["text"]}</p><GrRadialSelected className="col-1 m-0"/></div>
        })}
        </div>
    }

    return (
        <div  className="w-75 mx-auto mt-5">  
            <form className = "m-2">

                <p><b>User identifiers</b></p>
                <div className="row">
                    {formFieldUI("Name", "designation", "text")}
                    {formFieldUI("Email ID", "emailId", "text")}
                    {formFieldUI("User Type", "userType", "text")}
                </div>
                <p><b>Roles</b></p>
                <div className="row">
                    {rolesSelectionUI()}
                </div>
                   
                <button className="btn btn-primary" onClick={e=>handleSubmit(e)}>Save</button>
            </form>
        </div>
    )
}







