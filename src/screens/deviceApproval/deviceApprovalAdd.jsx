import { useState, useEffect } from "react";

export const AddDeviceApproval = () => {

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
  
                <p><b>Device identifiers</b></p>
                <div className="row">
                    {formFieldUI("Model Name", "model_name", "text")}
                    {formFieldUI("Is IRNSS", "is_irnss", "text")}
                    {formFieldUI("Certifying Authority", "certifying_authority", "text")}
                </div>
                <p><b>TAC Certificate Date</b></p>
                <div className="row">
                    {formFieldUI("TAC Certificate No", "tac_certificate_no", "text")}
                    {formFieldUI("Approval Date", "tac_approval_date", "date")}
                    {formFieldUI("Expiry Date", "tac_certificate_expiry", "text")}
                </div>
                <div className="row">
                    {formFieldUI("COP Certificate No", "cop_certificate_no", "text")}
                    {formFieldUI("Approval Date", "cop_approval_date", "date")}
                    {formFieldUI("Expiry Date", "cop_certificate_expiry", "text")}
                </div>
                <div className="row">
                    {formFieldUI("Upload TAC Certificate", "tac_certificate", "file")}
                    {formFieldUI("Upload COP Certificate", "cop_certificate", "file")}
                </div>
                <p><b>ESIM allowed</b></p>
                <div className="row">
                    {formFieldUI("ESIM Allowed", "contactName", "text")}
                </div>
                   
                <button className="btn btn-primary" onClick={e=>handleSubmit(e)}>Save</button>
            </form>
        </div>
    )
}


