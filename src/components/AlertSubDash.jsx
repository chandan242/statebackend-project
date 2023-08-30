import React from 'react'
import {MdOutlineGpsFixed} from 'react-icons/md'
import {CiGps} from 'react-icons/ci'
import {GiNetworkBars} from 'react-icons/gi'
import {PiEngine} from 'react-icons/pi'
import {BsBatteryFull} from 'react-icons/bs'
import {ImLocation} from 'react-icons/im'
import {MdOutlineSpatialTracking} from 'react-icons/md'
import { Link } from 'react-router-dom'


const AlertSubDash = () => {
  return (
    <div>
        <div className="table-list">
            <h3>Decice/Vehicle Details(Over Speed)<span style={{color:"red",fontSize:"13px"}}>Alerts Based(Data Received within 10 min)</span></h3>
            <table id="customers">
                <tr>
                    <th>Sr.No.</th>
                    <th>IMEI</th>
                    <th>Vehicle No</th>
                    <th>Owner Mobile No</th>
                    <th>VLTD Date & Time</th>
                    <th>Server Date & Time</th>
                    <th>Speed(km/h)</th>
                    <th>GSM</th>
                    <th>GPS</th>
                    <th>Engine</th>
                    <th>Bateery</th>
                    <th>Current Location</th>
                    <th>Live LOcation</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>174748857</td>
                    <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                    <td>7678745534</td>
                    <td>25/08/2023</td>
                    <td>25/08/2023</td>
                    <td>65.3</td>
                    <td><GiNetworkBars fill='#3eaff0'/></td>
                    <td><MdOutlineGpsFixed fill='#3ef0d5'/></td>
                    <td><PiEngine fill='yellowgreen'/></td>
                    <td><BsBatteryFull fill='green'/></td>
                    <td><ImLocation fill='green'/></td>
                    <td><MdOutlineSpatialTracking fill='red'/></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>174748857</td>
                    <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                    <td>7678745534</td>
                    <td>25/08/2023</td>
                    <td>25/08/2023</td>
                    <td>65.3</td>
                    <td><GiNetworkBars fill='#3eaff0'/></td>
                    <td><MdOutlineGpsFixed fill='#3ef0d5'/></td>
                    <td><PiEngine fill='yellowgreen'/></td>
                    <td><BsBatteryFull fill='green'/></td>
                    <td><ImLocation fill='green'/></td>
                    <td><MdOutlineSpatialTracking fill='red'/></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>174748857</td>
                    <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                    <td>7678745534</td>
                    <td>25/08/2023</td>
                    <td>25/08/2023</td>
                    <td>65.3</td>
                    <td><GiNetworkBars fill='#3eaff0'/></td>
                    <td><MdOutlineGpsFixed fill='#3ef0d5'/></td>
                    <td><PiEngine fill='yellowgreen'/></td>
                    <td><BsBatteryFull fill='green'/></td>
                    <td><ImLocation fill='green'/></td>
                    <td><MdOutlineSpatialTracking fill='red'/></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>174748857</td>
                    <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                    <td>7678745534</td>
                    <td>25/08/2023</td>
                    <td>25/08/2023</td>
                    <td>65.3</td>
                    <td><GiNetworkBars fill='#3eaff0'/></td>
                    <td><MdOutlineGpsFixed fill='#3ef0d5'/></td>
                    <td><PiEngine fill='yellowgreen'/></td>
                    <td><BsBatteryFull fill='green'/></td>
                    <td><ImLocation fill='green'/></td>
                    <td><MdOutlineSpatialTracking fill='red'/></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>174748857</td>
                    <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                    <td>7678745534</td>
                    <td>25/08/2023</td>
                    <td>25/08/2023</td>
                    <td>65.3</td>
                    <td><GiNetworkBars fill='#3eaff0'/></td>
                    <td><MdOutlineGpsFixed fill='#3ef0d5'/></td>
                    <td><PiEngine fill='yellowgreen'/></td>
                    <td><BsBatteryFull fill='green'/></td>
                    <td><ImLocation fill='green'/></td>
                    <td><MdOutlineSpatialTracking fill='red'/></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>174748857</td>
                    <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                    <td>7678745534</td>
                    <td>25/08/2023</td>
                    <td>25/08/2023</td>
                    <td>65.3</td>
                    <td><GiNetworkBars fill='#3eaff0'/></td>
                    <td><MdOutlineGpsFixed fill='#3ef0d5'/></td>
                    <td><PiEngine fill='yellowgreen'/></td>
                    <td><BsBatteryFull fill='green'/></td>
                    <td><ImLocation fill='green'/></td>
                    <td><MdOutlineSpatialTracking fill='red'/></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>174748857</td>
                    <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                    <td>7678745534</td>
                    <td>25/08/2023</td>
                    <td>25/08/2023</td>
                    <td>65.3</td>
                    <td><GiNetworkBars fill='#3eaff0'/></td>
                    <td><MdOutlineGpsFixed fill='#3ef0d5'/></td>
                    <td><PiEngine fill='yellowgreen'/></td>
                    <td><BsBatteryFull fill='green'/></td>
                    <td><ImLocation fill='green'/></td>
                    <td><MdOutlineSpatialTracking fill='red'/></td>    
                </tr>
                <tr>
                    <td>8</td>
                    <td>174748857</td>
                    <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                    <td>7678745534</td>
                    <td>25/08/2023</td>
                    <td>25/08/2023</td>
                    <td>65.3</td>
                    <td><GiNetworkBars fill='#3eaff0'/></td>
                    <td><MdOutlineGpsFixed fill='#3ef0d5'/></td>
                    <td><PiEngine fill='yellowgreen'/></td>
                    <td><BsBatteryFull fill='green'/></td>
                    <td><ImLocation fill='green'/></td>
                    <td><MdOutlineSpatialTracking fill='red'/></td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>174748857</td>
                    <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                    <td>7678745534</td>
                    <td>25/08/2023</td>
                    <td>25/08/2023</td>
                    <td>65.3</td>
                    <td><GiNetworkBars fill='#3eaff0'/></td>
                    <td><MdOutlineGpsFixed fill='#3ef0d5'/></td>
                    <td><PiEngine fill='yellowgreen'/></td>
                    <td><BsBatteryFull fill='green'/></td>
                    <td><ImLocation fill='green'/></td>
                    <td><MdOutlineSpatialTracking fill='red'/></td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>174748857</td>
                    <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
                    <td>7678745534</td>
                    <td>25/08/2023</td>
                    <td>25/08/2023</td>
                    <td>65.3</td>
                    <td><GiNetworkBars fill='#3eaff0'/></td>
                    <td><MdOutlineGpsFixed fill='#3ef0d5'/></td>
                    <td><PiEngine fill='yellowgreen'/></td>
                    <td><BsBatteryFull fill='green'/></td>
                    <td><ImLocation fill='green'/></td>
                    <td><MdOutlineSpatialTracking fill='red'/></td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default AlertSubDash