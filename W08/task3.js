var data = [
    {label:'Apple', value:100},
    {label:'Banana', value:200},
    {label:'Cookie', value:50},
    {label:'Doughnut', value:120},
    {label:'Egg', value:80}
];

var width = 256;
var height = 256;
var radius = Math.min( width, height ) / 2;

var svg = d3.select('#drawing_region')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${width/2}, ${height/2})`);
var color = d3.scaleOrdinal()
  .domain(data)
  .range(d3.schemeSet2);
const pie = d3.pie()
      .value( d => d.value )
      
      
const arc = d3.arc()
      .innerRadius(radius/2)
      .outerRadius(radius);
class PieChart {

    constructor(  data ) {
        
        this.data = data;
        
    }
}
svg.selectAll('pie')
    .data( pie(data) )
    .enter()
    .append('path')
    .append('text')
    .text(d => d.lable) 
    .attr('d', arc)
    .attr('fill', 'black')
    .attr('stroke', 'white')
    .style('stroke-width', '2px');
