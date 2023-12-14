import { useState, useEffect } from "react";
import { addentity } from "../../apis/entities";
import { LoadingWidget } from "../../components/loading";
import { uploadDoc } from "../../apis/uploadFiles";
import useFormValidation from "../../constants/Validation";
import usePincodeFetch from "../../constants/usePincodeFetch";
import { createESIM, uploadDocESIM } from "../../apis/esim";
import FileUploadLoading from "../../components/FileLoader";

export const AddESIMProviders = () => {
  // const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState({
    document1: { doctype: "", docname: "" },
    document2: { doctype: "", docname: "" },
    document3: { doctype: "", docname: "" },
    apiDocument: { doctype: "", docname: "" },

  });

  const [isFileUploading1, setIsFileUploading1] = useState(false);
  const [isFileUploading2, setIsFileUploading2] = useState(false);
  const [isFileUploading3, setIsFileUploading3] = useState(false);
  const [isFileUploadingApiDocument, setIsFileUploadingApiDocument] = useState(false);

  // const onChange = (e) => {
  //     const data_new = {...data}
  //     data_new[e.target.name] = e.target.value
  //     setData(data_new)
  // }
  const handlePincodeChange = async (e) => {
    const pincode = e.target.value;
    const { district } = await fetchPincodeData(pincode);
    onChange({ target: { name: "providerDistrict", value: district } });
  };

  const initialData = {
    providerCode: "",
    providerName: "",
    providerGst: "",
    providerAddress: "",
    providerDistrict: "",
    providerPincode: "",
    pocName: "",
    pocPhone: "",
    pocEmail: "",
    document1: { doctype: "", docname: "" },
    document2: { doctype: "", docname: "" },
    document3: { doctype: "", docname: "" },
    apiDocument: { doctype: "", docname: "" },
  };

  const validationRules = {
    providerCode: {
      required: true,
      minLength: 3,
      maxLength: 10,
      pattern: /^[A-Za-z0-9]+$/,
    },
    providerName: {
      required: true,
      minLength: 5,
      maxLength: 50,
    },
    providerGst: {
      required: true,
    },
    providerAddress: {
      required: true,
    },
    providerDistrict: {
      required: true,
    },
    providerPincode: {
      required: true,
    },
    pocName: {
      required: true,
    },
    pocPhone: {
      required: true,
    },
    pocEmail: {
      required: true,
    },
    document1: {
      required: true,
    },
    document2: {
      required: true,
    },
    document3: {
      required: true,
    },
    apiDocument:{
      required: true,
    }
  };

  const { data, errors, setErrors, onChange, validateForm } = useFormValidation(
    initialData,
    validationRules
  );

  const handleFileUpload = async (e, docname) => {
    const file = e.target.files[0];

    if (file) {
      try {
        switch (docname) {
          case "document1":
            setIsFileUploading1(true);
            break;
          case "document2":
            setIsFileUploading2(true);
            break;
          case "document3":
            setIsFileUploading3(true);
            break;
          case "apiDocument":
            setIsFileUploadingApiDocument(true);
            break;
          default:
            break;
        }
        const response = await uploadDocESIM(file, docname);
        setUploadedFiles((prevFiles) => ({
          ...prevFiles,
          [docname]: {
            doctype: uploadedFiles[docname].doctype,
            docname: response.filename,
          },
        }));
        switch (docname) {
          case "document1":
            setIsFileUploading1(false);
            break;
          case "document2":
            setIsFileUploading2(false);
            break;
          case "document3":
            setIsFileUploading3(false);
            break;
          case "apiDocument":
            setIsFileUploadingApiDocument(false);
            break;
          default:
            break;
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        switch (docname) {
          case "document1":
            setIsFileUploading1(false);
            break;
          case "document2":
            setIsFileUploading2(false);
            break;
          case "document3":
            setIsFileUploading3(false);
            break;
          case "apiDocument":
            setIsFileUploadingApiDocument(false);
            break;            
          default:
            break;
        }
      }
    }
  };

  const handleDocumentTypeChange = (e) => {
    const selectedDocumentType = e.target.value;
    const doctype = e.target.name.replace("Type", "");
    const fieldName = doctype.toLowerCase();

    setUploadedFiles((prevFiles) => ({
      ...prevFiles,
      [fieldName]: {
        ...prevFiles[fieldName],
        doctype: selectedDocumentType,
      },
      apiDocument: {
        ...prevFiles.apiDocument,
        doctype: selectedDocumentType,
      },
    }));

    // console.log("Selected Document Type:", selectedDocumentType);
  };

  const {
    districtOptions,
    stateOptions,
    pincodeLoading,
    pincodeError,
    fetchPincodeData,
  } = usePincodeFetch();

  // console.log(uploadedFiles);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let parentId = localStorage.getItem("parentId");
    if (validateForm()) {
      setIsLoading(true);
      const document1Filename = uploadedFiles.document1.docname;
      const document2Filename = uploadedFiles.document2.docname;
      const document3Filename = uploadedFiles.document3.docname;
      const document4Filename = uploadedFiles.apiDocument.docname;
      const document1Doctype = uploadedFiles.document1.doctype;
      const document2Doctype = uploadedFiles.document2.doctype;
      const document3Doctype = uploadedFiles.document3.doctype;
      const document4Doctype = uploadedFiles.apiDocument.doctype;

      const uploadData = {
        providerCode: data.providerCode,
        providerName: data.providerName,
        providerGst: data.providerGst,
        providerAddress: data.providerAddress,
        providerDistrict: data.providerDistrict,
        providerPincode: parseInt(data.providerPincode),
        pocName: data.pocName,
        pocPhone: data.pocPhone,
        pocEmail: data.pocEmail,
        document1: {
          ...uploadedFiles.document1,
          doctype: document1Doctype,
          docname: document1Filename,
        },
        document2: {
          ...uploadedFiles.document2,
          doctype: document2Doctype,
          docname: document2Filename,
        },
        document3: {
          ...uploadedFiles.document3,
          doctype: document3Doctype,
          docname: document3Filename,
        },
        apiDocument: {
          ...uploadedFiles.apiDocument,
          doctype: document4Doctype,
          docname: document4Filename,
        },
        parentId: parseInt(parentId),
      };

      console.log("uploadData", uploadData);
      const response = await createESIM(uploadData);
      console.log("response", response);
      setIsLoading(false);
    } else {
      setTimeout(() => {
        setErrors({});
      }, 5000);
    }
  };

  const formFieldUI = (label, name, type, star) => {
    return (
      <div key={name} className="form-groups">
        <label className="form-labels">
          {label}
          <sup>{star}</sup>
        </label>
        <input
          required
          className="form-inputs"
          name={name}
          type={type}
          value={data[name]}
          onChange={(e) => onChange(e)}
          onKeyUp={name === "providerPincode" ? handlePincodeChange : undefined}
        ></input>
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

  const fileUploadUI = (label, name, type, star) => {
    const documentTypes = [
      "Adhar Card",
      "Driving License",
      "Voter ID",
      "Passport",
    ];
    let fileUploadLoading = false;
    switch (name) {
      case "document1":
        fileUploadLoading = isFileUploading1;
        break;
      case "document2":
        fileUploadLoading = isFileUploading2;
        break;
      case "document3":
        fileUploadLoading = isFileUploading3;
        break;
      case "apiDocument": // Add a case for apiDocument
        fileUploadLoading = isFileUploadingApiDocument;
        break;
      default:
        break;
    }
    return (
      <div key={name} className="form-groups">
        <label className="form-labels">
          {label}
          <sup>{star}</sup>
        </label>
        {/* Select field for document type */}
        <div>
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
        </div>
        <input
          required
          className="form-inputs form-input"
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
      <p className="form-heading-para">ADD ESIM PROVIDER</p>
      <hr />
      <div className="form-container">
        {isLoading ? (
          <LoadingWidget />
        ) : (
          <form>
            <div className="form-tag">
              <p className="form-identifire-para">ESIM Provider identifiers</p>
              <div className="form-rows">
                {formFieldUI("ESIM Provider Code", "providerCode", "text", "*")}
                {formFieldUI("ESIM Provider Name", "providerName", "text", "*")}
                {formFieldUI("Provider GST", "providerGst", "text", "*")}
              </div>
              <p className="form-identifire-para">Address Details</p>
              <div className="form-rows">
                {formFieldUI("Provider Address", "providerAddress", "text")}
                {formFieldUI("Provider PinCode", "providerPincode", "text", "*")}
              </div>
              <div className="form-rows">
                {formFieldUI("District", "providerDistrict", "text", "*")}
                {/* {formFieldUI("State", "state", "text", "*")} */}
              </div>
              <p className="form-identifire-para">Contact details</p>
              <div className="form-rows">
                {formFieldUI("Name", "pocName", "text", "*")}
                {formFieldUI("Contact", "pocPhone", "text", "*")}
                {formFieldUI("Email", "pocEmail", "email", "*")}
              </div>
              <p className="form-identifire-para">Document Upload</p>
              <div className="form-rows">
                {fileUploadUI("Document 1","document1","file","*",isFileUploading1)}
                {fileUploadUI("Document 2","document2","file","*",isFileUploading2)}
              </div>
              <div className="form-rows">
                {fileUploadUI("Document 3","document3","file","*",isFileUploading3)}
                {fileUploadUI("API Document", "apiDocument", "file", "*", isFileUploadingApiDocument)}
              </div>
            </div>

            <div className="form-submit-btn">
              <button onClick={(e) => handleSubmit(e)}>Save</button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};
