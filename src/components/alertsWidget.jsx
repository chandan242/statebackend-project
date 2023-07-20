import React from 'react';
import allalert from "../assets/alerts/allalert.png";
import location_update from "../assets/alerts/location-update.png";
import Quarnt from "../assets/alerts/Quarnt.png";
import Battery from "../assets/alerts/Battery.png";
import batteryicon from "../assets/alerts/batteryicon.png";
import engineon from "../assets/alerts/engineon.png";
import engineoff from "../assets/alerts/engineoff.png";
import DeviceTampered from "../assets/alerts/DeviceTampered.png";
import HarshBraking from '../assets/alerts/HarshBraking.png';
import RashTurning from "../assets/alerts/RashTurning.png";
import HarshAcceleration from "../assets/alerts/HarshAcceleration.png";
import alertoff from "../assets/alerts/alertoff.png";
import panic from "../assets/alerts/panic.png";
import Cut from "../assets/alerts/Cut.png";
import number from "../assets/alerts/272353.png";

const getAlerts = {
    status: true,
    message: "Get Successfully!",
    result: [
        {
            id: 0,
            name: "Alerts (With in Last 10 Minutes)",
            icon: allalert,
            noofalerts: ""
        },
        {
            id: 1,
            name: "Location Update",
            icon: location_update,
            noofalerts: 1192
        },
        {
            id: 2,
            name: "Location Update (Histroy)",
            icon: Quarnt,
            noofalerts: 106
        },
        {
            id: 3,
            name: "Low Battery",
            icon: Battery,
            noofalerts: 24
        },
        {
            id: 4,
            name: "Low Battery Removed",
            icon: batteryicon,
            noofalerts: 7
        },
        {
            id: 5,
            name: "Ignition On",
            icon: engineon,
            noofalerts: 38
        },
        {
            id: 6,
            name: "Ignition Off",
            icon: engineoff,
            noofalerts: 310
        },
        {
            id: 7,
            name: "Device Tampered",
            icon: DeviceTampered,
            noofalerts: 3564
        },
        {
            id: 8,
            name: "Harsh Braking",
            icon: HarshBraking,
            noofalerts: 9
        },
        {
            id: 9,
            name: "Rash Turning",
            icon: RashTurning,
            noofalerts: 4
        },
        {
            id: 10,
            name: "OHarsh Acceleration",
            icon: HarshAcceleration,
            noofalerts: 34
        },
        {
            id: 11,
            name: "Emergency State On",
            icon: alertoff,
            noofalerts: 242
        },
        {
            id: 12,
            name: "Emergency State Off",
            icon: panic,
            noofalerts: 2
        },
        {
            id: 13,
            name: "Disconnect Main Battery",
            icon: Cut,
            noofalerts: 21
        },
        {
            id: 14,
            name: "Connect to Main Battery",
            icon: number,
            noofalerts: 31
        },
    ],
};

export const Alerts = () => {
    const handleClick = event => {
        var input = document.getElementById("get2");
        var ele = input.getElementsByTagName("a");
        for (let i = 0; i < ele.length; i++) {
            ele[i].classList.remove('active');
        }
        event.currentTarget.classList.toggle('active');
    };

    return (
        <div className="alert-container">
            <div>
                <ul className="alert-items">

                    {getAlerts.result.map(({ id, name, icon, noofalerts }) => {
                        return (
                            <li key={id} >
                                <a className="nav-link" id="get" onClick={handleClick} href={"#"} >
                                    <img alt="Manufacture" src={icon} style={{ height: "30px" }} />
                                    <span style={{ paddingTop: "4px" }}>{name}</span>
                                    <span className="info-box-number"><span style={{ color: "red", paddingTop: "4px", marginLeft: "10px" }}>{noofalerts}</span></span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
                
            </div>
        </div>

        // <div className="row " style={{width: "98%",marginLeft: "10px", marginBottom: "26px"}} >
        // <div>
        //     <ul className="alert-items nav nav-pills ml-auto">

        //         {getAlerts.result.map(({ id, name, icon, noofalerts }) => {
        //             return (
        //                 <li className="row nav-item" key={id} style={{ marginLeft: "1px", marginRight: "1px" }}>
        //                     <a className="nav-link f-0" id="get" onClick={handleClick} href={"#"} >
        //                         <img alt="Manufacture" src={icon} style={{ height: "30px" }} />
        //                         <span style={{ paddingTop: "4px" }}>{name}</span>
        //                         <span className="info-box-number"><span style={{ color: "red", paddingTop: "4px", marginLeft: "10px" }}>{noofalerts}</span></span>
        //                     </a>
        //                 </li>
        //             )
        //         })}
        //     </ul>
            
        // </div>
        // </div>

    )
}

