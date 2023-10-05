// import React from 'react'

// const SubDashEmegencyAlert = () => {
//   return (
//     <div>SubDashEmegency</div>
//   )
// }

// export default SubDashEmegencyAlert

import React, { useState, useEffect, useRef } from 'react';
import { FaChevronRight, FaSearch } from 'react-icons/fa';
import * as d3 from 'd3';
import { Link } from 'react-router-dom';
import { SiMicrosoftexcel } from 'react-icons/si';
import { MAPLayout } from '../map';

const SubDashEmegencyAlert = () => {
  // State to track whether the alarm is ON or OFF
  const [alarmOn, setAlarmOn] = useState(false);

  // State for input fields
  const [responseStatus, setResponseStatus] = useState('');
  const [dateTimeFrom, setDateTimeFrom] = useState('');
  const [dateTimeTo, setDateTimeTo] = useState('');

  // Function to toggle the alarm state
  const toggleAlarm = () => {
    setAlarmOn(!alarmOn);
  };

  const data = [
    {
      signalId: 1,
      vehicleNo: 'ABC123',
      mobileNo: '1234567890',
      panicData: 'Emergency Alert',
      serverLogDate: '2023-10-01 10:30 AM',
      packetStatus: 'Received',
      sendToNersStatus: 'Sent',
      dateSendToNers: '2023-10-01',
      smsSendToOwnerStatus: 'Sent',
      emergencyStatus: 'Active',
    },
    {
      signalId: 2,
      vehicleNo: 'ABC123',
      mobileNo: '1234567890',
      panicData: 'Emergency Alert',
      serverLogDate: '2023-10-01 10:30 AM',
      packetStatus: 'Received',
      sendToNersStatus: 'Sent',
      dateSendToNers: '2023-10-01',
      smsSendToOwnerStatus: 'Sent',
      emergencyStatus: 'Active',
    },
    {
      signalId: 3,
      vehicleNo: 'ABC123',
      mobileNo: '1234567890',
      panicData: 'Emergency Alert',
      serverLogDate: '2023-10-01 10:30 AM',
      packetStatus: 'Received',
      sendToNersStatus: 'Sent',
      dateSendToNers: '2023-10-01',
      smsSendToOwnerStatus: 'Sent',
      emergencyStatus: 'Active',
    },
    {
      signalId: 4,
      vehicleNo: 'ABC123',
      mobileNo: '1234567890',
      panicData: 'Emergency Alert',
      serverLogDate: '2023-10-01 10:30 AM',
      packetStatus: 'Received',
      sendToNersStatus: 'Sent',
      dateSendToNers: '2023-10-01',
      smsSendToOwnerStatus: 'Sent',
      emergencyStatus: 'Active',
    },
    {
      signalId: 5,
      vehicleNo: 'ABC123',
      mobileNo: '1234567890',
      panicData: 'Emergency Alert',
      serverLogDate: '2023-10-01 10:30 AM',
      packetStatus: 'Received',
      sendToNersStatus: 'Sent',
      dateSendToNers: '2023-10-01',
      smsSendToOwnerStatus: 'Sent',
      emergencyStatus: 'Active',
    },
    {
      signalId: 6,
      vehicleNo: 'ABC123',
      mobileNo: '1234567890',
      panicData: 'Emergency Alert',
      serverLogDate: '2023-10-01 10:30 AM',
      packetStatus: 'Received',
      sendToNersStatus: 'Sent',
      dateSendToNers: '2023-10-01',
      smsSendToOwnerStatus: 'Sent',
      emergencyStatus: 'Active',
    },
    {
      signalId: 7,
      vehicleNo: 'ABC123',
      mobileNo: '1234567890',
      panicData: 'Emergency Alert',
      serverLogDate: '2023-10-01 10:30 AM',
      packetStatus: 'Received',
      sendToNersStatus: 'Sent',
      dateSendToNers: '2023-10-01',
      smsSendToOwnerStatus: 'Sent',
      emergencyStatus: 'Active',
    },
    {
      signalId: 8,
      vehicleNo: 'ABC123',
      mobileNo: '1234567890',
      panicData: 'Emergency Alert',
      serverLogDate: '2023-10-01 10:30 AM',
      packetStatus: 'Received',
      sendToNersStatus: 'Sent',

      dateSendToNers: '2023-10-01',
      smsSendToOwnerStatus: 'Sent',
      emergencyStatus: 'Active',
    },
    {
      signalId: 9,
      vehicleNo: 'ABC123',
      mobileNo: '1234567890',
      panicData: 'Emergency Alert',
      serverLogDate: '2023-10-01 10:30 AM',
      packetStatus: 'Received',
      sendToNersStatus: 'Sent',
      dateSendToNers: '2023-10-01',
      smsSendToOwnerStatus: 'Sent',
      emergencyStatus: 'Active',
    },
    {
      signalId: 10,
      vehicleNo: 'ABC123',
      mobileNo: '1234567890',
      panicData: 'Emergency Alert',
      serverLogDate: '2023-10-01 10:30 AM',
      packetStatus: 'Received',
      sendToNersStatus: 'Sent',
      dateSendToNers: '2023-10-01',
      smsSendToOwnerStatus: 'Sent',
      emergencyStatus: 'Active',
    },
    // Add more data rows as needed
  ];

  // Function to handle the fetch button click
  const handleFetchClick = () => {
    // Perform the fetch operation or any other desired action here
    console.log('Fetching data...');
    console.log('NERS Response Status:', responseStatus);
    console.log('Date and Time From:', dateTimeFrom);
    console.log('Date and Time To:', dateTimeTo);
  };

  const svgRef = useRef(null);

  useEffect(() => {
    // Sample data for two series
    const data1 = [
      { x: 10, y: 20 },
      { x: 20, y: 40 },
      { x: 30, y: 10 },
      { x: 40, y: 30 },
      { x: 50, y: 15 },
    ];

    const data2 = [
      { x: 10, y: 10 },
      { x: 20, y: 30 },
      { x: 30, y: 25 },
      { x: 40, y: 45 },
      { x: 50, y: 5 },
    ];

    // Set up the SVG container
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Create scales for x and y axes
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data1, d => d.x)])
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max([...data1, ...data2], d => d.y)])
      .range([height, 0]);

    // Create lines for both data series
    const line1 = d3.line()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y));

    const line2 = d3.line()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y));

    // Create the SVG container within the useEffect
    const svg = d3.select(svgRef.current);

    // Append paths for the lines to the plot
    svg.append("path")
      .data([data1])
      .attr("class", "line")
      .attr("d", line1)
      .style("fill", "none")
      .style("stroke", "skyblue")
      .style("stroke-width", 2);

    svg.append("path")
      .data([data2])
      .attr("class", "line")
      .attr("d", line2)
      .style("fill", "none")
      .style("stroke", "lightgreen")
      .style("stroke-width", 2);

    // Append circles as point marks
    svg.selectAll(".point")
      .data([...data1, ...data2])
      .enter()
      .append("circle")
      .attr("class", "point")
      .attr("cx", d => xScale(d.x))
      .attr("cy", d => yScale(d.y))
      .attr("r", 4) // Radius of the circle
      .style("fill", "green"); // Color of the circles

    // Create x-axis with tick marks and labels only
    svg.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale).ticks(5)); // Adjust the number of ticks as needed

    // Create y-axis with tick marks and labels only
    // Adjust the number of ticks as needed
  }, []);

  return (
    <div className="sub-dash-emergency">
      <div>
        <button className='Alarm' onClick={toggleAlarm}>
          <FaChevronRight />
          {alarmOn ? ' Alarm OFF' : 'Alarm ON'}
        </button>
      </div>

      <div className='EmergencyAlert-inputs'>
        <div className='emergency-input'>
          <label htmlFor="responseStatus">NERS/ERSS Response Status:</label>
          <input
            type="text"
            id="responseStatus"
            value={responseStatus}
            onChange={(e) => setResponseStatus(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dateTimeFrom">(Date and Time) From:</label>
          <input
            type="text"
            id="dateTimeFrom"
            placeholder='dd-mm-yy  hh:mm'
            value={dateTimeFrom}
            onChange={(e) => setDateTimeFrom(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dateTimeTo"> To:</label>
          <input
            type="text"
            id="dateTimeTo"
            placeholder='dd-mm-yy  hh:mm'
            value={dateTimeTo}
            onChange={(e) => setDateTimeTo(e.target.value)}
          />
        </div>
        <div>
          <button className="fetch-button" onClick={handleFetchClick}>
            <FaSearch /> Fetch
          </button>
        </div>
        <div className="legends">
          <div className="legend">
            <span className="legend-icon legend-success">✓</span>
            <span>Success</span>
          </div>
          <div className="legend">
            <span className="legend-icon legend-failed">✗</span>
            <span>Failed</span>
          </div>
          <div className="legend">
            <span className="legend-icon legend-pending">⏳</span>
            <span>Pending</span>
          </div>
        </div>
      </div>
      <div>
        <table className='emergency-table'>
          <thead>
            <tr>
              <th>SignalId</th>
              <th>VehicleNo</th>
              <th>MobileNo</th>
              <th>Panic Date(As per VLTD)</th>
              <th>ServerLogDate</th>
              <th>PacketStatus</th>
              <th>Sendto NERS Status</th>
              <th>Date(Send to NERS)</th>
              <th>SMS sendtoOwnerStatus</th>
              <th>EmergencyStatus</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.signalId}</td>
                <td>{item.vehicleNo}</td>
                <td>{item.mobileNo}</td>
                <td>{item.panicData}</td>
                <td>{item.serverLogDate}</td>
                <td>{item.packetStatus}</td>
                <td>{item.sendToNersStatus}</td>
                <td>{item.dateSendToNers}</td>
                <td>{item.smsSendToOwnerStatus}</td>
                <td>{item.emergencyStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='emergency-data'>
        <div className="scatter-plot">
          <svg width="600" height="400" ref={svgRef}></svg>
        </div>
        <div className="table-list">
          <div className='excel-emergency'>
            <h3>Total Emergency Alert Vehicle wise details</h3>
            <button >
              Export to excel <SiMicrosoftexcel />
            </button>
          </div>
          <div className="search-bar">
            <div className="left-side-bar">
              <label>Show </label>
              <select>
                <option>5</option>
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <label>enteries</label>
            </div>
            <div className="right-side-bar">
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <table id="customers">
            <tr>
              <th>Vehicle No</th>
              <th>IMEI</th>
              <th>Vendor ID</th>
              <th>Owner Mobile No</th>
              <th>ALert Count</th>

            </tr>
            <tr>

              <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
              <td>174748857</td>
              <td>PNVE</td>
              <td>7678745534</td>
              <td>10</td>



            </tr>
            <tr>

              <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
              <td>174748857</td>
              <td>PNVE</td>
              <td>7678745534</td>
              <td>10</td>

            </tr>
            <tr>
              <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>

              <td>174748857</td>
              <td>PNVE</td>
              <td>7678745534</td>
              <td>10</td>

            </tr>
            <tr>

              <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
              <td>174748857</td>
              <td>PNVE</td>
              <td>7678745534</td>
              <td>10</td>

            </tr>
            <tr>

              <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
              <td>174748857</td>
              <td>PNVE</td>
              <td>7678745534</td>
              <td>10</td>

            </tr>
            <tr>

              <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
              <td>174748857</td>
              <td>PNVE</td>
              <td>7678745534</td>
              <td>10</td>

            </tr>
            <tr>

              <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
              <td>174748857</td>
              <td>PNVE</td>
              <td>7678745534</td>

            </tr>
            <tr>

              <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
              <td>174748857</td>
              <td>PNVE</td>
              <td>7678745534</td>
              <td>10</td>

            </tr>
            <tr>
              <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
              <td>174748857</td>
              <td>PNVE</td>
              <td>7678745534</td>

            </tr>
            <tr>

              <Link to={'/vehicle-track'}><td>GFT646466d</td></Link>
              <td>174748857</td>
              <td>PNVE</td>
              <td>7678745534</td>
              <td>10</td>

            </tr>
          </table>
        </div>
      </div>
    <MAPLayout/>
    </div>
  );
}

export default SubDashEmegencyAlert