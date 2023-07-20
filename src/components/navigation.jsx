
import { Link } from "react-router-dom";
import { matchPath, useLocation } from "react-router-dom"
import { logout } from "../apis/authentication";
import ConfirmationModal from "./ConfirmationModel";
import { useState } from "react";

const Sidebar = () => {
  const [confirmationModal, setConfirmationModal] = useState(null)
  const location = useLocation()
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

    const navigation_panel = [    
        {baseRoute:"dashboard", label:"Dashboard"},  
        {baseRoute:"deviceInventory", label:"Device Inventory"},
        {baseRoute:"rtos", label:"RTOs"},
        {baseRoute:"manufacturers", label:"Manufacturers"},
        {baseRoute:"distributors", label:"Distributors"},
        {baseRoute:"deviceApproval", label:"Device Types"},  
        {baseRoute:"masters", label:"Masters"},
        {baseRoute:"userManagement", label:"User Management"},  
      ]
    
    const navigation_tab_active = (data) => {
        return  <div className="sidebar-navigation-tab">            
                    <Link to={data.baseRoute} className="sidebar-navigation-item">
                        <p>{data.label}</p>
                    </Link>
                </div>
        }

    const navigation_tab = (data) => {
      return  <div className="sidebar-navigation-active">            
                  <Link to={data.baseRoute} className="sidebar-navigation-item">
                      <p>{data.label}</p>
                  </Link>
              </div>
      }


  return (
    <>
      {
        navigation_panel.map((item,index)=>{
          return (
            <div key={index}>
              {matchRoute(item.baseRoute)?(navigation_tab_active(item)):(navigation_tab(item))}
            </div>
          )
        })
      }
      <div>
        <hr />
        <p className="logout-btn" onClick={() =>
              setConfirmationModal({
                text1: "Are you sure?",
                text2: "You will be logged out of your account.",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => logout(),
                btn2Handler: () => setConfirmationModal(null),
              })
            }>
              Logout
          </p>
      </div>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  );
};

export default Sidebar;
