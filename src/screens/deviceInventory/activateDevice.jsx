import {useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react';
import { useQuery, useMutation } from 'react-query'

export const DeviceActivation = () => {

    const navigate = useNavigate()

    const [imei, setIMEI] = useState({})
    const [locationData, setLocationData] = useState(null)
    const [isFetched, setIsFetched] = useState(false)
    const [getOTP, setGetOTP] = useState(false)
    const [getPayment, setGetPayment] = useState(false)
    
    const onChange = (e) => {
        setIMEI(e.target.value)
    }

    const fetchData = async (e) => {
        e.preventDefault();
        refetch()
        setIsFetched(true)
        setGetOTP(true)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <>
            <br></br>
            <p><b>Activate Device</b></p>
            <hr></hr>
            <div>
                <form>
                <div className="row">
                    {formFieldUI("Device IMEI", "imei", "text")}
                </div>
                
                </form>
            </div>
        </>
    )
}
