drawChart();
var waypoint = new Waypoint({
  element: document.getElementById('chart2'),
  handler: function(direction) {
    if (direction === 'up') return;
    drawChart();
  },
  offset: window.innerHeight*0.8
});
var waypoint = new Waypoint({
  element: document.getElementById('final_loop'),
  handler: function(direction) {
    if (direction === 'up') return;
    document.getElementById("final_loop").innerHTML='<object style="width: 100%; height: 100%; background: #00000000" type="text/html" data="./last_loop/Loop.html" ></object>';
  },
  offset: window.innerHeight*0.8
});
function drawChart() {
  d3.select("svg").remove();
        var height = window.innerHeight*0.55;
        var width = d3.select('#wtf').node().offsetWidth*0.6;
        var margin = 40;

        var svg = d3.select(".chart2")
      .append('svg')
      .attr('class', 'chart')
      .attr("width", width + margin*4)
      .attr("height", height+margin*3)
      .append("g")
      .attr("transform", "translate(" + margin*3 + "," + margin + ")");

    var data = [53,54,54,51,52,53,53,43,49,47.5,46,42,44,42,43,40,43,40,40,33]
    var dataD = [64,59,61,52,65,59,66,59,70,68,66,60,58,59,56,57.5,60,54,55,51]
    var dataR = [41,52,46,47,39,49,44,31,31,32,33,27,36,32,38,26,33,27,32,14]
    var x = d3.scale.linear().domain([0, 19]).range([0, width]);
    var y = d3.scale.linear().domain([0, 100]).range([height, 0]);
    var line = d3.svg.line()
      .interpolate("cardinal")
      .x(function(d,i) {return x(i);})
      .y(function(d) {return y(d);})
        
    var xAxis = d3.svg.axis()
                      .scale(x)
                      .tickFormat(function(d){
                              return (parseInt(d) + 1997)
                          });
    var yAxis = d3.svg.axis()
                       .scale(y)
                       .orient("left");
    
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("y", -20)
        .attr("x", 10)
        .style("font-size", "26px")
        .style("text-anchor", "middle")
        .text("Trust in mainstream media");
        
                            // x axis and label
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append("text")
        .attr("x", width + 20)
        .attr("y", margin + 10)
        .style("text-anchor", "end")
        .style("font-size", "26px")
        .text("Year");

    var path = svg.append("path")
      .attr("d", line(data))
      .attr("stroke", "#5942f4aa")
      .attr("stroke-width", "3")
      .attr("fill", "none");

    var pathD = svg.append("path")
      .attr("d", line(dataD))
      .attr("stroke", "#5584D8aa")
      .attr("stroke-width", "4")
      .attr("fill", "none");

    var pathR = svg.append("path")
      .attr("d", line(dataR))
      .attr("stroke", "#f44336aa")
      .attr("stroke-width", "4")
      .attr("fill", "none");



    var totalLength = path.node().getTotalLength();

    path
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
        .duration(1500)
        .ease("linear")
        .attr("stroke-dashoffset", 0);

    var totalLengthD = pathD.node().getTotalLength();

    pathD
      .attr("stroke-dasharray", totalLengthD + " " + totalLengthD)
      .attr("stroke-dashoffset", totalLengthD)
      .transition()
        .duration(1500)
        .ease("linear")
        .attr("stroke-dashoffset", 0);

    var totalLengthR = pathR.node().getTotalLength();

    pathR
      .attr("stroke-dasharray", totalLengthR + " " + totalLengthR)
      .attr("stroke-dashoffset", totalLengthR)
      .transition()
        .duration(1500)
        .ease("linear")
        .attr("stroke-dashoffset", 0);

    var dotsData = [];
    data.forEach(function (val, i) {
      if (i === 9) return;
      var newPoint = {};
      newPoint.value = val;
      newPoint.year = i;
      newPoint.color = '#5942f4';
      dotsData.push(newPoint);
    });

    dataD.forEach(function (val, i) {
      if (i === 9) return;
      var newPoint = {};
      newPoint.value = val;
      newPoint.year = i;
      newPoint.color = '#5584D8';
      dotsData.push(newPoint);
    });

    dataR.forEach(function (val, i) {
      if (i === 9) return;
      var newPoint = {};
      newPoint.value = val;
      newPoint.year = i;
      newPoint.color = '#f44336';
      dotsData.push(newPoint);
    });

    console.log(dotsData)

    
    // setup x 
    var xValue = function(d) { return d.year;}, // data -> value
        xMap = function(d) { return x(xValue(d));}; // data -> display

    // setup y
    var yValue = function(d) { return d.value;}, // data -> value
        yMap = function(d) { return y(yValue(d));}; // data -> display
// draw dots
    svg.selectAll(".dot")
        .data(dotsData)
      .enter().append("circle")
        .attr("class", "dot")
        .attr("r", 5.5)
        .attr("cx", xMap)
        .attr("cy", yMap)
        .style("fill", function(d) { return d.color;});
}