import React, { useState, useEffect } from "react";
import useFormValidation from "../../constants/Validation";
import { addentity } from "../../apis/entities";
import { AddUser } from "../userManagement/userAdd";
import { LoadingWidget } from "../../components/loading";
import usePincodeFetch from "../../constants/usePincodeFetch";

export const AddRTO = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userAddition, setUserAddition] = useState(false);

  const initialData = {
      entityCode: '',
      entityName: '',
      kycgstpan: '',
      address:'',
      district:'',
      state:'',
      pincode:'',
      contactName:'',
      emailId:'',
      contactNo:''
  };

  const validationRules = {
        entityCode: {
        required: true,
        minLength: 3,
        maxLength: 10,
        pattern: /^[A-Za-z0-9]+$/,
      },
      entityName: {
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
      pincode: {
        required: true,
      },
      contactName: {
        required: true,
      },
      emailId: {
        required: true,
      },
      contactNo: {
        required: true,
      },
  };

  const { data, errors, setErrors, onChange, validateForm } = useFormValidation(
    initialData,
    validationRules
  );

  const { districtOptions, stateOptions, pincodeLoading, pincodeError, fetchPincodeData } =
    usePincodeFetch();

  const handlePincodeChange = async (e) => {
    const pincode = e.target.value;
    const { district, state } = await fetchPincodeData(pincode);
    onChange({ target: { name: 'district', value: district } });
    onChange({ target: { name: 'state', value: state } });
  };

  // handle submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      const uploadData = { ...data };
      uploadData["entityType"] = "RTO";
      const response = await addentity(uploadData);
      setUserAddition(true);
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
            value={data[name]}
            type={type}
            onChange={(e) => onChange(e)}
            onKeyUp={name === "pincode" ? handlePincodeChange : undefined}
          />
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
      <p className="form-heading-para">ADD RTO</p>
      <hr />
      <div className="form-container">
        {userAddition ? (
          <AddUser entityType="RTO" navigateto={'/rtos/listRTO'}/>
        ) : isLoading ? (
          <LoadingWidget />
        ) : (
          <form>
            <div className="form-tag">
              <p className="form-identifire-para">RTO identifiers</p>
              <div className="form-rows">
                {formFieldUI("RTO Code", "entityCode", "text", "*")}
                {formFieldUI("RTO Name", "entityName", "text", "*")}
                {formFieldUI("KYC Identifier", "kycgstpan", "text", "*")}
              </div>
              <p className="form-identifire-para">Address Details</p>
              <div className="form-rows">
                {formFieldUI("Address", "address", "text")}
                {formFieldUI("Pin Code", "pincode", "text")}
              </div>
              <div className="form-rows">
              {formFieldUI("District", "district", "text", "*")}
              {formFieldUI("State", "state", "text", "*")}
              </div>
              <p className="form-identifire-para">Contact details</p>
              <div className="form-rows">
                {formFieldUI("Admin name", "contactName", "text", "*")}
                {formFieldUI("Email", "emailId", "text", "*")}
                {formFieldUI("Contact", "contactNo", "text", "*")}
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