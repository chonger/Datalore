d3.json('static/hive.json', function(error,data){
	var nodes=data['nodes'];
	var links=data['links'];
	var width = 720,
    height = 720,
    innerRadius = 180,
    outerRadius = 350;

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

    var pie = d3.layout.pie()
        .sort(null)
        .value(function(d) { return d.value; });

    var arc = d3.svg.arc()
        .outerRadius(innerRadius-100)
        .innerRadius(0);

    var svg2 = svg.append("g");
    
    var piechart = svg2.selectAll(".parc")
        .data(pie([{value:1}]))
        .enter().append("g")
        .attr("class", "parc");

    piechart.append("path")
        .attr("d", arc)
        .style("fill", "white");


    
    var infotext = svg2.append("text")
        .attr("text-anchor","middle");
        
    var selcur = null;
    var seld = null;
    var textrect = null;
    
	svg.selectAll(".axis")
	    .data(d3.range(3))
	  .enter().append("line")
	    .attr("class", "axis")
	    .attr("transform", function(d) { return "rotate(" + degrees(angle(d)) + ")"; })
	    .attr("x1", radius.range()[0])
	    .attr("x2", radius.range()[1]);

	var inscaleL = d3.scale.linear().domain(d3.extent(links,function(d) {return d.count;})).range([0,1])
	var outscaleL = d3.scale.linear().domain([0,1]).range([3,30]);

	svg.selectAll(".link")
	    .data(links)
	  .enter().append("path")
	    .attr("class", "link")
	    .attr("d", d3.hive.link()
	    .angle(function(d) { return angle(d.x); })
	    .radius(function(d) { return radius(d.y); }))
	    // .style("stroke", function(d) { return color("#fff"); })/--effy--/
        .style("stroke", "#fff")
	    // .style("stroke-width", function(d) { return outscaleL(Math.pow(inscaleL(d.count),2))});/--effy--/
        .style("stroke-width","0.5");

	var inscale = d3.scale.linear().domain(d3.extent(nodes,function(d) {return d.sz;})).range([0,1])
	var outscale = d3.scale.linear().domain([0,1]).range([6,24]);
    var outscaleD = d3.scale.linear().domain([0,1]).range([6,20]);
    
	svg.selectAll(".node")
	    .data(nodes)
	  .enter().append("circle")
	    .attr("class", "node")
	    .attr("transform", function(d) { return "rotate(" + degrees(angle(d.x)) + ")"; })
	    .attr("cx", function(d) { return radius(d.y); })
	    .attr("r", function(d){
	    	var factor = .5;

            var os = outscale;
	    	if(d.x == 0){
		    	factor = .3;
	    	}else if(d.x == 1){
	    		factor = .5;
	    	}else if(d.x == 2){
		    	factor = .9;
                os = outscaleD;
	    	};

            

	    	return os(Math.pow(inscale(d.sz),factor));

	    })
        .on("mouseover",function(d) {

                d3.select(this).style("stroke","#fff").style("stroke-width","2");

                if(selcur != null) {

                    var count = 0;
                    
                    var curX = seld.x;
                    var curY = seld.y;

                    if(curX == d.x)
                        return;
                    
                    //is there a link here?

                    links.forEach(function(l) {
                            if(l.source.x == curX && l.source.y == curY &&
                               l.target.x == d.x && l.target.y == d.y) {
                                count = l.count;
                             
                            }
                            if(l.source.x == d.x && l.source.y == d.y &&
                               l.target.x == curX && l.target.y == curY) {
                                count = l.count;
                             
                            }
                        });

                    set_extra_info(d,count);
                    

                } else {
                    set_main_info(d);
                }
            })
        .on("mouseout",function(d) {

                d3.select(this).style("stroke-width","0");

                if(selcur == null) {
                    remove_info();
                } else {
                    remove_extra();
                }
            })
        .on("click",function(d) {

                if(selcur != null) {
                    
                    selcur.style("fill",color("rgba(255,255,255,0.5)"));

                    set_main_info(d);
                    
                    if(seld == d) {
                        svg.selectAll(".link").transition().duration(300)
                            .style("opacity",1.0).style("stroke",color("rgba(255,255,255,0.01)"));
                        selcur = null;
                        return;
                    }
                } 
                selcur = d3.select(this);
                seld = d;
                selcur.style("fill","#f00");

                var curX = d.x;
                var curY = d.y;

                svg.selectAll(".link").transition().duration(300)
                    .style("opacity", function(d) {
                            if ((d.source.x == curX && d.source.y == curY) ||
                                (d.target.x == curX && d.target.y == curY))
                                return 1.0;
                            else
                                return .2;
                        })
                    .style("stroke", function(d) {
                            if ((d.source.x == curX && d.source.y == curY) ||
                                (d.target.x == curX && d.target.y == curY))
                                return "#f00";
                            else
                                return "#ccc";
                        })
                    

            })
	    .style("fill", function(d) { return color('#00f'); });

	function degrees(radians) {
	  return radians / Math.PI * 180 - 90;
	};

    function set_main_info(d) {

        infotext.remove();
        
        infotext = svg2.append("text")
            .attr("text-anchor","middle");

        infotext.append("tspan").attr("x",0).attr("dy",-120).style("fill","white").text(d.name);
        infotext.append("tspan").attr("x",0).attr("dy",120).style("fill","black").text(d.sz);

    }

    function set_extra_info(d,count) {

        var exc = "#f00"
        
        infotext.append("tspan").attr("x",0).attr("dy",120).style("fill",exc).text(d.name).attr("class","extratext");

        console.log(seld.sz-count);
        console.log(seld);
        var newdata = [{'value':seld.sz-count,'color':'white'},{'value':count, 'color':exc}];

        svg2.selectAll(".parc").remove();
        
        var piechart = svg2.selectAll(".parc")
            .data(pie(newdata))
            .enter().append("g")
            .attr("class", "parc");

        piechart.append("path")
            .attr("d", arc)
            .style("fill", function(d) {
                    return d.data.color;
                });

        piechart.append("text")
            .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
            .attr("dy", ".35em")
            .style("text-anchor", "middle")
            .text(function(d) { return d.data.value; });
        

    }

    function remove_extra() {


        
        svg2.selectAll(".parc").remove();
        
        var piechart = svg2.selectAll(".parc")
            .data(pie([{'value':seld.sz}]))
            .enter().append("g")
            .attr("class", "parc");

        piechart.append("path")
            .attr("d", arc)
            .style("fill", 'white');

        set_main_info(seld);
    }

    function remove_info() {
        infotext.selectAll("tspan").remove();

    }
    
    function make_textrect() {
        
        if(textrect)
            textrect.remove();

        var bbox = infotext.node().getBBox();
        var padding = 10;
        textrect = svg.insert("rect", "text")
            .attr("x", bbox.x - padding)
            .attr("y", bbox.y - padding)
            .attr("width", bbox.width + (padding*2))
            .attr("height", bbox.height + (padding*2))
            .style("fill", "#ccc");
    }

    
	});
