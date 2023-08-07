import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { getEntitiesByType } from "../../apis/entities"
import {DynamicTable} from "../../components/table"

export const ApprovingAuthorityList = () => {

    const [approvingAuthority, setApprovingAuthority] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const result = await getEntitiesByType("AUT")
            console.log(result, "AUT")
            setApprovingAuthority(result)
        }
    
        fetchData()

    },[])


    return(
        <>
        <p className="table-listp">Device Approving Authorities</p>
        <div className="table-list">
            <DynamicTable data={approvingAuthority} sequence={["entityName", "entityCode", "address", "contactName", "contactNo"]}/>
        </div>
        </>
    )
}

