d3.json('static/hive.json', function(error,data){
	var nodes=data['nodes'];
	var links=data['links'];
	var width = 1200,
    height = 1200,
    innerRadius = 300,
    outerRadius = 540;

	var angle = d3.scale.ordinal().domain(d3.range(4)).rangePoints([0, 2 * Math.PI]),
	    radius = d3.scale.linear().range([innerRadius, outerRadius]),
	    color = d3.scale.category10().domain(d3.range(20));

	var svg = d3.select("#chart_1").append("svg")
	    .attr("width", width)
	    .attr("height", height)
	  .append("g")
	    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(.1)rotate(0)");
    
    svg.transition().duration(1000)
        .attrTween("transform", rotTween);

    function rotTween() {
        var i = d3.interpolate(0, 360);
        return function(t) {
            return "translate(" + width / 2 + "," + height / 2 + ")scale(" + (i(t) / 360.0) + ")rotate(" + i(t) + ")";
        };
    }

    var infowidth=350,
        infoheight=350;
    
    var infotext = svg.append("text")
        .attr("text-anchor","middle")
        .attr("dy", ".35em")

    
	svg.selectAll(".axis")
	    .data(d3.range(3))
	  .enter().append("line")
	    .attr("class", "axis")
	    .attr("transform", function(d) { return "rotate(" + degrees(angle(d)) + ")"; })
	    .attr("x1", radius.range()[0])
	    .attr("x2", radius.range()[1]);

	var inscaleL = d3.scale.linear().domain(d3.extent(links,function(d) {return d.count;})).range([0,1])
	var outscaleL = d3.scale.linear().domain([0,1]).range([0.2,14]);

	svg.selectAll(".link")
	    .data(links)
	  .enter().append("path")
	    .attr("class", "link")
	    .attr("d", d3.hive.link()
	    .angle(function(d) { return angle(d.x); })
	    .radius(function(d) { return radius(d.y); }))
	    .style("stroke", function(d) { return color("rgb(245,0,0,0.01)"); })
	    .style("stroke-width", function(d) { return outscaleL(Math.pow(inscaleL(d.count),2))});

	var inscale = d3.scale.linear().domain(d3.extent(nodes,function(d) {return d.sz;})).range([0,1])
	var outscale = d3.scale.linear().domain([0,1]).range([4,30]);

	svg.selectAll(".node")
	    .data(nodes)
	  .enter().append("circle")
	    .attr("class", "node")
	    .attr("transform", function(d) { return "rotate(" + degrees(angle(d.x)) + ")"; })
	    .attr("cx", function(d) { return radius(d.y); })
	    .attr("r", function(d){
	    	var factor = .5;
	    	
	    	if(d.x == 0){
		    	factor = .4;
	    	}else if(d.x == 1){
	    		factor = .2;
	    	}else if(d.x == 2){
		    	factor = .1;	
	    	};

	    	return outscale(Math.pow(inscale(d.sz),factor));

	    })
        .on("mouseover",function(d) {
                infotext.text(d.name + "\n" + d.sz);
            })
	    .style("fill", function(d) { return color('#00f'); });

	function degrees(radians) {
	  return radians / Math.PI * 180 - 90;
	};

	});
