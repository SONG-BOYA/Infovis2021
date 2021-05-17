var data = [
    {x:0, y:100},
    {x:40, y:5},
    {x:120, y:80},
    {x:150, y:30},
    {x:200, y:50}
];
 var config = {
            parent: '#drawing_region',
            width: 256,
            height: 256,
            margin: {top:10, right:10, bottom:20, left:20}
        };
var width = 256;
var height = 128;
var margin = {top:10, right:0, bottom:20, left:0};
const inner_width = width - margin.left - margin.right;
const inner_height = height - margin.top - margin.bottom;

var svg = d3.select('#drawing_region')
    .attr('width', width)
    .attr('height', height);
var chart = svg.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

const line = d3.line()
      .x( d => d.x )
      .y( d => d.y );
const area = d3.area()
       .x( d => d.x )
       .y1( d => d.y )
       .y0( d3.max(data, d => d.y ) + 10 );
svg.append('path')
    .attr('d', line(data))
    .attr('stroke', 'black')
    .attr('fill', 'none');
svg.append('path')
.attr('d', area(data))
.attr('stroke', 'black')
.attr('fill', 'black');
// Initialize axis scales
const xscale = d3.scaleLinear()
      
      .range([0, inner_width]);

const yscale = d3.scaleBand()
      
      .range([0, inner_height])
      .paddingInner(0.1);
class LineChart {

    constructor(  data ) {
        
        this.data = data;
        
    }
}
const scatter_plot = new  LineChart (  data );
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
