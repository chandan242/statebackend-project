import { useState } from "react"
import { login } from "../../apis/authentication"

export const LoginScreen = () => {
    let token = localStorage.getItem("token")
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    
    const onChange = (e) => {
        const data_new = {...data}
        data_new[e.target.name] = e.target.value
        setData(data_new)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        response = await login(data)
    }

    const formFieldUI = (label, name, type) => {
        return (<div key = {name} className="form-group col">
                    <label className="form-label m-0">{label}</label>
                    <input required className="form-control" name={name} type={type} onChange={e=>onChange(e)}></input>
                </div>)
    }

    return (
        <div  className="w-75 mx-auto mt-5">  
            <form className = "m-2">
                <p><b>Login</b></p>
                <div className="row">
                    {formFieldUI("Email ID", "username", "text")}
                </div>
                <div className="row">
                    {formFieldUI("Password", "password", "text")}
                </div>
                   
                <button className="btn btn-primary" onClick={e=>handleSubmit(e)}>Submit</button>
            </form>
        </div>
    )

}
