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
        <>
        <p className="table-listp">Internet Service Providers</p>
        <div className="table-list">
            <DynamicTable data={isp} sequence={["entityName", "entityCode", "address", "contactName", "contactNo"]}/>
        </div>
        </>
    )
}

