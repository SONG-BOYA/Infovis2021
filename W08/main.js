const xscale = d3.scaleLinear()

.domain([0, d3.max(data, d => d.value)])
.range([0, inner_width]);
const yscale = d3.scaleBand()

.domain(data.map(d => d.label))
.range([0, inner_height])
.paddingInner(0.1);
