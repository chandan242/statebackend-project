import { useState, useEffect } from "react";
import { AddUser } from "../userManagement/userAdd";
import { LoadingWidget } from "../../components/loading";
import useFormValidation from "../../constants/Validation";
import usePincodeFetch from "../../constants/usePincodeFetch";
import {createManufacture,uploadDocManufacture} from "../../apis/manufacture";
import FileUploadLoading from "../../components/FileLoader";

export const AddManufacturer = () => {
  // const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false);
  const [userAddition, setUserAddition] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState({
    document1: { doctype: "", docname: "" },
    document2: { doctype: "", docname: "" },
    document3: { doctype: "", docname: "" },
  });
  const [userId, setUserId] = useState(0);

  const [isFileUploading1, setIsFileUploading1] = useState(false);
  const [isFileUploading2, setIsFileUploading2] = useState(false);
  const [isFileUploading3, setIsFileUploading3] = useState(false);

  const {
    districtOptions,
    stateOptions,
    pincodeLoading,
    pincodeError,
    fetchPincodeData,
  } = usePincodeFetch();

  const handlePincodeChange = async (e) => {
    const pincode = e.target.value;
    const { district, state } = await fetchPincodeData(pincode);
    onChange({ target: { name: "district", value: district } });
    onChange({ target: { name: "state", value: state } });
  };

  const initialData = {
    name: "",
    code: "",
    address: "",
    district: "",
    state: "",
    pinCode: "",
    kycgstpan: "",
    document1: { doctype: "", docname: "" },
    document2: { doctype: "", docname: "" },
    document3: { doctype: "", docname: "" },
  };

  const validationRules = {
    code: {
      required: true,
      minLength: 3,
      maxLength: 10,
      pattern: /^[A-Za-z0-9]+$/,
    },
    name: {
      required: true,
      minLength: 5,
      maxLength: 50,
    },
    kycgstpan: {
      required: true,
    },
    address: {
      required: true,
    },
    district: {
      required: true,
    },
    state: {
      required: true,
    },
    pinCode: {
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
          default:
            break;
        }
        const response = await uploadDocManufacture(file, docname);
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
    }));

    console.log("Selected Document Type:", selectedDocumentType);
  };

  const getParentId = () => {
    return getNextParentId();
  };
  let nextParentId = 1;
  const getNextParentId = () => {
    return nextParentId++;
  };

  const handleSubmit = async (e) => {
    console.log(uploadedFiles);
    let parentId = localStorage.getItem('parentId')
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      const document1Filename = uploadedFiles.document1.docname;
      const document2Filename = uploadedFiles.document2.docname;
      const document3Filename = uploadedFiles.document3.docname;
      const document1Doctype = uploadedFiles.document1.doctype;
      const document2Doctype = uploadedFiles.document2.doctype;
      const document3Doctype = uploadedFiles.document3.doctype;

      const uploadData = {
        name: data.name,
        code: data.code,
        kycgstpan: data.kycgstpan,
        address: data.address,
        district: data.district,
        state: data.state,
        pinCode: parseInt(data.pinCode),
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
        parentId: parseInt(parentId),
      };
      // console.log("uploadData", uploadData);
      const response = await createManufacture(uploadData);
      setUserId(response.mnfid)
      setUserAddition(true);
      setIsLoading(false);
    } else {
      setTimeout(() => {
        setErrors({});
      }, 5000);
    }
  };
  console.log("userId",userId);

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
          onKeyUp={name === "pinCode" ? handlePincodeChange : undefined}
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

  const fileUploadUI = (label, name, type, star, isLoading) => {
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
      <p className="form-heading-para">ADD MANUFACTURER</p>
      <hr />
      <div className="form-container">
        {userAddition ? (
          <AddUser
          userType="Manufacturer"
            navigateto={"/manufacturers/listManufacturer"}
            userId = {userId}
          />
        ) : isLoading ? (
          <LoadingWidget />
        ) : (
          <form>
            <div className="form-tag">
              <p className="form-identifire-para">Manufacturer identifiers</p>
              <div className="form-rows">
                {formFieldUI("Manufacturer Code", "code", "text", "*")}
                {formFieldUI("Manufacturer Name", "name", "text", "*")}
                {formFieldUI("KYC Identifier", "kycgstpan", "text", "*")}
              </div>
              <p className="form-identifire-para">Address Details</p>
              <div className="form-rows">
                {formFieldUI("Address", "address", "text", "*")}
                {formFieldUI("Pin Code", "pinCode", "text", "*")}
              </div>
              <div className="form-rows">
                {formFieldUI("District", "district", "text", "*")}
                {formFieldUI("State", "state", "text", "*")}
              </div>
              <p className="form-identifire-para">Documents Upload</p>
              <div className="form-rows">
                {fileUploadUI("Document 1","document1","file","*",isFileUploading1)}
                {fileUploadUI("Document 2","document2","file","*",isFileUploading2)}
                {fileUploadUI("Document 3","document3","file","*",isFileUploading3)}
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
