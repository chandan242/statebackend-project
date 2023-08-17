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
          {path: "addManufacturer", element: <AddManufacturer />},
        ]
      },
      {
        path: "distributors",  
        element: <Distributor />,
        children:[
          {path: "listDistributor", element: <DistributorList />},
          {path: "addDistributor", element: <AddDistributor />},
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
      }
    ]
  }])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </Provider>
  </React.StrictMode>,
)
