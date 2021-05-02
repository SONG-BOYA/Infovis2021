d3.csv("https://SONG-BOYA.github.io/Infovis2021/W04/task1.csv")
.then( data => {
// Convert strings to numbers
data.forEach( d => { d.x = +d.x; d.y = +d.y; });
ShowScatterPlot(data);
})
.catch( error => {
console.log( error );
});
 
function ShowScatterPlot(data) {
var svg = d3.select("body").append("svg");
svg.selectAll("circle")
.data(data)
.enter()
.append("circle")
.attr("cx", d => d.x)
.attr("cy", d => d.y)
.attr("r", d => d.r);

};

const width = 256;
const height = 256;
var svg = d3.select("body").append("svg")
.attr('width', width)
.attr('height', height);

var xscale = d3.scaleLinear()
.domain( [d3.min(data, d => d.x), d3.max(data, d => d.x)] )
.range( [0, width] );
var yscale = d3.scaleLinear()
.domain( [d3.min(data, d => d.y), d3.max(data, d => d.y)] )
.range( [0, height] );

svg.selectAll("circle")
.data(data)
.enter()
.append("circle")
.attr("cx", d => xscale(d.x))
.attr("cy", d => yscale(d.y))
.attr("r", d => d.r);
