// using d3 for convenience
    var container = d3.select('#scroll');
    var graphic = container.select('.scroll__graphic');
    var chart = graphic.select('.chartScroll');
    var text = container.select('.scroll__text');
    var step = text.selectAll('.step');

    // initialize the scrollama
    var scroller = scrollama();

    // generic window resize listener event
    function handleResize() {
      // 1. update height of step elements
      var stepHeight = Math.floor(window.innerHeight * 0.65);
      step.style('height', stepHeight + 'px');

      // 2. update width/height of graphic element
      var bodyWidth = d3.select('#wtf').node().offsetWidth;

      graphic
        .style('width', bodyWidth + 'px')
        .style('height', window.innerHeight + 'px');

      var chartMargin = 32;
      var textWidth = text.node().offsetWidth;
      var chartWidth = graphic.node().offsetWidth - textWidth - chartMargin;

      chart
        .style('width', chartWidth + 'px')
        .style('height', Math.floor(window.innerHeight / 2) + 'px');


      // 3. tell scrollama to update new element dimensions
      scroller.resize();
    }

    // scrollama event handlers
    function handleStepEnter(response) {
      // response = { element, direction, index }

      // add color to current step only
      step.classed('is-active', function (d, i) {
        return i === response.index;
      })

      if(response.index === 1 && response.direction === 'up') {
        return;
      }
      // update graphic based on step
      if (response.index === 0) {
        document.getElementById("chartScroll").innerHTML='<object style="width: 100%; height: 80%; background: #00000000" type="text/html" data="./align_belief/IdeologicalAlignment+Belief.html" ></object>';
      }
      if (response.index === 1) {
        document.getElementById("chartScroll").innerHTML='<object style="width: 100%; height: 80%; background: #00000000" type="text/html" data="./init_loop/Loop.html" ></object>';
      }
    }

    function handleContainerEnter(response) {
      // response = { direction }

      // sticky the graphic (old school)
      graphic.classed('is-fixed', true);
      graphic.classed('is-bottom', false);
    }

    function handleContainerExit(response) {
      // response = { direction }

      // un-sticky the graphic, and pin to top/bottom of container
      graphic.classed('is-fixed', false);
      graphic.classed('is-bottom', response.direction === 'down');
    }

    function handleProgress(response) {
      console.log(response.progress);
    }

    function init() {
      // 1. force a resize on load to ensure proper dimensions are sent to scrollama
      handleResize();

      // 2. setup the scroller passing options
      // this will also initialize trigger observations
      // 3. bind scrollama event handlers (this can be chained like below)
      scroller.setup({
        container: '#scroll',
        graphic: '.scroll__graphic',
        text: '.scroll__text',
        step: '.scroll__text .step',
        debug: false,
        progress: true,
      })
        .onStepEnter(handleStepEnter)
        .onContainerEnter(handleContainerEnter)
        .onContainerExit(handleContainerExit)
        .onStepProgress(handleProgress);

      // setup resize event
      window.addEventListener('resize', handleResize);
    }

    // kick things off
    init();