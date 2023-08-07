import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { getEntitiesByType } from "../../apis/entities"
import {DynamicTable} from "../../components/table"

export const RTOList = () => {

    const [rtos, setRTOs] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const result = await getEntitiesByType("RTO")
            console.log(result, "RTO")
            setRTOs(result)
        }
    
        fetchData()

    },[])


    return(
        <>
        <p className="table-listp">RTO LIST</p>
        <div className="table-list">
            <DynamicTable data={rtos} sequence={["entityName", "entityCode", "address", "contactName", "contactNo"]}/>
        </div>
        </>
    )
}

