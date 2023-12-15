import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { UserProvider } from './context/userContext.jsx';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Masters } from './screens/masters/masters.jsx';
import { DashBoard } from './screens/dashboard/dashBoard.jsx';
import { Reports } from './screens/reports/reports.jsx';
import { RTO } from './screens/rto/rto.jsx';
import { RTOList } from './screens/rto/rtoList.jsx';
import { AddRTO } from './screens/rto/rtoAdd.jsx';
import { Manufacturer } from './screens/manufacturers/manufacturer.jsx';
import { AddManufacturer } from './screens/manufacturers/manufacturerAdd.jsx';
import { ManufacturerList } from './screens/manufacturers/manufacturersList.jsx';
import { Distributor } from './screens/distributors/distributor.jsx';
import { AddDistributor } from './screens/distributors/distributorAdd.jsx';
import { DistributorList } from './screens/distributors/distributorsList.jsx';
import { User } from './screens/userManagement/user.jsx';
import { AddUser } from './screens/userManagement/userAdd.jsx';
import { UserList } from './screens/userManagement/userList.jsx';
import { DeviceApproval } from './screens/deviceApproval/deviceApproval.jsx';
import { DeviceApprovalList } from './screens/deviceApproval/deviceApprovalList.jsx';
import { AddDeviceApproval } from './screens/deviceApproval/deviceApprovalAdd.jsx';
import {LoginScreen} from './screens/publicScreens/loginScreen.jsx';
import { AddESIMProviders } from './screens/masters/addESIMproviders.jsx';
import { ESIMProviderList } from './screens/masters/listESIMproviders.jsx';
import { AddISP } from './screens/masters/addISP.jsx';
import { ISPList } from './screens/masters/listISP.jsx';
import { AddApprovingAuthority } from './screens/masters/addApprovingAuthority.jsx';
import { ApprovingAuthorityList } from './screens/masters/listApprovingAuthority.jsx';
import { DeviceInventory } from './screens/deviceInventory/deviceInventory.jsx';
import { AddDeviceInventory } from './screens/deviceInventory/addDeviceInventory.jsx';
import { Provider } from "react-redux";
import rootReducer from "./reducer/index.js";
import {configureStore} from "@reduxjs/toolkit"
import SubDashboard from './components/SubDashboard.jsx';
import VehicleReg from './components/VehicleReg.jsx';
import AlertSubDash from './components/AlertSubDash.jsx';
import SubDashIginition from './components/sub_dashboard/SubDashIginition.jsx';
import SubDashBattery from './components/sub_dashboard/SubDashBattery.jsx';
import SubDashEmegencyAlert from './components/sub_dashboard/SubDashEmegencyAlert.jsx';
import Add_Device from './components/dynamic_admin/Add_Device.jsx';
import { DistributorApproval } from './components/DistributorApproval.jsx';
import { DeviceApprovedStatus } from './components/DeviceApprovedStatus.jsx';
import SubDeviceTempered from './components/sub_dashboard/SubDeviceTempered.jsx';
import SubDeviceSending from './components/sub_dashboard/SubDeviceSending.jsx';
import SubESIMValidity from './components/sub_dashboard/SubESIMValidity.jsx';
import SubDeviceTotalAlerts from './components/sub_dashboard/SubDeviceTotalAlerts.jsx';
import SubVehicleMapSearch from './components/sub_dashboard/SubVehicleMapSearch.jsx';
import SubDashHealth from './components/sub_dashboard/SubDashHealth.jsx';
import MiniDashboard from './components/sub_dashboard/MiniDashboard.jsx';
// import 
// import thunkMiddleware from 'redux-thunk';

