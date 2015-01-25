
// From http://mkweb.bcgsc.ca/circos/guide/tables/
var matrix = [[0, 112, 212, 130, 178, 182, 40, 64, 0, 196, 14, 4, 92, 82, 156, 8, 54, 46, 4, 28, 0, 0, 0, 28, 0, 0, 0, 0, 36, 16, 16, 0, 12, 4, 0, 0, 0, 56], [112, 0, 132, 26, 0, 30, 0, 88, 0, 12, 20, 8, 24, 0, 8, 0, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 6, 4, 0, 0, 2, 0, 0, 2], [212, 132, 0, 92, 38, 46, 18, 58, 0, 42, 4, 94, 70, 8, 8, 0, 80, 4, 0, 42, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 272, 0, 0, 0, 0, 0, 38], [130, 26, 92, 0, 138, 126, 6, 80, 0, 26, 30, 2, 22, 8, 10, 0, 46, 6, 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 6, 10, 6, 2, 0, 0, 2, 0, 0, 2], [178, 0, 38, 138, 0, 258, 26, 182, 0, 126, 70, 2, 322, 68, 2, 0, 182, 46, 2, 26, 0, 0, 0, 0, 0, 0, 0, 0, 16, 2, 46, 4, 0, 0, 0, 0, 0, 44], [182, 30, 46, 126, 258, 0, 44, 108, 0, 48, 48, 18, 34, 46, 30, 0, 42, 26, 2, 6, 0, 0, 0, 2, 0, 0, 0, 0, 14, 30, 4, 2, 8, 0, 0, 2, 8, 10], [40, 0, 18, 6, 26, 44, 0, 14, 0, 32, 16, 4, 6, 0, 14, 0, 8, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 14], [64, 88, 58, 80, 182, 108, 14, 0, 0, 158, 18, 2, 82, 2, 4, 0, 108, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 4, 6, 0, 0, 0, 0, 0, 66], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [196, 12, 42, 26, 126, 48, 32, 158, 0, 0, 8, 0, 128, 152, 6, 0, 30, 26, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 16, 0, 0, 0, 0, 0, 0, 102], [14, 20, 4, 30, 70, 48, 16, 18, 0, 8, 0, 38, 46, 2, 10, 0, 8, 0, 14, 8, 0, 0, 0, 0, 0, 0, 0, 0, 4, 32, 12, 0, 4, 0, 0, 0, 4, 0], [4, 8, 94, 2, 2, 18, 4, 2, 0, 0, 38, 0, 16, 0, 28, 0, 20, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 36, 0], [92, 24, 70, 22, 322, 34, 6, 82, 0, 128, 46, 16, 0, 118, 0, 0, 228, 2, 0, 4, 0, 0, 0, 2, 0, 0, 0, 0, 6, 30, 72, 20, 0, 0, 0, 0, 4, 14], [82, 0, 8, 8, 68, 46, 0, 2, 0, 152, 2, 0, 118, 0, 2, 12, 6, 44, 0, 20, 0, 0, 0, 0, 2, 0, 0, 0, 4, 2, 6, 2, 0, 0, 0, 0, 0, 28], [156, 8, 8, 10, 2, 30, 14, 4, 0, 6, 10, 28, 0, 2, 0, 0, 2, 4, 6, 0, 0, 0, 0, 8, 0, 0, 0, 0, 10, 80, 0, 0, 0, 0, 0, 0, 0, 2], [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0], [54, 2, 80, 46, 182, 42, 8, 108, 0, 30, 8, 20, 228, 6, 2, 0, 0, 4, 0, 8, 0, 0, 0, 0, 0, 2, 0, 0, 2, 8, 2, 12, 0, 0, 0, 0, 0, 38], [46, 4, 4, 6, 46, 26, 2, 0, 0, 26, 0, 0, 2, 44, 4, 0, 4, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 6, 8, 0, 0, 4, 0, 2, 0, 0, 0], [4, 0, 0, 0, 2, 2, 2, 0, 0, 0, 14, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 2, 0, 2, 0, 0, 0], [28, 0, 42, 58, 26, 6, 2, 4, 0, 4, 8, 2, 4, 20, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0], [0, 0, 16, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [28, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 8, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 6, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [36, 6, 0, 6, 16, 14, 0, 2, 0, 0, 4, 0, 6, 4, 10, 0, 2, 6, 0, 0, 0, 0, 0, 24, 2, 0, 2, 0, 0, 10, 0, 0, 0, 0, 0, 2, 0, 0], [16, 0, 0, 10, 2, 30, 2, 6, 0, 24, 32, 8, 30, 2, 80, 0, 8, 8, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 4, 0, 2], [16, 6, 12, 6, 46, 4, 0, 4, 0, 16, 12, 0, 72, 6, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4], [0, 4, 272, 2, 4, 2, 2, 6, 0, 0, 0, 0, 20, 2, 0, 0, 12, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 2], [12, 0, 0, 0, 0, 8, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 4, 36, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [56, 2, 38, 2, 44, 10, 14, 66, 0, 102, 0, 0, 14, 28, 2, 0, 38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 0, 0, 0, 0, 0, 0]];

var chord = d3.layout.chord()
    .padding(.05)
    .sortSubgroups(d3.descending)
    .matrix(matrix);

var width = 800,
    height = 800,
    innerRadius = Math.min(width, height) * .41,
    outerRadius = innerRadius * 1.1;

var fill = d3.scale.ordinal()
    .domain(d3.range(4))
    .range(["rgba(255, 255, 255 ,0.7)", "rgba(118, 249, 239,0.7)", "rgba(135, 56, 233,0.7)", "rgba(9, 201, 255,0.7)", "rgba(236, 80, 183,0.7)"]);

var svg = d3.select("#chart_2").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

svg.append("g").selectAll("path")
    .data(chord.groups)
  .enter().append("path")
    .style("fill", function(d) { return fill(d.index); })
    .style("stroke", function(d) { return fill(d.index); })
    .attr("d", d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius))
    .on("mouseover", fade(.1))
    .on("mouseout", fade(1));

var ticks = svg.append("g").selectAll("g")
    .data(chord.groups)
  .enter().append("g").selectAll("g")
    .data(groupTicks)
  .enter().append("g")
    .attr("transform", function(d) {
      return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
          + "translate(" + outerRadius + ",0)";
    });

ticks.append("line")
    .attr("x1", 1)
    .attr("y1", 0)
    .attr("x2", 5)
    .attr("y2", 0)
    .style("stroke", "#fff");

ticks.append("text")
    .attr("x", 8)
    .attr("dy", ".35em")
    .attr("fill", "#fff")
    .attr("transform", function(d) { return d.angle > Math.PI ? "rotate(180)translate(-16)" : null; })
    .style("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
    .text(function(d) { return d.label; });

svg.append("g")
    .attr("class", "chord")
  .selectAll("path")
    .data(chord.chords)
  .enter().append("path")
    .attr("d", d3.svg.chord().radius(innerRadius))
    .style("fill", function(d) { return fill(d.target.index); })
    .style("opacity", 1);

// Returns an array of tick angles and labels, given a group.
function groupTicks(d) {
  var k = (d.endAngle - d.startAngle) / d.value;
  return d3.range(0, d.value, 1000).map(function(v, i) {
    return {
      angle: v * k + d.startAngle,
      label: i % 5 ? null : v
    };
  });
}

// Returns an event handler for fading a given chord group.
function fade(opacity) {
  return function(g, i) {
    svg.selectAll(".chord path")
        .filter(function(d) { return d.source.index != i && d.target.index != i; })
      .transition()
        .style("opacity", opacity);
  };
}
