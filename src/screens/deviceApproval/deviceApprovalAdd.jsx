import { useState, useEffect } from "react";
import { getEntitiesByType } from "../../apis/entities";
import { LoadingWidget } from "../../components/loading";
// import { MultipleSelection } from "../../components/multipleSelection";
import useFormValidation from "../../constants/Validation";
import { getEsimAllProvider, uploadDocDeviceApproval } from "../../apis/masters";
import FileUploadLoading from "../../components/FileLoader";


export const AddDeviceApproval = () => {

    // const [data, setData] = useState({})
    // const [approvingAuthorityList, setApprovingAuthorityList] = useState(null)
    const [esimProviderList, setESIMProviderList] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [selectedESIM, setSelectedESIM] = useState([])
    const [uploadedFiles, setUploadedFiles] = useState({
      // tac_certificate: { doctype: "", docname: "" },
      // cop_certificate: { doctype: "", docname: "" },
      // technical_spec: { doctype: "", docname: "" },
      // protocol_spec: { doctype: "", docname: "" },
      tac_certificate:'',
      cop_certificate:'',
      technical_spec:'',
      protocol_spec:'',
    });
    const [tacCertificate, setTacCertificate] = useState(false);
    const [copCertificate, setCopCertificate] = useState(false);
    const [technicalSpec, setTechnicalSpec] = useState(false);   
    const [protocolSpec, setProtocolSpec] = useState(false);   
    
    useEffect(()=>{
        // const fetchApprovingAuthorityData = async () => {
        //     const result = await getEntitiesByType("AUT")
        //     const mapData = selectionFieldData(result)
        //     setApprovingAuthorityList(mapData)
        // }
        const fetchESIMProviderData = async () => {
          try {
            const result = await getEsimAllProvider();
            // const mapData = multipleSelectionData(result);
            setESIMProviderList(result);
          } catch (error) {
            console.error('Error fetching ESIM providers:', error);
          }
        };
    
        fetchESIMProviderData();
        // fetchApprovingAuthorityData()

    },[])

    // const selectionFieldData = (selectionArrayPassed) => {
    //     return selectionArrayPassed.map(item=> {return {value: item["id"], label: item["entityName"]}})
    // }

    const multipleSelectionData = (selectionArrayPassed) => {
      return selectionArrayPassed.map((item) => {
        return { code: item.id, text: item.entityName };
      });
    };

    // const onChange = (e) => {
    //     const data_new = {...data}
    //     data_new[e.target.name] = e.target.value
    //     setData(data_new)
    // }

    const initialData = {
        model_code: '',
        model_name:'',
        is_irnss: '',
        certifying_authority:'',
        tac_certificate_no: '',
        tac_certificate: { doctype: "tac_certificate", docname: "" },
        tac_approval_date:'',
        tac_certificate_expiry:'',
        cop_certificate_no:'',
        cop_certificate: { doctype: "cop_certificate", docname: "" },
        cop_approval_date:'',
        cop_certificate_expiry:'',
        technical_spec: { doctype: "technical_spec", docname: "" },
        protocol_spec: { doctype: "protocol_spec", docname: "" },
      };
  
      const validationRules = {
        model_code: {
          // required: true,
        //   minLength: 3,
        //   maxLength: 10,
        //   pattern: /^[A-Za-z0-9]+$/,
        },
        model_name: {
          // required: true,
        //   minLength: 3,
        //   maxLength: 10,
        //   pattern: /^[A-Za-z0-9]+$/,
        },
        is_irnss: {
          // required: true,
        //   minLength: 5,
        //   maxLength: 50,
        },
        certifying_authority:{
          // required: true
        },
        tac_certificate_no: {
          // required: true,
        },
        tac_certificate: {
          // required: true,
        },
        tac_approval_date: {
          // required: true,
        },
        tac_certificate_expiry: {
          // required: true,
        },
        cop_certificate_no: {
          // required: true,
        },
        cop_certificate: {
          // required: true,
        },
        cop_approval_date: {
          // required: true,
        },
        cop_certificate_expiry: {
          // required: true,
        },
        technical_spec:{
          // required:true,
        },
        protocol_spec:{
          // required:true,
        },
      };
  
      const { data, errors,setErrors, onChange, validateForm } = useFormValidation(
        initialData,
        validationRules
      );

      const handleFileUpload = async (e, docname) => {
        const file = e.target.files[0];
    
        if (file) {
          try {
            switch (docname) {
              case "tac_certificate":
                setTacCertificate(true);
                break;
              case "cop_certificate":
                setCopCertificate(true);
                break;
              case "technical_spec":
                setTechnicalSpec(true);
                break;
              case "protocol_spec":
                setProtocolSpec(true);
                break;
              default:
                break;
            }
            const response = await uploadDocDeviceApproval(file, docname);
            setUploadedFiles((prevFiles) => ({
              ...prevFiles,
              [docname]: {
                // doctype: uploadedFiles[docname].doctype,
                docname: response.filename,
              },
            }));
            switch (docname) {
              case "tac_certificate":
                setTacCertificate(false);
                break;
              case "cop_certificate":
                setCopCertificate(false);
                break;
              case "technical_spec":
                setTechnicalSpec(false);
                break;
              case "protocol_spec":
                setProtocolSpec(false);
                break;
              default:
                break;
            }
          } catch (error) {
            console.error("Error uploading file:", error);
            switch (docname) {
              case "tac_certificate":
                setTacCertificate(false);
                break;
              case "cop_certificate":
                setCopCertificate(false);
                break;
              case "technical_spec":
                setTechnicalSpec(false);
                break;
              case "protocol_spec":
                setProtocolSpec(false);
                break;
              default:
                break;
            }
          }
        }
      };
    
      // const handleDocumentTypeChange = (e) => {
      //   const selectedDocumentType = e.target.value;
      //   const doctype = e.target.name.replace("Type", "");
      //   const fieldName = doctype.toLowerCase();
    
      //   setUploadedFiles((prevFiles) => ({
      //     ...prevFiles,
      //     [fieldName]: {
      //       ...prevFiles[fieldName],
      //       doctype: selectedDocumentType,
      //     },
      //   }));
    
      //   console.log("Selected Document Type:", selectedDocumentType);
      // };
    
      console.log("wuqgduqwuwsw--uploadedFiles",uploadedFiles);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true)
            const uploadData = {
              model_code: data.model_code,
              model_name: data.model_name,
              // is_irnss: data.is_irnss,
              // certifying_authority: data.certifying_authority,
              tac_certificate_no: data.tac_certificate_no,
              tac_certificate: {
                // ...uploadedFiles.document1,
                doctype: data.tac_certificate.doctype,
                docname: uploadedFiles.tac_certificate,
              },
              // tac_approval_date: data.tac_approval_date,
              // tac_certificate_expiry: data.tac_certificate_expiry,
              cop_certificate_no: data.cop_certificate_no,
              cop_certificate: {
                // ...uploadedFiles.document2,
                doctype: data.cop_certificate.doctype,
                docname: uploadedFiles.cop_certificate,
              },
              // cop_approval_date: data.cop_approval_date,
              // cop_certificate_expiry: data.cop_certificate_expiry,
              technical_spec: {
                // ...uploadedFiles.document3,
                doctype: data.technical_spec.doctype,
                docname: uploadedFiles.technical_spec,
              },
              protocol_spec: {
                // ...uploadedFiles.document3,
                doctype: data.protocol_spec.doctype,
                docname: uploadedFiles.protocol_spec,
              },
            };
            console.log(uploadData, "Uploading Device for Approval")
            uploadData["esim_allowed"] = 
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
                        {/* {dataMap.map(item=><option value = {item["value"]}>{item["label"]}</option>)} */}
                    </select>
                    {errors[name] && <div className="error-message" style={{color:"red",fontSize:"13px"}}>{errors[name]}</div>}
                </div>)
    }

    const fileUploadUI = (label, name, type, star, isLoading) => {
      // const documentTypes = [
      //   "Adhar Card",
      //   "Driving License",
      //   "Voter ID",
      //   "Passport",
      // ];
      let fileUploadLoading = false;
      switch (name) {
        case "tac_certificate":
          fileUploadLoading = tacCertificate;
          break;
        case "cop_certificate":
          fileUploadLoading = copCertificate;
          break;
        case "technical_spec":
          fileUploadLoading = technicalSpec;
          break;
        case "protocol_spec":
          fileUploadLoading = protocolSpec;
          break;
        default:
          break;
      }
  
      return (
        <div key={name} className="form-groups">
          <label className="form-labes">
            {label}
            <sup>{star}</sup>
          </label>
          {/* Select field for document type */}
          {/* <div>
            <select
              className="select-groups"
              name={`${name}Type`}
              onChange={(e) => handleDocumentTypeChange(e)}
            >
              <option value="">Select Document Type</option>
              {documentTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div> */}
          <input
            required
            className="form-inputs"
            name={name}
            type={type}
            onChange={(e) => handleFileUpload(e, name)}
            disabled={isLoading || fileUploadLoading}
          ></input>
          {(isLoading || fileUploadLoading) && (
            <div className="loading-bar">
              <FileUploadLoading />
            </div>
          )}
          {errors[name] && (
            <div
              className="error-message"
              style={{ color: "red", fontSize: "13px" }}
            >
              {errors[name]}
            </div>
          )}
        </div>
      );
    };

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
                        {selectFormField("Certifying Authority", "certifying_authority","*")}
                    </div>
                    <p className="form-identifire-para">TAC Certificate Details</p>
                    <div className="form-rows">
                        {formFieldUI("TAC Certificate No", "tac_certificate_no", "text","*")}
                        {fileUploadUI("Upload TAC Certificate", "tac_certificate", "file","*")}
                    </div>
                    <div className="form-rows">
                        {formFieldUI("Approval Date", "tac_approval_date", "date","*")}
                        {formFieldUI("Expiry Date", "tac_certificate_expiry", "date","*")}
                    </div>
                    <p className="form-identifire-para">COP Certificate Details</p>
                    <div className="form-rows">
                        {formFieldUI("COP Certificate No", "cop_certificate_no", "text","*")}
                        {fileUploadUI("Upload COP Certificate", "cop_certificate", "file","*")}
                    </div>
                    <div className="form-rows">
                        {formFieldUI("Approval Date", "cop_approval_date", "date","*")}
                        {formFieldUI("Expiry Date", "cop_certificate_expiry", "date","*")}
                    </div>
                    <p className="form-identifire-para">Others Documents</p>
                    <div className="form-rows">
                        {fileUploadUI("Technical Spec", "technical_spec", "file","*")}
                        {fileUploadUI("Protocol Spec", "protocol_spec", "file","*")}
                    </div>                    
                    <p className="form-identifire-para">Permitted ESIM</p>
                    <div className="form-rows">
                      {esimProviderList ? (
                        <MultipleSelection
                          esimProviderList={esimProviderList}
                          selectedESIM={selectedESIM}
                          setSelectedESIM={setSelectedESIM}
                        />
                      ) : null}
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


const MultipleSelection = ({ esimProviderList, selectedESIM, setSelectedESIM }) => {

  const handleSelection = (providerCode) => {
    const updatedSelection = selectedESIM.includes(providerCode)
      ? selectedESIM.filter((selectedCode) => selectedCode !== providerCode)
      : [...selectedESIM, providerCode];
    setSelectedESIM(updatedSelection);
  };
  console.log(selectedESIM);

  return (
    <div>
      {esimProviderList.map((provider) => (
        <div key={provider.providerCode}>
          <label>
            <input
              type="checkbox"
              value={provider.providerCode}
              checked={selectedESIM.includes(provider.providerCode)}
              onChange={() => handleSelection(provider.providerCode)}
            />
            {provider.providerName}
          </label>
        </div>
      ))}
    </div>
  );
};