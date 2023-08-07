import { useState, useEffect } from "react";
import { getEntitiesByType } from "../../apis/entities";
import { LoadingWidget } from "../../components/loading";
import { MultipleSelection } from "../../components/multipleSelection";
import useFormValidation from "../../constants/Validation";


export const AddDeviceApproval = () => {

    // const [data, setData] = useState({})
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

    // const onChange = (e) => {
    //     const data_new = {...data}
    //     data_new[e.target.name] = e.target.value
    //     setData(data_new)
    // }

    const initialData = {
        model_name: '',
        is_irnss: '',
        tac_certificate_no: '',
        tac_certificate:'',
        tac_approval_date:'',
        tac_certificate_expiry:'',
        cop_certificate_no:'',
        cop_certificate:'',
        cop_approval_date:'',
        cop_certificate_expiry:''
      };
  
      const validationRules = {
        model_name: {
          required: true,
        //   minLength: 3,
        //   maxLength: 10,
        //   pattern: /^[A-Za-z0-9]+$/,
        },
        is_irnss: {
          required: true,
        //   minLength: 5,
        //   maxLength: 50,
        },
        tac_certificate_no: {
          required: true,
        },
        tac_certificate: {
          required: true,
        },
        tac_approval_date: {
          required: true,
        },
        tac_certificate_expiry: {
          required: true,
        },
        cop_certificate_no: {
          required: true,
        },
        cop_certificate: {
          required: true,
        },
        cop_approval_date: {
          required: true,
        },
        cop_certificate_expiry: {
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
            console.log(uploadData, "Uploading Device for Approval")
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

    const selectFormField = (label,name, dataMap,star) => {
        return (<div key = {name} className="form-groups">
                    <label className="form-labels">{label}<sup>{star}</sup></label>
                    <select required className="form-inputs" name={name} onChange = {e=>onChange(e)}>
                        <option value = "">Select</option>
                        {dataMap.map(item=><option value = {item["value"]}>{item["label"]}</option>)}
                    </select>
                    {errors[name] && <div className="error-message" style={{color:"red",fontSize:"13px"}}>{errors[name]}</div>}
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
                        {formFieldUI("Model Name", "model_name", "text","*")}
                        {selectFormField("Is IRNSS", "is_irnss", [{value: "No", label: "No"}, {value: "Yes", label: "Yes"}],"*")}
                        {approvingAuthorityList ? selectFormField("Certifying Authority", "certifying_authority", approvingAuthorityList,"*") : null}
                    </div>
                    <p className="form-identifire-para">TAC Certificate Details</p>
                    <div className="form-rows">
                        {formFieldUI("TAC Certificate No", "tac_certificate_no", "text","*")}
                        {formFieldUI("Upload TAC Certificate", "tac_certificate", "file","*")}
                    </div>
                    <div className="form-rows">
                        {formFieldUI("Approval Date", "tac_approval_date", "date","*")}
                        {formFieldUI("Expiry Date", "tac_certificate_expiry", "date","*")}
                    </div>
                    <p className="form-identifire-para">COP Certificate Details</p>
                    <div className="form-rows">
                        {formFieldUI("COP Certificate No", "cop_certificate_no", "text","*")}
                        {formFieldUI("Upload COP Certificate", "cop_certificate", "file","*")}
                    </div>
                    <div className="form-rows">
                        {formFieldUI("Approval Date", "cop_approval_date", "date","*")}
                        {formFieldUI("Expiry Date", "cop_certificate_expiry", "date","*")}
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


