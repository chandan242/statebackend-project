import { useState, useEffect } from "react";
import { MultipleSelection } from "../../components/multipleSelection";
import { UserPermissions } from "../../constants/permissions";
import { addUserRTO } from "../../apis/rto";
import { LoadingWidget } from "../../components/loading";
import useFormValidation from "../../constants/Validation";
import { useNavigate } from "react-router-dom";

export const AddUser = (props) => {
  const navigate = useNavigate();
  
  const entityType = props.entityType || "DST"
  const trasfers = props.navigateto
  console.log(trasfers);
    
    // const filteredPermissions = UserPermissions.filter(item=>item["users"].includes(entityType))    

    const filteredPermissions = UserPermissions.filter((item) =>
      item.users.includes(entityType)
    );
    // const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [selectedPermissions, setSelectedPermissions] = useState([]) 

    // const onChange = (e) => {
    //     const data_new = {...data}
    //     data_new[e.target.name] = e.target.value
    //     setData(data_new)
    // }

    const initialData = {
        designation: '',
        userName: '',
        emailId: '',
        contactNo:'',
        password:''
        // confirmPassword:''
      };
  
      const validationRules = {
        designation: {
          required: true,
          minLength: 3,
          maxLength: 10,
          pattern: /^[A-Za-z0-9]+$/,
        },
        userName: {
          required: true,
          minLength: 5,
          maxLength: 50,
        },
        emailId: {
          required: true,
        },
        contactNo: {
          required: true,
        },
        password: {
          required: true,
        },
        // confirmPassword: {
        //   required: true,
        // },
      };
  
      const { data, errors,setErrors, onChange, validateForm } = useFormValidation(
        initialData,
        validationRules
      );

    const handleSubmit = async (e) => {
      let parentId = localStorage.getItem('parentId')
      let entityId = localStorage.getItem('entityId')
      let role = localStorage.getItem('role')
      let roletype = localStorage.getItem('roletype')
      let userType = localStorage.getItem('userType')
      let type = localStorage.getItem('type')
      let status = localStorage.getItem('status')
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true)
            const uploadData = {...data}

            uploadData["entityId"] = parseInt(entityId)
            uploadData["parentId"] = parseInt(parentId)
            
            uploadData["type"] = parseInt(type)
            uploadData["userType"] = userType
            
            uploadData["createdBy"] = 1
            // uploadData["createdBy"] = JSON.parse(localStorage.getItem("userObject"))["loginResp"]["id"]
            uploadData["updateBy"] = uploadData["createdBy"]
            uploadData["createdOn"] = new Date()
            uploadData["updateOn"] = new Date()
            uploadData["status"] = parseInt(status)
            uploadData["roletype"] = roletype
            uploadData["role"] = parseInt(role)
            uploadData["roleLists"] = selectedPermissions.map(item => ({"code": item["code"],"name":"Chandan", "value":1}))
            console.log("uploadData_roles", uploadData)    
            const response = await addUserRTO(uploadData)
            console.log(response, "user created")
            setIsLoading(false)
            navigate(`${trasfers}`);
        }
        else{
          setTimeout(() => {
            setErrors({});    
          }, 5000);
        }
        
    }

    const formFieldUI = (label, name, type, star) => {
        return (<div key = {name} className="form-groups">
                    <label className="form-labels">{label}<sup>{star}</sup></label>
                    <input required className="form-inputs" name={name} type={type} onChange={e=>onChange(e)}></input>
                    {errors[name] && <div className="error-message" style={{color:"red",fontSize:"13px"}}>{errors[name]}</div>}
                </div>)
    }

    return (
        <>
        <p className="form-heading-para">USER ADD</p>
        <div  className="form-container">  
            {isLoading ? <LoadingWidget /> : <form>
                <div className = "form-tag">
                    <p className="form-identifire-para">User identifiers</p>
                    <div className="form-rows">
                        {formFieldUI("Designation", "designation", "text","*")}
                        {formFieldUI("User Name", "userName", "text","*")}
                        {formFieldUI("Email ID", "emailId", "text","*")}
                    </div>
                    <div className="form-rows">
                        {formFieldUI("Contact No", "contactNo", "text","*")}
                        {formFieldUI("Password", "password", "text","*")}
                        {/* {formFieldUI("Confirm Password", "confirmPassword", "text","*")} */}
                    </div>
                    <p className="form-identifire-para">Map Roles</p>
                    <div className="form-rows">
                        <MultipleSelection data = {filteredPermissions} updateList= {setSelectedPermissions}/>
                    </div>
                </div>
                <div className="form-submit-btn">
                    <button className="btn btn-primary" onClick={e=>handleSubmit(e)}>Save</button>
                </div>
            </form>}
        </div>
        </>
    )
}


