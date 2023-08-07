import { useState, useEffect } from "react";
import { getEntitiesByType } from "../../apis/entities";
import { LoadingWidget } from "../../components/loading";
import { MultipleSelection } from "../../components/multipleSelection";

export const AddDeviceApproval = () => {

    const [data, setData] = useState({})
    const [approvingAuthorityList, setApprovingAuthorityList] = useState(null)
    const [esimProviderList, setESIMProviderList] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [selectedESIM, setSelectedESIM] = useState(null)
        
    useEffect(()=>{
        const fetchApprovingAuthorityData = async () => {
            const result = await getEntitiesByType("AUT")
            const mapData = selectionFieldData(result)
            setApprovingAuthorityList(mapData)
            
        }
        const fetchESIMProviderData = async () => {
            const result = await getEntitiesByType("ESM")
            const mapData = multipleSelectionData(result)
            console.log("setESIMProviderList", mapData)
            setESIMProviderList(mapData)
        }
    
        fetchESIMProviderData()
        fetchApprovingAuthorityData()

    },[])

    const selectionFieldData = (selectionArrayPassed) => {
        return selectionArrayPassed.map(item=> {return {value: item["id"], label: item["entityName"]}})
    }

    const multipleSelectionData = (selectionArrayPassed) => {
        return selectionArrayPassed.map(item=> {return {code: item["id"], text: item["entityName"]}})
    }

    const onChange = (e) => {
        const data_new = {...data}
        data_new[e.target.name] = e.target.value
        setData(data_new)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const uploadData = {...data}
        console.log(uploadData, "Uploading Device for Approval")
        setIsLoading(false)
    }

    const formFieldUI = (label, name, type) => {
        return (<div key = {name} className="form-groups">
                    <label className="form-labels">{label}</label>
                    <input required className="form-inputs" name={name} type={type} onChange={e=>onChange(e)}></input>
                </div>)
    }

    const selectFormField = (label,name, dataMap) => {
        return (<div key = {name} className="form-groups">
                    <label className="form-labels">{label}</label>
                    <select required className="form-inputs" name={name} onChange = {e=>onChange(e)}>
                        <option value = "">Select</option>
                        {dataMap.map(item=><option value = {item["value"]}>{item["label"]}</option>)}
                    </select>
                </div>)
    }

    return (
        <>
        <p className="form-heading-para">ADD DEVICE APPROVAL</p><hr />
        <div  className="form-container">  
            {isLoading ? <LoadingWidget /> : <form>
                
                <div className = "form-tag">
                    <p className="form-identifire-para">Device identifiers</p>
                    <div className="form-rows">
                        {formFieldUI("Model Name", "model_name", "text")}
                        {selectFormField("Is IRNSS", "is_irnss", [{value: "No", label: "No"}, {value: "Yes", label: "Yes"}])}
                        {approvingAuthorityList ? selectFormField("Certifying Authority", "certifying_authority", approvingAuthorityList) : null}
                    </div>
                    <p className="form-identifire-para">TAC Certificate Details</p>
                    <div className="form-rows">
                        {formFieldUI("TAC Certificate No", "tac_certificate_no", "text")}
                        {formFieldUI("Upload TAC Certificate", "tac_certificate", "file")}
                    </div>
                    <div className="form-rows">
                        {formFieldUI("Approval Date", "tac_approval_date", "date")}
                        {formFieldUI("Expiry Date", "tac_certificate_expiry", "date")}
                    </div>
                    <p className="form-identifire-para">COP Certificate Details</p>
                    <div className="form-rows">
                        {formFieldUI("COP Certificate No", "cop_certificate_no", "text")}
                        {formFieldUI("Upload COP Certificate", "cop_certificate", "file")}
                    </div>
                    <div className="form-rows">
                        {formFieldUI("Approval Date", "cop_approval_date", "date")}
                        {formFieldUI("Expiry Date", "cop_certificate_expiry", "date")}
                    </div>
                    <p className="form-identifire-para">Permitted ESIM</p>
                    <div className="form-rows">
                        {esimProviderList ? <MultipleSelection data = {esimProviderList} updateList= {setSelectedESIM}/> : null}
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


