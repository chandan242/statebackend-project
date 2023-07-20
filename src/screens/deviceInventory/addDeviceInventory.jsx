import { useState, useEffect } from 'react';

export const AddDeviceInventory = () => {    
    
    const [data, setData] = useState({})
    
    const onChange = (e) => {
        const data_new = {...data}
        data_new[e.target.name] = e.target.value
        setData(data_new)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const formFieldUI = (label, name, type) => {
        return (<div key = {name} className="form-group">
                    <label className="form-label m-0">{label}</label>
                    <input required className="form-control" name={name} type={type} onChange={e=>onChange(e)}></input>
                </div>)
    }

    
    return (
        <div className='form-container'>
            <p>Add Inventory</p>
            <hr></hr>
            <div>
            <form>
                <div className="addrto-rows">
                    {formFieldUI("Device IMEI", "imei", "text")}
                    {formFieldUI("Device Serial No", "device_serialno", "text")}
                    {formFieldUI("Model Type", "model_type", "text")}
                </div>
                <div className="addrto-rows">
                    {formFieldUI("ESIM Provider", "esim_provider", "text")}
                    {formFieldUI("ICCID", "iccid", "text")}
                </div>
            <button className="btn btn-primary" onClick={e=>handleSubmit(e)}>Save</button>
                        
        </form>
        </div>
            
        </div>
    )
}

