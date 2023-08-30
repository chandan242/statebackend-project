import React from "react";
import allalert from "../assets/alerts/allalert.png";
import location_update from "../assets/alerts/location-update.png";
import Quarnt from "../assets/alerts/Quarnt.png";
import Battery from "../assets/alerts/Battery.png";
import batteryicon from "../assets/alerts/batteryicon.png";
import engineon from "../assets/alerts/engineon.png";
import engineoff from "../assets/alerts/engineoff.png";
import DeviceTampered from "../assets/alerts/DeviceTampered.png";
import HarshBraking from "../assets/alerts/HarshBraking.png";
import RashTurning from "../assets/alerts/RashTurning.png";
import HarshAcceleration from "../assets/alerts/HarshAcceleration.png";
import alertoff from "../assets/alerts/alertoff.png";
import panic from "../assets/alerts/panic.png";
import Cut from "../assets/alerts/Cut.png";
import number from "../assets/alerts/272353.png";
import { Link } from "react-router-dom";

const getAlerts = {
  status: true,
  message: "Get Successfully!",
  result: [
    {
      id: 0,
      name: "Alerts (With in Last 10 Minutes)",
      icon: allalert,
      noofalerts: "",
      link:'/sub-dash-alert'
    },
    {
      id: 1,
      name: "Location Update",
      icon: location_update,
      noofalerts: 1192,
      link:'/sub-dash'
    },
    {
      id: 2,
      name: "Location Update (Histroy)",
      icon: Quarnt,
      noofalerts: 106,
      link:'/sub-dash'
    },
    {
      id: 3,
      name: "Low Battery",
      icon: Battery,
      noofalerts: 24,
      link:'/'
    },
    {
      id: 4,
      name: "Battery Removed",
      icon: batteryicon,
      noofalerts: 7,
      link:'/'
    },
    {
      id: 5,
      name: "Ignition On",
      icon: engineon,
      noofalerts: 38,
      link:'/sub-dash-iginition'
    },
    {
      id: 6,
      name: "Ignition Off",
      icon: engineoff,
      noofalerts: 310,
      link:'/sub-dash-iginition'
    },
    {
      id: 7,
      name: "Device Tampered",
      icon: DeviceTampered,
      noofalerts: 3564,
      link:'/'
    },
    {
      id: 8,
      name: "Harsh Braking",
      icon: HarshBraking,
      noofalerts: 9,
      link:'/'
    },
    {
      id: 9,
      name: "Rash Turning",
      icon: RashTurning,
      noofalerts: 4,
      link:'/'
    },
    {
      id: 10,
      name: "OHarsh Acceleration",
      icon: HarshAcceleration,
      noofalerts: 34,
      link:'/'
    },
    {
      id: 11,
      name: "Emergency State On",
      icon: alertoff,
      noofalerts: 242,
      link:'/sub-dash-emergency'
    },
    {
      id: 12,
      name: "Emergency State Off",
      icon: panic,
      noofalerts: 2,
      link:'/sub-dash-emergency'
    },
    {
      id: 13,
      name: "Disconnect Main Battery",
      icon: Cut,
      noofalerts: 21,
      link:'/sub-dash-battery'
    },
    {
      id: 14,
      name: "Connect to Main Battery",
      icon: number,
      noofalerts: 31,
      link:'/sub-dash-battery'
    },
  ],
};

export const Alerts = () => {

  const handleClick = (event) => {
    event.preventDefault();
    var input = document.getElementById("get2");
    var ele = input.getElementsByTagName("a");
    for (let i = 0; i < ele.length; i++) {
      ele[i].classList.remove("active");
    }
    event.currentTarget.classList.toggle("active");
  };

  return (
    <div class="alert-widget-container">
      <div>
        <ul className="alert-widget-ul">
          {getAlerts.result.map(({ id, name, icon, noofalerts, link }) => {
            return (
              <li className="alert-widget-item" key={id}>
                <Link to={link} className="" id="get">
                  <img alt="Manufacture" src={icon}/>
                  <span>{name}</span>
                  <span>
                    <span>{noofalerts}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};