const store = configureStore({
  reducer:rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "login",
        element: <LoginScreen />,
      },
      {
        path: "",
        element: <DashBoard />,
      },
      {
        path: "dashboard",
        element: <DashBoard />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "/sub-dash-mini",
        element: <MiniDashboard/>,
      },
      {
        path: "/sub-dash-emergency-alert",
        element: <SubDashEmegencyAlert/>,
      },
      {
        path: "/sub-dash-health",
        element: <SubDashHealth/>,
      },
      {
        path: "/sub-dash-device-tempered",
        element: <SubDeviceTempered/>,
      },
      {
        path: "/sub-dash-device-sending",
        element: <SubDeviceSending/>,
      },
      {
        path: "/sub-dash-esim-validity",
        element: <SubESIMValidity/>,
      },
      {
        path: "/sub-dash-device-total-alert",
        element: <SubDeviceTotalAlerts/>,
      },
      {
        path: "/sub-dash-vehicle-map-search",
        element: <SubVehicleMapSearch/>,
      },
      {
        path: "/sub-dash-alert",
        element: <AlertSubDash/>,
      },
      {
        path: "/sub-dash-battery",
        element: <SubDashBattery/>,
      },
      {
        path: "/sub-dash-iginition",
        element: <SubDashIginition/>,
      },
      {
        path: "/sub-dash",
        element: <SubDashboard/>,
      },
      {
        path: "/vehicle-track",
        element: <VehicleReg/>,
      },
      {
        path: "rtos",  
        element: <RTO />,
        children:[
          {path: "", element: <RTOList />},
          {path: "addRTO", element: <AddRTO />},
          {path: "listRTO", element: <RTOList />}
        ]
      },
      {
        path: "manufacturers",   
        element: <Manufacturer />,
        children:[
          {path: "listManufacturer", element: <ManufacturerList />},
          {path: "addManufacturer", element: <AddManufacturer />} 
        ]
      },
      {
        path: "distributors",  
        element: <Distributor />,
        children:[
          {path: "listDistributor", element: <DistributorList />},
          {path: "addDistributor", element:<AddDistributor />},
          {path: "distributorApproval", element:<DistributorApproval />},
          // {path: "addDistributor", element:true? null :<AddDistributor />},
        ]
      },
      {
        path: "userManagement",  
        element: <User />,
        children:[
          {path: "listUser", element: <UserList />},
          {path: "addUser", element: <AddUser />},
        ]
      },
      {
        path: "deviceApproval",  
        element: <DeviceApproval />,
        children:[
          {path: "listDeviceApproval", element: <DeviceApprovalList />},
          {path: "addDeviceApproval", element: <AddDeviceApproval />},
          {path: "deviceApproval", element: <DeviceApprovedStatus />},
        ]
      },
      {
        path: "deviceInventory",  
        element: <DeviceInventory />,
        children:[
          {path: "deviceInventoryList", element: <ESIMProviderList />},
          {path: "addDeviceInventory", element: <AddDeviceInventory />},
          {path: "activateDevice", element: <ApprovingAuthorityList />},
        ]
      },
      {
        path: "masters",  
        element: <Masters />,
        children:[
          {path: "listESIMProviders", element: <ESIMProviderList />},
          {path: "addESIMProviders", element: <AddESIMProviders />},
          {path: "listApprovingAuthority", element: <ApprovingAuthorityList />},
          {path: "addApprovingAuthority", element: <AddApprovingAuthority />},
          {path: "listISP", element: <ISPList />},
          {path: "addISP", element: <AddISP />},
        ]
      },
      {
        path:"add_device",
        element:<Add_Device/>
      },
      {
        path:"map_device_to_vehicle",
        element:<Add_Device/>
      },
      {
        path:"view_list_of_devices",
        element:<Add_Device/>
      },
      {
        path:"device_detail",
        element:<Add_Device/>
      },
      {
        path:"update_device_detail",
        element:<Add_Device/>
      },
      {
        path:"map_device_to_vehicle",
        element:<Add_Device/>
      },
      {
        path:"add_distributor",
        element:<Add_Device/>
      },
      {
        path:"update_distributor",
        element:<Add_Device/>
      },
      {
        path:"distributor_user_management",
        element:<Add_Device/>
      },
      {
        path:"distributor_details",
        element:<DistributorList />
      },
      {
        path:"add_device_type",
        element:<Add_Device/>
      },
      {
        path:"update_device_type",
        element:<Add_Device/>
      },
      {
        path:"device_approval",
        element:<Add_Device/>
      },
      {
        path:"add_rto",
        element:<Add_Device/>
      },
      {
        path:"update_rto",
        element:<Add_Device/>
      },
      {
        path:"rto_user_management",
        element:<AddUser />
      },
      {
        path:"rto_details",
        element:<Add_Device/>
      },
      {
        path:"add_internet_service_provider",
        element:<Add_Device/>
      },
      {
        path:"update_internet_service_provider",
        element:<Add_Device/>
      },
      {
        path:"internet_service_provider_details",
        element:<Add_Device/>
      },
      {
        path:"add_esim_provider",
        element:<Add_Device/>
      },
      {
        path:"update_esim_provider",
        element:<Add_Device/>
      },
      {
        path:"esim_provider_detail",
        element:<ESIMProviderList />
      },

      {
        path:"add_manufacturer",
        element:<Add_Device/>
      },
      {
        path:"update_manufacturer",
        element:<Add_Device/>
      },
      {
        path:"manufacturer_user_management",
        element:<Add_Device/>
      },
      {
        path:"manufacturer_details",
        element:<ManufacturerList />
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </Provider>
  </React.StrictMode>,
)
