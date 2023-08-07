// import * as d3 from "d3"
// import { useRef, useEffect, useState } from "react";

// export const  DonutChart=(props)=>{

//     const width = props.width
//     const height = props.height
//     const data = props.data

    
//     const ref = useRef(null);
//     const [chartData, setChartData] = useState(null)

//     const innerRadius = Math.min(width,height)*.2
//     const outerRadius = Math.min(width, height)*.4

    
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

        
//         const svg = d3.select(ref.current)
//                         .attr("width", width)
//                         .attr("height", height)
        
//         svg.selectAll("*").remove()

//         const chartGroup = svg.append("g")
//                         .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");            
    
        
//         const createArc = d3.arc()
//                         .innerRadius(innerRadius)
//                         .outerRadius(outerRadius);
        
//         const createPie = d3.pie()
//                         .value(d => d["value"])

//         var data_ready = createPie(chartData)
        
//         var color = ["#00A0B0","#6A4A3C","#CC333F","#EB6841","#EDC951", "#594F4F","#547980","#45ADA8","#9DE0AD","#E5FCC2"]
        
//         const sectors = chartGroup.selectAll('sectors')
//             .data(data_ready)
//             .enter().append('g')
//             .attr("class", "sectors");
            
        
//         sectors.append('path')
//                     .attr('d', createArc)
//                     .attr('fill', (d, index)=>{return color[index]})
//                     .style("opacity", 1)
        
//         sectors.append("text")
//                     .text((d)=>{return d["data"]["entity"] +" - "+ d["data"]["value"]})
//                     .attr("x", (d)=>{return 0.7*(outerRadius+innerRadius)*Math.sin((d["startAngle"]+d["endAngle"])/2)})
//                     .attr("y", (d)=>{return -0.7*(outerRadius+innerRadius)*Math.cos((d["startAngle"]+d["endAngle"])/2)})
//                     .attr("text-anchor", (d)=>{return (d["startAngle"]+d["endAngle"])/2 > 3.14 ? "end" : "start"})
//                     .style("fill", "black")
//                     .style("font-size", `10px`)

//         svg.exit().remove()
//         }

//     return (
//         <div className="chart">
//             <svg ref={ref}>
//             </svg>
//         </div>
        
//     )}


import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const DonutChart = () => {
  const chartRef = useRef(null);
  const data = [30, 40, 50,100,400,2000];
  const colors = ['#E6B0AA', '#AF7AC5', '#7FB3D5','#5DADE2','#48C9B0','#EDBB99'];

  useEffect(() => {
    // Chart dimensions
    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    // Create the SVG element
    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Create the pie layout
    const pie = d3.pie().value((d) => d);

    // Create the arc generator
    const arc = d3.arc().innerRadius(radius * 0.6).outerRadius(radius);

    // Draw the donut chart
    const arcs = svg.selectAll('arc').data(pie(data)).enter().append('g');

    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => colors[i]);

    // Optionally, you can add labels to the chart
    arcs
      .append('text')
      .attr('transform', (d) => `translate(${arc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .text((d) => d.data);

    return () => {
      // Cleanup on unmount
      d3.select(chartRef.current).selectAll('*').remove();
    };
  }, []);

  return <div ref={chartRef}></div>;
};

export default DonutChart;
