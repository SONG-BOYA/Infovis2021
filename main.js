d3.csv("https://SONG-BOYA.github.io/Infovis2021/W04/task1.csv")
.then( data => {
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
