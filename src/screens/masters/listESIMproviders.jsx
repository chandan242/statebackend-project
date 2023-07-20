import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { getEntitiesByType } from "../../apis/entities"
import {DynamicTable} from "../../components/table"

export const ESIMProviderList = () => {

    const [esimProviders, setESIMProviders] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const result = await getEntitiesByType("ESM")
            console.log(result, "ESM")
            setESIMProviders(result)
        }
    
        fetchData()

    },[])


    return(
        <div className="w-90 mx-auto mt-5">
            <p><b>ESIM Provider List</b></p>
            <DynamicTable data={esimProviders} sequence={["entityName", "entityCode", "address", "contactName", "contactNo"]}/>
        </div>
    )
}

