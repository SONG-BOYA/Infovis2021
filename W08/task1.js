

var data = [
    {label:'Shiga', value:1412916},
    {label:'Kyoto', value:2610353},
    {label:'Osaka', value:3839469},
    {label:'Hyogo', value:5534800},
    {label:'Nara', value:1364316}
];

var width = 256;
var height = 128;
var margin = {top:10, right:10, bottom:20, left:60};

var svg = d3.select('#drawing_region')
    .attr('width', width)
    .attr('height', height);

var chart = svg.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

const inner_width = width - margin.left - margin.right;
const inner_height = height - margin.top - margin.bottom;

// Initialize axis scales
const xscale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([0, inner_width]);

const yscale = d3.scaleBand()
      .domain(data.map(d => d.label))
      .range([0, inner_height])
      .paddingInner(0.1);
class BarChart {

    constructor(  data ) {
        
        this.data = data;
        
    }
}
// Initialize axes
const xaxis = d3.axisBottom( xscale )
      .ticks(5)
      .tickSizeOuter(0);

const yaxis = d3.axisLeft( yscale )
      .tickSizeOuter(0);

// Draw the axis
const xaxis_group = chart.append('g')
      .attr('transform', `translate(0, ${inner_height})`)
      .call( xaxis );

const yaxis_group = chart.append('g')
      .call( yaxis );

// Draw bars
chart.selectAll("rect").data(data).enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", d => yscale(d.label))
    .attr("width", d => xscale(d.value))
    .attr("height", yscale.bandwidth());
