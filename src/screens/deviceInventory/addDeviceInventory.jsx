import { useState, useEffect } from 'react';
import useFormValidation from '../../constants/Validation';

export const AddDeviceInventory = () => {    

    const initialData = {
        imei:"",
        device_serialno:'',
        model_type:'',
        esim_provider:'',
        iccid :'',
    }
    const validationRules = {
        imei:{
            required: true,
            minLength: 14,
            maxLength: 16,
            pattern: /^[A-Za-z0-9]+$/,
        },
        device_serialno:{
            required: true,
            minLength: 5,
            maxLength: 16,
            pattern: /^[A-Za-z0-9]+$/,
        },
        model_type:{
            required: true,
            minLength: 5,
            maxLength: 16,
            pattern: /^[A-Za-z0-9]+$/,
        },
        esim_provider:{
            required:true
        },
        iccid:{
            required: true,
            minLength: 5,
            maxLength: 16,
            pattern: /^[A-Za-z0-9]+$/,
        }
    }

    const { data, errors,setErrors, onChange, validateForm } = useFormValidation(
        initialData,
        validationRules
      );

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Form Submission Api run here

        }
        else{
          setTimeout(() => {
            setErrors({});
          }, 5000);
        }
    }

    const formFieldUI = (label, name, type, star) => {
        return (<div key = {name} className="form-groups">
                    <label className="form-labels">{label}<sup>{star}</sup></label>
                    <input required className="form-inputs" name={name} type={type} onChange={e=>onChange(e)}></input>
                    {errors[name] && <div className="error-message" style={{color:"red",fontSize:"13px"}}>{errors[name]}</div>}
                </div>)
    }

    
    return (
        <>
            <p className="form-heading-para">Add Inventory</p>
            <hr></hr>
            <div  className="form-container">
            <form>
                <div className = "form-tag">
                    <div className="form-rows">
                        {formFieldUI("Device IMEI", "imei", "text","*")}
                        {formFieldUI("Device Serial No", "device_serialno", "text","*")}
                        {formFieldUI("Model Type", "model_type", "text","*")}
                    </div>
                    <div className="form-rows">
                        {formFieldUI("ESIM Provider", "esim_provider", "text","*")}
                        {formFieldUI("ICCID", "iccid", "text","*")}
                    </div>
                </div>
                <div className="form-submit-btn">
                    <button onClick={e=>handleSubmit(e)}>Save</button>
                </div>
                        
        </form>
        </div>
            
        </>
    )
}

