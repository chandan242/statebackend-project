import { logout } from "../apis/authentication";
import { useState,useEffect, useContext } from "react"
import { UserContext } from "../context/userContext";
import {AiFillDashboard} from 'react-icons/ai'
import {MdOutlineInventory2} from 'react-icons/md'
import {TbReportSearch} from 'react-icons/tb'
import {BiUser} from 'react-icons/bi'
import {BsDistributeVertical} from 'react-icons/bs'
import {MdPrecisionManufacturing} from 'react-icons/md'
import {DiHtml5DeviceAccess} from 'react-icons/di'
import {SiMastercomfig} from 'react-icons/si'
import {MdOutlineCountertops} from 'react-icons/md'
import {BiLogOut} from 'react-icons/bi'
import { Link } from "react-router-dom";
import { matchPath, useLocation } from "react-router-dom"
import ConfirmationModal from "./ConfirmationModel";
import { getUserRoles } from "../apis/users";

const Sidebar = ({navigationOpen}) => {
  const [confirmationModal, setConfirmationModal] = useState(null)
  const [userRoles, setUserRoles] = useState([]);
  const [userCodes,setUserCodes] = useState([])
  const location = useLocation()
  let navigation_panel;
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  const userDetails = useContext(UserContext);
  const user = userDetails.userType

  const roleAdminTitles = {
    DST: "DST Admin",
    RTO: "RTO Admin",
    SBU: "SBU Admin",
    MNF: "MNF Admin",
  };
  

  useEffect(() => {
    // const fetchUserRoles = async () => {
    //   try {
    //     const response = await axios.get(
    //       `http://www.thexyz.biz:8087/api/UserRoles/getuserrole?userid=${id}`,
    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       }
    //     );
    //     if (response.data.status) {
    //       const userRoleNames = response.data.result.map((role) => role.name);
    //       setUserRoles(userRoleNames);
    //       console.log(userRoleNames);
    //     }
    //   } catch (error) {
    //     console.error("Error fetching user roles:", error);
    //   }
    // };

    // fetchUserRoles();
    const fetchUserRoles = async () => {
      try {
        const { userRoleNames, userCode } = await getUserRoles();
        setUserRoles(userRoleNames);
        setUserCodes(userCode);
        console.log(userRoleNames,userCode);
      } catch (error) {
        console.error("Error fetching user roles:", error);
      }
    };

    fetchUserRoles();
  }, []);


  if (user === "DST") {
    navigation_panel = [
      { baseRoute: "dashboard", label: "Dashboard",icon:<AiFillDashboard/>, default: "/" },
      ...userRoles.map((data,index) => ({
        baseRoute: `/${userCodes[index]}`,
        label: data,
        icon:<AiFillDashboard/>,
        default: "/",
      })),
    ];
  }

  else if(user === "RTO"){
    navigation_panel = [
      { baseRoute: "dashboard", label: "Dashboard",icon:<AiFillDashboard/>, default: "addRTO" },
      ...userRoles.map((data,index) => ({
        baseRoute: `/${userCodes[index]}`,
        label: data,
        icon:<AiFillDashboard/>,
        default: "/",
      })),
    ];
  }
  else if(user === "SBU"){
    navigation_panel = [
      // { baseRoute: "dashboard", label: "Dashboard",icon:<AiFillDashboard/>, default: "/" },
      ...userRoles.map((data,index) => ({
        baseRoute:`/${userCodes[index]}`,
        label: data,
        icon:<AiFillDashboard/>,
        default: "/",
      })),
    ];
 }
 else if(user === "MNF"){
  navigation_panel = [
    // { baseRoute: "dashboard", label: "Dashboard",icon:<AiFillDashboard/>, default: "/" },
    ...userRoles.map((data,index) => ({
      baseRoute: `/${userCodes[index]}`,
      label: data,
      icon:<AiFillDashboard/>,
      default: "/",
    })),
  ];
}
  else{
    navigation_panel = [
      {baseRoute:"dashboard", label:"Dashboard",icon:<AiFillDashboard/>, default:"/"},  
      {baseRoute:"deviceInventory", label:"Device Inventory",icon:<MdOutlineInventory2/>, default:"/deviceInventoryList"},
      {baseRoute:"rtos", label:"RTOs",icon:<MdOutlineCountertops/>, default:"/listRTO"},
      {baseRoute:"manufacturers", label:"Manufacturers",icon:<MdPrecisionManufacturing/>, default:"/listManufacturer"},
      {baseRoute:"distributors", label:"Distributors",icon:<BsDistributeVertical/>, default:"/listDistributor"},
      {baseRoute:"deviceApproval", label:"Device Types",icon:<DiHtml5DeviceAccess/>, default:"/listDeviceApproval"},  
      {baseRoute:"masters", label:"Masters",icon:<SiMastercomfig fill="white"/>, default:"/listESIMProviders"},
      {baseRoute:"userManagement", label:"User Management",icon:<BiUser/>, default:"/listUser"},
      {baseRoute:"reports", label:"Reports",icon:<TbReportSearch/>, default:"/"},
    ]
  }
      const navigation_tab_active = (data) => {
        return  <div className="sidebar-navigation-tab">            
                    <Link to={data.baseRoute} className={navigationOpen?"sidebar-navigation-item":"sidebar-navigation-item-s"}>
                      <div className="sidenav-icon">{data.icon}</div>
                      <p>{data.label}</p>
                    </Link>
                </div>
        }

    const navigation_tab = (data) => {
      return  <div className="sidebar-navigation-active">            
                  <Link to={data.baseRoute+ data.default} className={navigationOpen?"sidebar-navigation-item":"sidebar-navigation-item-s"}>
                    <div className="sidenav-icon">{data.icon}</div>
                    <p>{data.label}</p>
                  </Link>
              </div>
      }

  return (
    <div className="sidebar-container">
      <div className={navigationOpen?"sidenav-main-logo":"sidenav-main-logo-expand"}>
        <div><img src="https://vlt.uk.gov.in/Content/image/logo4.png" alt="" /></div>
        <h3>{roleAdminTitles[user] || "ADMIN"} </h3>
      </div><hr />
      {
        navigation_panel.map((item,index)=>{
          return (
            <div key={index} className="sidebar-items">
              {matchRoute(item.baseRoute)?(navigation_tab_active(item)):(navigation_tab(item))}
            </div>
          )
        })
      }
      

      <div onClick={() =>
              setConfirmationModal({
                text1: "Are you sure?",
                text2: "You will be logged out of your account.",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => logout(),
                btn2Handler: () => setConfirmationModal(null),
              })
            } className="logout-btn">
        <hr />
        <div className={navigationOpen?"logout-icon":"logout-icon-expand"}>
          <div><BiLogOut/></div>
          <p>Logout</p>
        </div>
      </div>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  );
};

export default Sidebar;