import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { getEntitiesByType } from "../../apis/entities"
import {DynamicTable} from "../../components/table"

export const ISPList = () => {

    const [isp, setISP] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const result = await getEntitiesByType("ISP")
            console.log(result, "ISP")
            setISP(result)
        }
    
        fetchData()

    },[])


    return(
        <div className="w-90 mx-auto mt-5">
            <p><b>Internet Service Providers</b></p>
            <DynamicTable data={isp} sequence={["entityName", "entityCode", "address", "contactName", "contactNo"]}/>
        </div>
    )
}

