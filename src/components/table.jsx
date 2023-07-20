import {useState, useEffect} from "react";
import {BiDetail} from "react-icons/bi";
import './common.css'; 

export const DynamicTable = (params)=>{

    const data_table = params.data
    const column = params.sequence
    const filter_required = params.filter_required || false

    const [searchField, setSearchField] = useState("")
    const [pageCount, setPageCount] = useState(0)
    const [filteredArray, setFilteredArray] = useState(null)
    const [pageMoverRequired, setPageMoverRequired] = useState(false)

    useEffect(()=>{
        setFilteredArray([])
        if(data_table.length > 20){
            setFilteredArray(data_table.slice(0+pageCount*20,20+pageCount*20))
            setPageMoverRequired(true)
        } else {
            setFilteredArray(data_table)
            setPageMoverRequired(false)
        }
    },[data_table, pageCount])

    const ThData =()=>{
        return column.map((data)=>{
            return <th className = "text-white" key={data} style={{fontSize:"0.8rem", backgroundColor:"#3d5a80"}}>{data}</th>
        })
    }
        // get table row data
        const tdData =() =>{
            if(filteredArray && filteredArray.length>0){
                return filteredArray.map((data)=>{
                    return(
                        
                        <tr>
                            {
                            column.map((v, index)=>{
                                return index===0? <td className = "d-flex justify-content-start align-items-center" style={{fontSize:"0.8rem"}}><span>{data[v]}</span><BiDetail size="1rem" className="ml-1"/></td>:<td style={{fontSize:"0.8rem"}}>{data[v] && data[v].toString()}</td>
                            })
                            }
                        </tr>
                    )
                })
            }
    }

    const searchESIM = (e) =>{
        if(searchField.length >= 5){
            const filteredArraySearched = data_table.filter(item=>item["iccid"].includes(searchField))
            setFilteredArray(filteredArraySearched)
        }
    }

    const decrement = (e) => {
        if(pageCount>0){
            setPageCount(pageCount-1)
        }
    }

    const increment = (e) => {
        if(pageCount < Math.floor(data_table.length/20) && Math.floor(data_table.length/20)>1){
            setPageCount(pageCount+1)
        }
    }

    return (
        <div className="mt-3">
            <div className="row ml-2 mb-2">
                {filter_required ? <div className="row col-5">
                    <input placeholder = "ICCID Number (min 5 char)" className="col-8" type="text" value={searchField} onChange={e=>setSearchField(e.target.value)}/>
                    <button className="col-3 btn btn-primary ml-1" onClick={e=>searchESIM(e)}><b>search</b></button>
                </div> : null}
                
                {pageMoverRequired ? <div className="row col-4 float-right">
                    <button className="col-5 btn btn-secondary ml-1" onClick={e=>decrement(e)}>previous page</button>
                    <button className="col-5 btn btn-secondary ml-1" onClick={e=>increment(e)}>next page</button>
                </div> : null}
            </div>
            <div className="scroll_table" style={{width:"100%", overflow: "scroll"}}>
            <table className="table table-striped" >
                <thead>
                    <tr>{ThData()}</tr>
                </thead>
                <tbody>
                    {tdData()}
                </tbody>
            </table>
            </div>
        </div>
    )
}
