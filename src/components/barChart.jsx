// import * as d3 from "d3"
// import { useRef, useEffect, useState } from "react";

// export const BarChart = (props) => {

//     const width = props.width
//     const height = props.height
//     const data = props.data

//     const ref = useRef();
//     const [chartData, setChartData] = useState(null)

//     useEffect(() => {
//         const svg = d3.select(ref.current)
//             .attr("width", width)
//             .attr("height", height)
//     }, []);


//     useEffect(()=>{
//         if (data !== null){
//             setChartData(data)
//         }
//     },[data])

//     useEffect(()=>{
//         if (chartData !== null){
//             draw()
//         }
//     },[chartData])

//     const draw = () => {
        
//         const svg = d3.select(ref.current);
        
//         var selection = svg.selectAll("segments")
//                             .data(chartData)
//                             .enter().append('g')
//                             .attr("class", "sectors");
       
//         var yScale = d3.scaleLinear()
//                             .domain([0, 50])
//                             .range([0, height]);
        
//         selection.append("rect")
//             .attr("x", (d, i) => i*width/chartData.length)
//             .attr("y", (d) => {return height - yScale(d.value)})
//             .attr("width", width/chartData.length*0.95)
//             .attr("height",(d)=>yScale(d.value))
//             .attr("fill", "blue")
            
//         selection.append("text")
//                     .text((d)=>{return d["value"]})
//                     .attr("x", (d,i)=>i*width/chartData.length + width/chartData.length*.5 )
//                     .attr("y", (d)=>{return height - yScale(d.value)-10})
//                     .attr("text-anchor", "middle")
//                     .style("fill", "black")
//                     .style("font-size", "10px")
        
//         selection.append("text")
//                     .text((d)=>{return d["date"]})
//                     .attr("x", (d,i)=>i*width/chartData.length + width/chartData.length*.5 )
//                     .attr("y", (d)=>{return height -10})
//                     .attr("text-anchor", "middle")
//                     .style("fill", "white")
//                     .style("font-size", "10px")


//     }

//     return (
//         <div className="chart">
//             <svg ref={ref}>
//             </svg>
//         </div>
//     )
// }


import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = () => {
  const chartRef = useRef(null);
  const data = [10, 25, 15, 30, 20];
  const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#C0C0C0', '#90EE90'];

  useEffect(() => {
    // Chart dimensions
    const width = 400;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Create the SVG element
    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Create the scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d, i) => i))
      .range([margin.left, innerWidth + margin.left])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([innerHeight + margin.top, margin.top]);

    // Draw the bars
    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => xScale(i))
      .attr('y', (d) => yScale(d))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => innerHeight + margin.top - yScale(d))
      .attr('fill', (d, i) => colors[i]);

    // Draw the axes
    const xAxis = d3.axisBottom(xScale).tickFormat((d, i) => `Bar ${i + 1}`);
    const yAxis = d3.axisLeft(yScale);

    svg
      .append('g')
      .attr('transform', `translate(${margin.left}, ${innerHeight + margin.top})`)
      .call(xAxis);

    svg
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)
      .call(yAxis);

    return () => {
      // Cleanup on unmount
      d3.select(chartRef.current).selectAll('*').remove();
    };
  }, []);

  return <div className='bar-chart' ref={chartRef}></div>;
};

export default BarChart;
