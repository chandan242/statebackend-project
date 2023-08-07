import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { getEntitiesByType } from "../../apis/entities"
import {DynamicTable} from "../../components/table"

export const ManufacturerList = () => {

    const [distributors, setDistributorss] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const result = await getEntitiesByType("MNF")
            console.log(result, "MNF")
            setDistributorss(result)
        }
    
        fetchData()

    },[])


    return(
        <>
        <p className="table-listp">Distributors List</p>
        <div className="table-list">
            <DynamicTable data={distributors} sequence={["entityName", "entityCode", "address", "contactName", "contactNo"]}/>
        </div>
        </>
    )
}

