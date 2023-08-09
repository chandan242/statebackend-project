import { useState, useEffect } from "react"
import {GrRadialSelected} from "react-icons/gr";

export const MultipleSelection = ({data, updateList}) => {

    const [uiList, setUIList] = useState([])

    useEffect(() =>{
        if(data){
            const newData = data.map(item=>{
                item["isActive"] = false
                return item})
            setUIList(newData)
        }
        
    },[])

    const onSelection = (selectedItem) => {
        const changedArray = uiList.map(item => {
            if(item["code"] == selectedItem["code"]){
                item["isActive"] = !item["isActive"]        
            }
            return item})
        setUIList(changedArray)
        updateList(changedArray.filter(item=>item["isActive"]===true))
    }

    return <div>
    {uiList.map(item=><div key = {item["code"]} className={"" + (item["isActive"] ? "bg-warning" : "bg-light")} onClick={()=>onSelection(item)}>
                        <p className="map-roles-text">
                            {item["text"]}
                        </p>
                        {item["isActive"] ? <GrRadialSelected className=""/> : null }
                        </div>
        )}
</div>
}