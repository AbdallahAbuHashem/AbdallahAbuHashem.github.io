function pushData(clintonHighlighted) {
        var data =[];
        if (clintonHighlighted) {
          data.push({x: 1,y: 1,c: "#4377d8",size: 10,});
          data.push({x: 2,y: 1,c: "#4377d8",size: 15,});
          data.push({x: 3,y: 1,c: "#4377d8",size: 25,});
          data.push({x: 1,y: 2,c: "#008CBA",size: 8,});
          data.push({x: 2,y: 2,c: "#008CBA",size: 13,});
          data.push({x: 3,y: 2,c: "#008CBA",size: 18,});
        } else {
          data.push({x: 1,y: 1,c: "#f44336",size: 32,});
          data.push({x: 2,y: 1,c: "#f44336",size: 44,});
          data.push({x: 3,y: 1,c: "#f44336",size: 51,});
          data.push({x: 1,y: 2,c: "#cc2c6f",size: 3,});
          data.push({x: 2,y: 2,c: "#cc2c6f",size: 5,});
          data.push({x: 3,y: 2,c: "#cc2c6f",size: 2,});
        }
        return data;
      }

      var globalClintonHighlighted = true
      drawChart(!globalClintonHighlighted);
      // function stickColor(id) {
      //   if(id === "clinton") {
      //       if (!clintonHighlighted) clintonHighlighted = true;
      //       document.getElementById("clinton").style.backgroundColor = "#008CBA";
      //       document.getElementById("clinton").style.color = "white";
      //       document.getElementById("trump").style.backgroundColor = "#ffffff00";
      //       document.getElementById("trump").style.color = "black";
      //     } else {
      //     if (clintonHighlighted) clintonHighlighted = false;
      //       document.getElementById("trump").style.backgroundColor = "#f44336";
      //       document.getElementById("trump").style.color = "white";
      //       document.getElementById("clinton").style.backgroundColor = "#ffffff00";
      //       document.getElementById("clinton").style.color = "black";
      //     }
      // }


      function drawChart(clintonHighlighted) {
        if (clintonHighlighted === globalClintonHighlighted) return;
        globalClintonHighlighted = clintonHighlighted;
        var dataset = [
            {
             "label": "Pro-Trump Fake News",
             "img": "trump.png"
            },
            {
             "label": "Pro-Hillary Fake News",
             "img": "hillary.png"
            }];
        d3.select("svg").remove();

        var height = window.innerHeight*0.5;
        var width = d3.select('#wtf').node().offsetWidth*0.5;
        var margin = 40;

        var data = pushData(clintonHighlighted);

        var labelX = 'Knowledge of the reader';
        var labelY = 'Fake News Content';
        var svg = d3.select('.chart')
                    .append('svg')
                    .attr('class', 'chart')
                    .attr("width", width + margin*4)
                    .attr("height", height+margin*3)

                    .append("g")
                    .attr("transform", "translate(" + margin*3 + "," + margin + ")");
        var scaleRange = [16,50];
        if(!clintonHighlighted) {
          scaleRange = [4,102]
        }         
        var x = d3.scale.linear()
                        .rangeRound(1)
                        .domain([0.5, 3.5])
                        .range([0, width]);

        var y = d3.scale.linear()
                        .domain([0.5, 2.5])
                        .range([height, 0]);

        var scale = d3.scale.linear()
                            .domain([d3.min(data, function (d) { return d.size; }), d3.max(data, function (d) { return d.size; })])
                            .range(scaleRange);

        var opacity = d3.scale.linear()
                              .domain([d3.min(data, function (d) { return d.size; }), d3.max(data, function (d) { return d.size; })])
                              .range([1, .3]);
                                        
        var color = d3.scale.category10();

        var xAxis = d3.svg.axis()
                          .scale(x)
                          .tickFormat(function(d){
                              if(d === 1) return "Low Knowledge";
                              if(d === 2) return "Medium Knowledge";
                              if(d === 3) return "High Knowledge";
                              return ""
                          });
        var yAxis = d3.svg.axis()
                           .scale(y)
                           .orient("left")
                           .tickFormat(function(d){
                              
                              return ""
                          });
        
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
               // .attr("transform", "rotate(-90)")
               // .attr("x", 20)
            .attr("y", -10)
            .attr("x", 10)
            .style("font-size", "26px")
            .style("text-anchor", "middle")
            .text(labelY);
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
            .text(labelX);
       
        svg.selectAll("circle")
            .data(data)
            .enter()
            .insert("circle")
            .attr("cx", function (d) { return x(d.x); })
            .attr("cy", function (d) { return y(d.y); })
            .attr("opacity", function (d) { return opacity(d.size); })
            .attr("r", 0)
            .style("fill", function (d) { return d.c; })
            .on("mouseover", function(d) {
              tooltip.text(d.size+"% consumed this fake news");
              tooltip.style("visibility", "visible");
            })
            .on("mousemove", function() {
                return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
            })
            .on("mouseout", function(){return tooltip.style("visibility", "hidden");})
            .transition()
            .delay(function (d, i) { return x(d.x) - y(d.y); })
            .duration(500)
            .attr("r", function (d) { return scale(d.size); })
            .ease("linear");
        var tooltip = d3.select("body")
                        .append("div")
                        .style("position", "absolute")
                        .style("z-index", "10")
                        .style("visibility", "hidden")
                        .style("color", "white")
                        .style("padding", "8px")
                        .style("background-color", "rgba(0, 0, 0, 0.75)")
                        .style("border-radius", "6px")
                        .style("font", "12px sans-serif")
                        .text("tooltip");
        

        svg.select(".axis").selectAll(".tick").each( function(d) {
        var p = d3.select(this);
        console.log(d)
        if (d === 1) {
          p.append("image")
          .attr({"xlink:href": "./trump.png",
                 "width": 100,
                 "height": 100,
                 "transform":"translate(-110, -50)"
                })
          .on("mouseover", function(d) {
              tooltip.text("Pro-Trump Fake News");
              tooltip.style("visibility", "visible");
            })
            .on("mousemove", function() {
                return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
            })
            .on("mouseout", function(){return tooltip.style("visibility", "hidden");});
          return;
        }
        if (d === 2) {
          p.append("image")
          .attr({"xlink:href": "./hillary.png",
                 "width": 100,
                 "height": 100,
                 "transform":"translate(-110, -50)"
                })
          .on("mouseover", function(d) {
              tooltip.text("Pro-Hillary Fake News");
              tooltip.style("visibility", "visible");
            })
            .on("mousemove", function() {
                return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
            })
            .on("mouseout", function(){return tooltip.style("visibility", "hidden");});;
          return;
        }
        p.remove();
      });
      }