import { useState, useEffect } from "react";
import { MultipleSelection } from "../../components/multipleSelection";
import { UserPermissions } from "../../constants/permissions";
import { addUserRTO } from "../../apis/rto";
import { addUserManufacture } from "../../apis/manufacture";
import { LoadingWidget } from "../../components/loading";
import useFormValidation from "../../constants/Validation";
import { useNavigate } from "react-router-dom";
import { addUserDistributor } from "../../apis/distributor";

export const AddUser = (props) => {
  const navigate = useNavigate();
  const userType = props.userType

  // const entityType = props.entityType || "DST"
  const trasfers = props.navigateto
  console.log("transfers",trasfers);
  const entityId = props.userId
    
    // const filteredPermissions = UserPermissions.filter(item=>item["users"].includes(entityType))    

    // const filteredPermissions = UserPermissions.filter((item) =>
    //   item.users.includes(entityType)
    // );
    // const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [selectedRoles, setSelectedRoles] = useState([])
    const [isUsernameAvailable, setIsUsernameAvailable] = useState(null);
    const [usernameInput, setUsernameInput] = useState('');
    const [fetchedRolesWithValue1, setFetchedRolesWithValue1] = useState([]);
    const [fetchedRolesWithValue0, setFetchedRolesWithValue0] = useState([]);
    
    const fetchRoles = async () => {
      try {
        const userId = localStorage.getItem("userid")
        const token = localStorage.getItem("token")
        console.log(userId,token);
        const response = await fetch(`http://www.thexyz.biz:8087/api/${userType}/getrole?userid=${userId}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`, 
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          if (data.status) {
            const rolesWithValue1 = data.result.filter(role => role.value === 1);
            console.log("rolesWithValue1",rolesWithValue1);
            const rolesWithValue0 = data.result.filter(role => role.value === 0);
            console.log("rolesWithValue0",rolesWithValue0);
            setFetchedRolesWithValue1(rolesWithValue1);
            setFetchedRolesWithValue0(rolesWithValue0);
          } else {
            console.error('Failed to fetch roles:', data.message);
          }
        } else {
          console.error('Failed to fetch roles');
        }
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    };
  
    useEffect(() => {
      fetchRoles();
    }, []);
    // console.log("fetchedRoles",fetchedRoles);

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

      // const checkUsername = async (username) => {
      //   try {
      //     if (username.trim() !== '') {
      //       const response = await checkUser(username);
      //       setIsUsernameAvailable(response.status);
      //     } else {
      //       setIsUsernameAvailable(null);
      //     }
      //   } catch (error) {
      //     console.error('Error checking username:', error);
      //   }
      // };
    
      // const handleUsernameChange = (e) => {
      //   const username = e.target.value;
      //   setUsernameInput(username);
      //   checkUsername(username);
      // };


    const handleSubmit = async (e) => {
      let parentId = localStorage.getItem('parentId')
      let role = localStorage.getItem('role')
      let roletype = localStorage.getItem('roletype')
      // let userType = localStorage.getItem('userType')
      let type = localStorage.getItem('type')
      let status = localStorage.getItem('status')
      let userid = localStorage.getItem('userid')
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true)
            const uploadData = {...data}

            uploadData["userid"] = parseInt(userid)
            uploadData["entityId"] = entityId
            uploadData["parentId"] = parseInt(parentId)
            uploadData["status"] = parseInt(status)
            // uploadData["userType"] = userType
            // uploadData["roletype"] = roletype
            // uploadData["role"] = parseInt(role)
            
            // uploadData["createdBy"] = 1
            // uploadData["createdBy"] = JSON.parse(localStorage.getItem("userObject"))["loginResp"]["id"]
            // uploadData["updateBy"] = uploadData["createdBy"]
            // uploadData["createdOn"] = new Date()
            // uploadData["updateOn"] = new Date()

            uploadData["roleLists"] = selectedRoles.map(item => ({"id":item.id,"code": item.code,"name":item.name, "value":item.value}))

            console.log("uploadData_roles", uploadData)    
            if (props.userType === 'RTO') {
              const response = await addUserRTO(uploadData);
              console.log(response, 'User created for RTO');
            } else if (props.userType === 'Manufacturer') {
              const response = await addUserManufacture(uploadData);
              console.log(response, 'User created for Manufacturer');
            }
            else if (props.userType === 'Distributor'){
              const response = await addUserDistributor(uploadData);
              console.log(response, 'User created for Distributor');
              setIsLoading(false)
              navigate(trasfers);
            }
 
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
                        {/* <div className="form-groups">
                          <label className="form-labels">User Name<sup>*</sup></label>
                          <input
                            required
                            className="form-inputs"
                            name="userName"
                            type="text"
                            onChange={handleUsernameChange}
                          ></input>
                          {usernameInput !== '' && isUsernameAvailable !== null && (
                            <>
                              {!isUsernameAvailable ? (
                                <div className="error-message" style={{ color: "red", fontSize: "13px" }}>
                                  Username is not available
                                </div>
                              ) : (
                                <div className="success-message" style={{ color: "green", fontSize: "13px" }}>
                                  Username is available
                                </div>
                              )}
                            </>
                          )}
                        </div> */}
                        {formFieldUI("Email ID", "emailId", "text","*")}
                    </div>
                    <div className="form-rows">
                        {formFieldUI("Contact No", "contactNo", "text","*")}
                        {formFieldUI("Password", "password", "text","*")}
                        {/* {formFieldUI("Confirm Password", "confirmPassword", "text","*")} */}
                    </div>
                    <p className="form-identifire-para">Map Roles</p>
                    <div className="form-rows">
                        <MultipleSelection 
                              rolesWithValue1={fetchedRolesWithValue1}
                              rolesWithValue0={fetchedRolesWithValue0}
                              selectedRoles={selectedRoles}
                              setSelectedRoles={setSelectedRoles}
                        />
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


