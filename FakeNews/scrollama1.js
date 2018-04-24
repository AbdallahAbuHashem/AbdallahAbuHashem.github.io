// using d3 for convenience
    var container1 = d3.select('#scroll1');
    var graphic1 = container1.select('.scroll__graphic1');
    var chart1 = graphic1.select('.chartScroll1');
    var text1 = container1.select('.scroll__text1');
    var step1 = text1.selectAll('.step1');

    // initialize the scrollama
    var scroller1 = scrollama();

    // generic window resize listener event
    function handleResize1() {
      // 1. update height of step elements
      var stepHeight = Math.floor(window.innerHeight * 0.52);
      step1.style('height', stepHeight + 'px');

      // 2. update width/height of graphic element
      var bodyWidth = d3.select('#wtf').node().offsetWidth;

      graphic1
        .style('width', bodyWidth + 'px')
        .style('height', window.innerHeight + 'px');

      var chartMargin = 32;
      var textWidth = text1.node().offsetWidth;
      var chartWidth = graphic1.node().offsetWidth - textWidth - chartMargin;

      chart1
        .style('width', chartWidth + 'px')
        .style('height', Math.floor(window.innerHeight / 2) + 'px');


      // 3. tell scrollama to update new element dimensions
      scroller1.resize();
    }

    // scrollama event handlers
    function handleStepEnter1(response) {
      // response = { element, direction, index }

      // add color to current step only
      step1.classed('is-active', function (d, i) {
        return i === response.index;
      })

      // update graphic based on step
      if(response.index === 10 || (response.index === 9 && response.direction === 'up')) {
        return;
      }
      var idx = response.index + 1;
      document.getElementById("chartScroll1").innerHTML='<object style="width: 100%; height: 80%; background: #00000000" type="text/html" data="./animation sequence/A'+idx+'.html" ></object>';
      
    }

    function handleContainerEnter1(response) {
      // response = { direction }

      // sticky the graphic (old school)
      graphic1.classed('is-fixed', true);
      graphic1.classed('is-bottom', false);
    }

    function handleContainerExit1(response) {
      // response = { direction }

      // un-sticky the graphic, and pin to top/bottom of container
      graphic1.classed('is-fixed', false);
      graphic1.classed('is-bottom', response.direction === 'down');
    }

    function handleProgress1(response) {
      console.log(response.progress);
    }

    function init1() {
      // 1. force a resize on load to ensure proper dimensions are sent to scrollama
      handleResize1();

      // 2. setup the scroller passing options
      // this will also initialize trigger observations
      // 3. bind scrollama event handlers (this can be chained like below)
      scroller1.setup({
        container: '#scroll1',
        graphic: '.scroll__graphic1',
        text: '.scroll__text1',
        step: '.scroll__text1 .step1',
        debug: false,
        progress: true,
      })
        .onStepEnter(handleStepEnter1)
        .onContainerEnter(handleContainerEnter1)
        .onContainerExit(handleContainerExit1)
        .onStepProgress(handleProgress1);

      // setup resize event
      window.addEventListener('resize', handleResize1);
    }

    // kick things off
    init1();