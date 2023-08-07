import { logout } from "../apis/authentication";
import { useState } from "react"
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

const Sidebar = () => {
  const [confirmationModal, setConfirmationModal] = useState(null)

  const location = useLocation()
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

    const navigation_panel = [
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
      const navigation_tab_active = (data) => {
        return  <div className="sidebar-navigation-tab">            
                    <Link to={data.baseRoute} className="sidebar-navigation-item">
                      <div className="sidenav-icon">{data.icon}</div>
                      <p>{data.label}</p>
                    </Link>
                </div>
        }

    const navigation_tab = (data) => {
      return  <div className="sidebar-navigation-active">            
                  <Link to={data.baseRoute+ data.default} className="sidebar-navigation-item">
                    <div className="sidenav-icon">{data.icon}</div>
                    <p>{data.label}</p>
                  </Link>
              </div>
      }

  return (
    <div className="sidebar-container">
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
        <div className="logout-icon">
          <div><BiLogOut/></div>
          <p>Logout</p>
        </div>
      </div>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  );
};

export default Sidebar;
