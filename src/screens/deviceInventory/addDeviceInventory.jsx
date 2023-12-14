import Swal from 'sweetalert2'

import { useState, useEffect } from 'react';
import useFormValidation from '../../constants/Validation';
import { createDeviceInventory } from '../../apis/deviceInventory';

export const AddDeviceInventory = () => {   
    const [isLoading, setIsLoading] = useState(false); 
    const [bulkData, setBulkData] = useState(null);

    const initialData = {
        imeiNo:"",
        deviceSerialNo:'',
        vltdModelName:'',
        iccidNumber :'',
    }
    const validationRules = {
        imeiNo:{
            required: true,
            minLength: 14,
            maxLength: 16,
            pattern: /^[A-Za-z0-9]+$/,
        },
        deviceSerialNo:{
            required: true,
            minLength: 5,
            maxLength: 16,
            pattern: /^[A-Za-z0-9]+$/,
        },
        vltdModelName:{
            required: true,
            minLength: 5,
            maxLength: 16,
            pattern: /^[A-Za-z0-9]+$/,
        },
        iccidNumber:{
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

    const handleSubmit = async(e) => {
        e.preventDefault();
        const createdBy = localStorage.getItem("userid")
        const entitycode = localStorage.getItem("entityId")
        console.log(createdBy,entitycode);
        if (bulkData) {
            setIsLoading(true);
            //bulk upload api here implement
            setIsLoading(false);
            await Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Bulk Upload Successful',
            });
        } else {
            if (validateForm()) {
                setIsLoading(true);
                const uploadData = {
                    imeiNo: data.imeiNo,
                    deviceSerialNo: data.deviceSerialNo,
                    vltdModelName: data.vltdModelName,
                    iccidNumber: data.iccidNumber
                };
                uploadData["createdBy"] = parseInt(createdBy)
                uploadData["entitycode"] = parseInt(entitycode)
                console.log(uploadData);
                let response = await createDeviceInventory(uploadData);

                setIsLoading(false);
                if (response && response.status) {
                    await Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: `Device Inventory Created Successfully`,
                    });
                    navigate(trasfers);
                } else if (response && !response.status && response.message) {
                    await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: response.message,
                    });
                } else {
                    console.error('Failed to create user');
                    await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to create user. Please try again!',
                    });
                }
            }
            else{
            setTimeout(() => {
                setErrors({});
            }, 5000);
            }
        }
    }

    
    const onBulkUpload = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const rows = await readXlsxFile(e.target.files[0])  

        const notActivated_required_array = ['iccidNumber', 'imeiNo', 'deviceSerialNo', 'vltdModelCode']
        const notActivated_check_array = ['esim_state', 'esim_status', 'plan', 'primary_sim_activation_type', 'primary_sim_activation_date', 'primary_sim_expiry_date', 'primary_operator_data_limit', 'primary_status', 'fallback_activation_type', 'fallback_sim_activation_date', 'fallback_sim_expiry_date', 'fallback_operator_data_limit', 'fallback_status', 'manufacturer', 'amount', 'updated_by']
        const filtered_check_extra = rows[0].filter(item=> notActivated_check_array.includes(item))
        const filtered_check_required = notActivated_required_array.filter(item=> !rows[0].includes(item))
        if(filtered_check_extra.length > 0 || filtered_check_required.length > 0){
            const extra_items = filtered_check_extra.map(item=>"Please check " + item + " is extra header for data")
            const missing_items = filtered_check_required.map(item=>"Please check " + item + " is not available in the header for data")
            setErrorArray(extra_items.concat(missing_items))
        }

        const data_array = rows.shift()
            const data_object = {}
            for (const y of rows){
                let index = 0
                let new_obj = {}
                for(const x of data_array) {
                    new_obj[x]=y[index]
                    index=index+1
                }
                index =0
                data_object[y[0]] = new_obj  
            }
        const bulk_upload_data = Object.values(data_object)
        const existingICCID = esimInventory.map(item=>item["iccidNumber"])
        const filtered_bulk_upload = bulk_upload_data.filter(item=>!existingICCID.includes(item["iccidNumber"].toString()))
        const existing_esimICCID = bulk_upload_data.filter(item=>!filtered_bulk_upload.includes(item))
        if(existing_esimICCID.length > 0){
            let errorsInICCID = [] 
            existing_esimICCID.forEach(item=>errorsInICCID.push(item["iccidNumber"] + "   ICCID already exists in the DB"))
            setErrorArray(errorsInICCID)
        }
        setBulkData(filtered_bulk_upload)
        setIsLoading(false)
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
                <div className="form-row">
                    <label className="form-label">Bulk Upload</label>
                    <input className="form-input" name="bulkUpload" type="file" onChange={e=>onBulkUpload(e)}></input>
                </div>
                <div style={{textAlign:"center",marginBottom:"15px",marginTop:"15px"}}>OR</div>
                    <div className="form-rows">
                        {formFieldUI("Device IMEI", "imeiNo", "text","*")}
                        {formFieldUI("Device Serial No", "deviceSerialNo", "text","*")}
                        {formFieldUI("Model Type", "vltdModelName", "text","*")}
                    </div>
                    <div className="form-rows">
                        {/* {formFieldUI("ESIM Provider", "entitycode", "text","*")} */}
                        {formFieldUI("ICCID", "iccidNumber", "text","*")}
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

