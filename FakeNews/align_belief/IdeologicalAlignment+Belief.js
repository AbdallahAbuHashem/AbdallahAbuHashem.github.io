(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"IdeologicalAlignment_Belief_atlas_", frames: [[0,494,340,426],[0,0,384,492]]}
];


// symbols:



(lib.Hillary = function() {
	this.spriteSheet = ss["IdeologicalAlignment_Belief_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Trump = function() {
	this.spriteSheet = ss["IdeologicalAlignment_Belief_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Hillary();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.118,0.118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,40,50.1), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Trump();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.104,0.104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,51.3);


(lib.redbalancesymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,0,1).p("AAlhMQAAAPgLAKQgKAKgOAAQgNAAgLgKQgKgKAAgPQAAgOAKgKQALgKANAAQAOAAAKAKQALAKAAAOgAhegeIC7AAIARCNIjbAAg");
	this.shape.setTransform(16.9,46);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E75BC").s().p("AgYAYQgKgJAAgPQAAgNAKgKQALgLANABQAOgBAKALQALAKAAANQAAAPgLAJQgKAKgOAAQgNAAgLgKg");
	this.shape_1.setTransform(17.1,38.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.5,0,1).p("AAlhMQAAAPgKAKQgKAKgPAAQgNAAgLgKQgKgKAAgPQAAgOAKgKQALgKANAAQAPAAAKAKQAKAKAAAOgAhdgeIC7AAIAQCNIjbAAg");
	this.shape_2.setTransform(118.6,46);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BE1E2D").s().p("AgYAYQgKgJAAgPQAAgNAKgKQALgLANABQAOgBAKALQALAKAAANQAAAPgLAJQgKAKgOAAQgNAAgLgKg");
	this.shape_3.setTransform(118.8,38.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BE1E2D").s().p("AEiFcIAAhmIAxAAIAKgiQACgGAFgDQAGgDAFACQAGACADAFQADAGgBAGIgIAZIEVAAIACgEQADgGAGgBQAGgCAGADQAFADACAGIAAABIAxAAIAABmgArVFcIAAhmIAxAAIAJghQACgGAFgDQAGgDAGABQAGACADAFQADAGgCAGIgHAZIEWAAIACgEQADgGAGgBQAGgCAFADQAGADABAGIABABIAwAAIAABmgAKCDWQgGgDgBgGIgNgwQgCgGADgGQADgFAGgCQAGgBAGADQAFADACAGIANAwQABAGgDAFQgDAGgGACIgEAAQgEAAgDgCgAl1DWQgFgDgCgGIgNgwQgBgGADgGQADgFAGgCQAGgBAFADQAGADABAGIANAwQACAGgDAFQgDAGgGACIgEAAQgEAAgEgCgAqCC3QgGgBgDgGQgDgFABgGIAOgwQACgGAGgDQAFgDAGACQAGABADAGQADAFgCAGIgOAwQgCAGgFADQgDACgEAAIgEgBgAF0C3QgGgCgDgFQgDgGACgGIAOgwQACgGAFgDQAGgDAFACQAGACADAFQADAGgBAGIgOAwQgCAGgFADQgEACgEAAIgEgBgAJoB2QgGgDgBgGIgNgwQgCgGADgGQADgFAGgBQAGgCAGADQAFADACAGIANAwQABAGgDAFQgDAGgGABIgEABQgEAAgDgCgAmPB2QgFgDgCgGIgNgwQgBgGADgGQADgFAGgBQAGgCAFADQAGADABAGIANAwQACAGgDAFQgDAGgGABIgEABQgEAAgEgCgApmBYQgGgCgDgGQgDgFABgGIAOgwQACgGAFgDQAGgDAGABQAGACADAGQADAFgCAGIgOAwQgCAGgFADQgDACgEAAIgEAAgAGQBXQgGgCgDgFQgDgGACgGIAOgwQACgGAFgDQAGgDAFACQAGACADAFQADAGgBAGIgOAwQgCAGgGADQgDACgEAAIgEgBgAmoAWQgGgDgCgGIgNgvQgCgGADgFQADgGAGgCQAGgBAFADQAGADACAGIANAvQACAGgDAFQgDAGgGACIgEAAQgEAAgDgCgAJOAWQgGgDgBgGIgNgvQgCgGADgFQADgGAGgCQAGgBAGADQAFADACAGIANAvQABAGgDAGQgDAFgGACIgEAAQgEAAgDgCgApLgIQgFgBgDgGQgDgFABgGIAOgwQACgGAFgDQAGgDAGABQAGACADAGQADAFgCAGIgOAwQgCAGgFADQgDACgEAAIgFgBgAGsgIQgGgCgDgFQgDgGACgGIAOgwQACgGAFgDQAGgDAFACQAGACADAFQADAGgBAGIgOAwQgCAGgGADQgDACgEAAIgEgBgAnDhJQgFgDgCgGIgOgwQgCgGADgFQADgGAGgCQAGgBAFADQAGADACAGIAOAwQABAGgDAFQgDAGgGACIgEAAQgEAAgDgCgAIzhJQgGgDgBgGIgNgwQgCgGADgGQADgFAGgCQAGgBAGADQAFADACAGIANAwQABAGgDAFQgDAGgGACIgEAAQgEAAgDgCgAovhoQgFgBgEgGQgCgFABgGIAOgwQACgGAFgDQAGgDAGACQAGABADAGQADAFgCAGIgOAwQgCAGgFADQgDACgEAAIgFgBgAHIhoQgGgCgDgFQgDgGACgGIAOgwQACgGAFgDQAGgDAFACQAGACADAFQADAGgBAGIgOAwQgCAGgGADQgDACgEAAIgEgBgAneipQgFgDgCgGIgOgwQgCgGADgFQADgGAGgBQAGgCAFADQAGADACAGIAOAwQABAGgDAFQgDAGgGABIgEABQgEAAgDgCgAIZipQgFgDgCgGIgOgwQgCgGADgGQADgFAGgCQAGgCAGAEQAFADACAGIAOAwQABAGgDAFQgDAGgGABIgEABQgDAAgEgCgAoTjHQgFgCgEgGQgCgFABgGIAKgjQgGgDgFgFQgPgPAAgUQAAgVAPgPIAAAAQAPgOAUgBQAVABAOAOQAHAHAEAHIOfAAQAEgIAGgGIAAAAQAPgOAVgBQAUABAPAOQAPAPAAAVQAAAUgQAPIABgBQgJAKgMAEIgNAEIgKAiQgCAGgGADQgFADgGgCQgGgCgDgFQgDgGACgGIAOgwIABgDQACgEAEgCQAGgDAGACIAEACIAGgCQAFgBADgEIABgBQAGgFAAgIQAAgJgGgGQgGgGgIABQgIgBgGAGIgBAAQgFAGAAAJIAAAPIgMAAIgDAAIAAAGIu1ABIAAgHIgDAAIgMAAIAAgPQAAgJgGgGQgFgGgJABQgIgBgGAGIgBAAQgFAGAAAJQAAAIAGAFQAEAFAFABIAEAAIANACIgCAMIgCASIgDAAIgKAjQgCAGgFADQgDACgEAAIgFAAg");
	this.shape_4.setTransform(67.5,33.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AnxAPIgNgCIgEgBQgFgBgEgEQgGgGAAgHQAAgIAFgGIABgBQAGgFAIAAQAJAAAFAGQAGAGAAAJIAAAOIAMAAQgDAEgEAFQgFAFgHADIgDABgAHlASQgFgFgCgFIAMAAIAAgOQAAgIAFgGIABgBQAGgFAIAAQAIAAAGAGQAGAGAAAIQAAAHgGAGIgBAAQgDAEgFACIgGACIgEgCQgGgCgGADQgEACgCAEIgCgCg");
	this.shape_5.setTransform(67.7,4.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#BE1E2D").ss(3,2,1).p("AIFAQQgEABgFAAQgFAAgFgBQgIgCgHgHQgKgJAAgOAncgQQAAAOgKAJQgFAFgHADQgGACgHAAQgDAAgCAA");
	this.shape_6.setTransform(67.9,5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.redbalancesymbol, new cjs.Rectangle(-5,-1.5,145.2,69.5), null);


(lib.IdeologicalBeliefRed03svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BE1E2D").s().p("AtNa2QgpgDgagfQgbggAEgpQADgjAZgaQAZgZAkgEQArgCAlABQAyAAANgDQAggHAUghQAIgPAdgIQAYgGAcgBQBTgCB2AAIDJAAIA+AAIAAg4IgBjOQAAh5AChWQABgRAKgaIAQgsIAKgiQAGgVAAgOQABu3gByjIAAmQIBwAAIgDA5MAABAm2QAAAPAIAVIAOAkIANAoQAHAXABARQABBEAAFUIAAA6IA5ADIGTAAQAqAAAZALQAgANATAhQAEAHALAFQAKAEAKABQAmACBNgBQAxABAdAaQAeAbAAAsQABAtgeAbQgeAcgzAAI5VAAIgSAAIgggBg");
	this.shape.setTransform(93.7,171.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187.3,343.9);


(lib.IdeologicalBeliefBlue03svg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// IdeologicalBelief-Blue-03.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B75BC").s().p("AtNa2QgpgDgagfQgbggAEgpQADgjAZgaQAZgZAkgEQArgCAlABQAyAAANgDQAggHAUghQAIgPAdgIQAYgGAcgBQBTgCB2AAIDJAAIA+AAIAAg4IgBjOQAAh5AChWQABgRAKgaIAQgsIAKgiQAGgVAAgOQABu3gByjIAAmQIBwAAIgDA5MAABAm2QAAAPAIAVIAOAkIANAoQAHAXABARQABBEAAFUIAAA6IA5ADIGTAAQAqAAAZALQAgANATAhQAEAHALAFQAKAEAKABQAmACBNgBQAxABAdAaQAeAbAAAsQABAtgeAbQgeAcgzAAI5VAAIgSAAIgggBg");
	this.shape.setTransform(93.7,171.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187.3,343.9);


(lib.bluebalancesymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,0,1).p("AAlhMQAAAPgLAKQgKAKgOAAQgNAAgLgKQgKgKAAgPQAAgOAKgKQALgKANAAQAOAAAKAKQALAKAAAOgAhegeIC7AAIARCNIjbAAg");
	this.shape.setTransform(16.9,46);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B75BC").s().p("AgYAYQgKgJAAgPQAAgNAKgKQALgLANABQAOgBAKALQALAKAAANQAAAPgLAJQgKAKgOAAQgNAAgLgKg");
	this.shape_1.setTransform(17.1,38.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.5,0,1).p("AAlhMQAAAPgKAKQgKAKgPAAQgNAAgLgKQgKgKAAgPQAAgOAKgKQALgKANAAQAPAAAKAKQAKAKAAAOgAhdgeIC7AAIAQCNIjbAAg");
	this.shape_2.setTransform(118.6,46);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BE1E2D").s().p("AgYAYQgKgJAAgPQAAgNAKgKQALgLANABQAOgBAKALQALAKAAANQAAAPgLAJQgKAKgOAAQgNAAgLgKg");
	this.shape_3.setTransform(118.8,38.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BE1E2D").s().p("AH7ANQAEACAFgBIgKABgAn7AMIAAAAQAFACAEgBIgKACgAHzgOIAFAAIAGAAIgGADIgFgDgAoDgOIABAAIAGAAIgEACIgDgCg");
	this.shape_4.setTransform(68.3,7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B75BC").s().p("AEiFcIAAhmIAxAAIAKgiQACgGAFgDQAGgDAFACQAGACADAFQADAGgBAGIgIAZIEVAAIACgEQADgGAGgBQAGgCAGADQAFADACAGIAAABIAxAAIAABmgArVFcIAAhmIAxAAIAJghQACgGAFgDQAGgDAGABQAGACADAFQADAGgCAGIgHAZIEWAAIACgEQADgGAGgBQAGgCAFADQAGADABAGIABABIAwAAIAABmgAKCDWQgGgDgBgGIgNgwQgCgGADgGQADgFAGgCQAGgBAGADQAFADACAGIANAwQABAGgDAFQgDAGgGACIgEAAQgEAAgDgCgAl1DWQgFgDgCgGIgNgwQgBgGADgGQADgFAGgCQAGgBAFADQAGADABAGIANAwQACAGgDAFQgDAGgGACIgEAAQgEAAgEgCgAqCC3QgGgBgDgGQgDgFABgGIAOgwQACgGAGgDQAFgDAGACQAGABADAGQADAFgCAGIgOAwQgCAGgFADQgDACgEAAIgEgBgAF0C3QgGgCgDgFQgDgGACgGIAOgwQACgGAFgDQAGgDAFACQAGACADAFQADAGgBAGIgOAwQgCAGgFADQgEACgEAAIgEgBgAJoB2QgGgDgBgGIgNgwQgCgGADgGQADgFAGgBQAGgCAGADQAFADACAGIANAwQABAGgDAFQgDAGgGABIgEABQgEAAgDgCgAmPB2QgFgDgCgGIgNgwQgBgGADgGQADgFAGgBQAGgCAFADQAGADABAGIANAwQACAGgDAFQgDAGgGABIgEABQgEAAgEgCgApmBYQgGgCgDgGQgDgFABgGIAOgwQACgGAFgDQAGgDAGABQAGACADAGQADAFgCAGIgOAwQgCAGgFADQgDACgEAAIgEAAgAGQBXQgGgCgDgFQgDgGACgGIAOgwQACgGAFgDQAGgDAFACQAGACADAFQADAGgBAGIgOAwQgCAGgGADQgDACgEAAIgEgBgAmoAWQgGgDgCgGIgNgvQgCgGADgFQADgGAGgCQAGgBAFADQAGADACAGIANAvQACAGgDAFQgDAGgGACIgEAAQgEAAgDgCgAJOAWQgGgDgBgGIgNgvQgCgGADgFQADgGAGgCQAGgBAGADQAFADACAGIANAvQABAGgDAGQgDAFgGACIgEAAQgEAAgDgCgApLgIQgFgBgDgGQgDgFABgGIAOgwQACgGAFgDQAGgDAGABQAGACADAGQADAFgCAGIgOAwQgCAGgFADQgDACgEAAIgFgBgAGsgIQgGgCgDgFQgDgGACgGIAOgwQACgGAFgDQAGgDAFACQAGACADAFQADAGgBAGIgOAwQgCAGgGADQgDACgEAAIgEgBgAnDhJQgFgDgCgGIgOgwQgCgGADgFQADgGAGgCQAGgBAFADQAGADACAGIAOAwQABAGgDAFQgDAGgGACIgEAAQgEAAgDgCgAIzhJQgGgDgBgGIgNgwQgCgGADgGQADgFAGgCQAGgBAGADQAFADACAGIANAwQABAGgDAFQgDAGgGACIgEAAQgEAAgDgCgAovhoQgFgBgEgGQgCgFABgGIAOgwQACgGAFgDQAGgDAGACQAGABADAGQADAFgCAGIgOAwQgCAGgFADQgDACgEAAIgFgBgAHIhoQgGgCgDgFQgDgGACgGIAOgwQACgGAFgDQAGgDAFACQAGACADAFQADAGgBAGIgOAwQgCAGgGADQgDACgEAAIgEgBgAneipQgFgDgCgGIgOgwQgCgGADgFQADgGAGgBQAGgCAFADQAGADACAGIAOAwQABAGgDAFQgDAGgGABIgEABQgEAAgDgCgAIZipQgFgDgCgGIgOgwQgCgGADgGQADgFAGgCQAGgCAGAEQAFADACAGIAOAwQABAGgDAFQgDAGgGABIgEABQgDAAgEgCgAoTjHQgFgCgEgGQgCgFABgGIAKgjQgGgDgFgFQgPgPAAgUQAAgVAPgPIAAAAQAPgOAUgBQAVABAOAOQAHAHAEAHIOfAAQAEgHAGgHIAAAAQAMgMAQgCIgBAAIAJgBIAIABIAAAAQAPACAMAMQAPAPAAAVQAAAUgQAPIABgBQgJAKgMAEIAAAAIgBAAIgBAAQgFABgFgCIgBACIgKAlQgCAGgGADQgFADgGgCQgGgCgDgFQgDgGACgGIAKgkIgIgGQgGgGgDgHIuhAAQgDAGgGAGIgBABQgHAHgJAEIgCABQgFABgFgCIAAAAIgBADIgLAlQgCAGgFADQgDACgEAAIgFAAgAHyk3IgBAAIgCADQAEAFAAAHQAAAGgEAFIACACQAEAEAFACIABAAIAFADIAFgDIAAAAIABAAQAEgCADgDIABgBQAGgFAAgIQAAgJgGgGQgFgEgFgBIgEAAIgEAAIAAAAQgGABgEAEgAoJk3IgBAAQgFAGAAAJQAAAIAGAFQAEAEAFACIADAAIABAAIAAAAIAEACIADgCIACgBQADgBADgDIAAgBIADgCQgEgFAAgGQAAgHAEgFIgDgDQgFgGgJABIAAAAQgIAAgGAFg");
	this.shape_5.setTransform(67.5,33.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("An9AUIgBAAIAAAAIgBAAIgDgBQgFgBgEgEQgGgGAAgIQAAgHAFgGIABgBQAGgFAIAAQAJAAAFAGIADADQgEAFAAAFQAAAHAEAFIgDACIAAAAQgDADgDABIgCABIgFABIgBAAgAH5AUIgBAAQgFgCgEgEIgCgCQAEgFAAgHQAAgFgEgGIACgCIABgBQAEgEAGgBIAAAAIAEAAIAEAAQAFABAFAFQAGAGAAAHQAAAIgGAGIgBAAQgDAEgEABIgBABIAAAAIgFAAIgFAAg");
	this.shape_6.setTransform(67.7,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bluebalancesymbol, new cjs.Rectangle(-5,-1.6,145.2,69.7), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(20,25.6,1,1,0,0,0,20,25.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:1.1},0).wait(1).to({rotation:2.1,y:25.7},0).wait(1).to({rotation:3.2,y:25.6},0).wait(1).to({rotation:4.3,y:25.7},0).wait(1).to({rotation:5.4,y:25.6},0).wait(1).to({rotation:6.4,y:25.7},0).wait(1).to({rotation:7.5},0).wait(1).to({rotation:8.6},0).wait(1).to({rotation:9.6},0).wait(1).to({rotation:10.7,y:25.6},0).wait(1).to({rotation:11.8,y:25.7},0).wait(1).to({rotation:12.9,y:25.6},0).wait(1).to({rotation:13.9},0).wait(1).to({rotation:15,y:25.7},0).wait(1).to({rotation:14},0).wait(1).to({rotation:13},0).wait(1).to({rotation:12},0).wait(1).to({rotation:11},0).wait(1).to({rotation:9.9,y:25.6},0).wait(1).to({rotation:8.9,y:25.7},0).wait(1).to({rotation:7.9,y:25.6},0).wait(1).to({rotation:6.9},0).wait(1).to({rotation:5.9},0).wait(1).to({rotation:4.9},0).wait(1).to({rotation:3.9,y:25.7},0).wait(1).to({rotation:2.9,y:25.6},0).wait(1).to({rotation:1.8,y:25.7},0).wait(1).to({rotation:0.8},0).wait(1).to({rotation:-0.2,x:20.1,y:25.6},0).wait(1).to({rotation:-0.7},0).wait(1).to({rotation:-1.2,x:20},0).wait(1).to({rotation:-1.7,x:20.1},0).wait(1).to({rotation:-2.2,x:20},0).wait(1).to({rotation:-2.7,x:20.1},0).wait(1).to({rotation:-3.1,x:20},0).wait(1).to({rotation:-3.6,x:20.1},0).wait(1).to({rotation:-4.1},0).wait(1).to({rotation:-4.6,x:20},0).wait(1).to({rotation:-5.1},0).wait(1).to({rotation:-5.6},0).wait(1).to({rotation:-6.1,x:20.1},0).wait(1).to({rotation:-6.6,x:20},0).wait(1).to({rotation:-7.1},0).wait(1).to({rotation:-7.6},0).wait(1).to({rotation:-7.1},0).wait(1).to({rotation:-6.6},0).wait(1).to({rotation:-6.1},0).wait(1).to({rotation:-5.6,x:20.1},0).wait(1).to({rotation:-5.1,x:20},0).wait(1).to({rotation:-4.6,x:20.1},0).wait(1).to({rotation:-4.1,x:20},0).wait(1).to({rotation:-3.6,x:20.1},0).wait(1).to({rotation:-3,x:20},0).wait(1).to({rotation:-2.5,x:20.1},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:-1.5},0).wait(1).to({rotation:-1,x:20},0).wait(1).to({rotation:-0.5,x:20.1},0).wait(1).to({rotation:0,x:20},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,51.3);


(lib.ClintonSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(20,25.1,1,1,0,0,0,20,25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:25,rotation:-1.1,y:25},0).wait(1).to({rotation:-2.2,x:20.1},0).wait(1).to({rotation:-3.3,x:20},0).wait(1).to({rotation:-4.3,x:20.1},0).wait(1).to({rotation:-5.4,x:20},0).wait(1).to({rotation:-6.5},0).wait(1).to({rotation:-7.6},0).wait(1).to({rotation:-8.7},0).wait(1).to({rotation:-9.8},0).wait(1).to({rotation:-10.8},0).wait(1).to({rotation:-11.9},0).wait(1).to({rotation:-13,x:20.1},0).wait(1).to({rotation:-14.1},0).wait(1).to({rotation:-15.2,x:20},0).wait(1).to({rotation:-14.2},0).wait(1).to({rotation:-13.2},0).wait(1).to({rotation:-12.2},0).wait(1).to({rotation:-11.2},0).wait(1).to({rotation:-10.2},0).wait(1).to({rotation:-9.2,x:20.1},0).wait(1).to({rotation:-8.2,x:20},0).wait(1).to({rotation:-7.2},0).wait(1).to({rotation:-6.2,x:20.1},0).wait(1).to({rotation:-5.2,x:20},0).wait(1).to({rotation:-4.2},0).wait(1).to({rotation:-3.2},0).wait(1).to({rotation:-2.2,x:20.1},0).wait(1).to({rotation:-1.2,x:20},0).wait(1).to({rotation:-0.2,x:20.1},0).wait(1).to({rotation:0.3,x:20},0).wait(1).to({rotation:0.8,y:25.1},0).wait(1).to({rotation:1.4,y:25},0).wait(1).to({rotation:1.9,y:25.1},0).wait(1).to({rotation:2.4},0).wait(1).to({rotation:2.9,y:25},0).wait(1).to({rotation:3.4,y:25.1},0).wait(1).to({rotation:3.9,y:25},0).wait(1).to({rotation:4.4,y:25.1},0).wait(1).to({rotation:4.9,y:25},0).wait(1).to({rotation:5.4,y:25.1},0).wait(1).to({rotation:5.9,y:25},0).wait(1).to({rotation:6.5,y:25.1},0).wait(1).to({rotation:7,y:25},0).wait(1).to({rotation:7.5,y:25.1},0).wait(1).to({rotation:7},0).wait(1).to({rotation:6.5},0).wait(1).to({rotation:6},0).wait(1).to({rotation:5.5},0).wait(1).to({rotation:5},0).wait(1).to({rotation:4.5,y:25},0).wait(1).to({rotation:4,y:25.1},0).wait(1).to({rotation:3.5,y:25},0).wait(1).to({rotation:3},0).wait(1).to({rotation:2.5,y:25.1},0).wait(1).to({rotation:2},0).wait(1).to({rotation:1.5,y:25},0).wait(1).to({rotation:1,y:25.1},0).wait(1).to({rotation:0.5,y:25},0).wait(1).to({rotation:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,50.1);


(lib.TrumpSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-40,-1.8,1,1,0,0,0,20,25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-27.5,40,51.3);


// stage content:
(lib.IdeologicalAlignmentBelief = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 17.2 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_36 = new cjs.Graphics().p("AgxBoIAAjPIBjAAIAADPg");
	var mask_graphics_37 = new cjs.Graphics().p("AhJBoIAAjPICTAAIAADPg");
	var mask_graphics_38 = new cjs.Graphics().p("AhiBoIAAjPIDEAAIAADPg");
	var mask_graphics_39 = new cjs.Graphics().p("Ah6BoIAAjPID0AAIAADPg");
	var mask_graphics_40 = new cjs.Graphics().p("AiSBoIAAjPIElAAIAADPg");
	var mask_graphics_41 = new cjs.Graphics().p("AiqBoIAAjPIFVAAIAADPg");
	var mask_graphics_42 = new cjs.Graphics().p("AjDBoIAAjPIGHAAIAADPg");
	var mask_graphics_43 = new cjs.Graphics().p("AjaBoIAAjPIG1AAIAADPg");
	var mask_graphics_44 = new cjs.Graphics().p("AjzBoIAAjPIHnAAIAADPg");
	var mask_graphics_45 = new cjs.Graphics().p("AkLBoIAAjPIIXAAIAADPg");
	var mask_graphics_46 = new cjs.Graphics().p("AkjBoIAAjPIJIAAIAADPg");
	var mask_graphics_47 = new cjs.Graphics().p("Ak8BoIAAjPIJ5AAIAADPg");
	var mask_graphics_48 = new cjs.Graphics().p("AlUBoIAAjPIKpAAIAADPg");
	var mask_graphics_49 = new cjs.Graphics().p("AlsBoIAAjPILZAAIAADPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(36).to({graphics:mask_graphics_36,x:148,y:35.6}).wait(1).to({graphics:mask_graphics_37,x:150.4,y:35.6}).wait(1).to({graphics:mask_graphics_38,x:152.9,y:35.6}).wait(1).to({graphics:mask_graphics_39,x:155.4,y:35.6}).wait(1).to({graphics:mask_graphics_40,x:157.8,y:35.6}).wait(1).to({graphics:mask_graphics_41,x:160.3,y:35.6}).wait(1).to({graphics:mask_graphics_42,x:162.8,y:35.6}).wait(1).to({graphics:mask_graphics_43,x:165.2,y:35.6}).wait(1).to({graphics:mask_graphics_44,x:167.7,y:35.6}).wait(1).to({graphics:mask_graphics_45,x:170.2,y:35.6}).wait(1).to({graphics:mask_graphics_46,x:172.6,y:35.6}).wait(1).to({graphics:mask_graphics_47,x:175.1,y:35.6}).wait(1).to({graphics:mask_graphics_48,x:177.5,y:35.6}).wait(1).to({graphics:mask_graphics_49,x:180,y:35.6}).wait(1));

	// Weight copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgwBNQgDgCgBgFIAFgJIAIgNIALgRIAMgVIAagrIAOgXIAOgWIACAAQAEAAAEAEQAEADAAAEIgYAnIgYAkIgWAlIgTAhIgEABQgEAAgDgCgAAWBGIgIgFQgDgCgCgEIgCgHIAAgFIABgFIABgEIADgDIACgCIgBgDQAAgEADgCQACgDADAAIAKABQAGAAAFADQAGACAEAFQAEAFAAAJQAAAHgDAFQgCAEgEADIgIAFIgIACQgEAAgFgCgAAbAmIgCAFIgBAFQAAAEACACQACACADAAQAFAAACgDIACgFQAAgHgEgDQgEgCgFAAIAAACgAgpgRQgEgBgDgDIgFgHQgCgDAAgFIABgIIADgHIADgEIACgDIgBgDQAAgIAHgBIADAAIAKABQAFABAFADQAFADADAGQADAFAAAIQAAAGgCAFIgGAJQgEADgFADQgFACgFAAIgIgCgAgigzQAAACgDAEQgCADAAAEQAAACACACQADACACAAIAFgBIADgDIABgDIABgDIgBgGIgDgDIgEgCIgFAAIABACg");
	this.shape.setTransform(195.3,35.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAKBCQgCgCAAgEIAAgCIAEgfIAFgbIADgYIADgaIgNAAIgPABIgPAAIgMAAQgFAAgCgCQgCgDAAgEQAAgEADgCIAJgCIAMgBIAPAAIARAAIAPgBQAEAAAEADQAEADAAAHIAAACIgHA3QgDAcgHAgQAAAEgDABIgHACQgDgBgCgCg");
	this.shape_1.setTransform(183.8,35.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgDAOIgFgCIgEgFQgBgDAAgEQgBgHAFgDQAEgEAGABQAIAAACADQAEAFAAAFIAAABIAAABQgBAGgFAEQgDADgFAAg");
	this.shape_2.setTransform(175.7,42.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAJBCQgCgCAAgEIABgMIAAgNIgWABIgQgBIgNgBQgFgBgDgDQgCgDAAgGQAAgFABgEQAFgNAEgRIAEggQAAgEACgBQABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQADAAAEACQAEADAAACIgBAQIgDAQIgDAQIgEANIgBAEQAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAAAIAFABIAHAAIAGAAIAWgBIAAgnIgBgnQAAgDADgCQACgCAEAAIAGACQADABABACIAAAXIABAUIAAATIAAARIALAAIAKgBQACAAACADQACADAAADQAAAEgCACIgHACIgIABIgKABIgBAOIAAAOQgBAEgDABIgGACQgEAAgDgDg");
	this.shape_3.setTransform(166.8,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgGBCQgDgCAAgFIAAgBIABgcIABgeIAAgfIgBgfQAAgCADgCQADgCACAAIAGACQACABABADIABAhIAAAdIgBAdIgBAgQgBAEgCACQgDACgCAAQgDAAgDgDg");
	this.shape_4.setTransform(157.4,35.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgHAqQgDgCAAgFIACgXIgOgBIgOgCQgDAAgCgDQgBgCAAgEQAAgCACgDQABgCAEgBIAbACIgBgeQAAgBADgDQADgCADAAIAFACQACABAAAEIACAOIABAPIAOAAIANgCQACABACADQACAEAAACQAAADgDACIgIADIgLACIgMAAIgBAZQgBADgDACIgFABQgDAAgDgBg");
	this.shape_5.setTransform(148.8,34.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},36).wait(14));

	// Balance chain copy
	this.instance = new lib.redbalancesymbol();
	this.instance.parent = this;
	this.instance.setTransform(121,45,1,1,0,0,0,69.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:67.5,regY:33.2,rotation:0.4,x:118.8,y:78.2},0).wait(1).to({rotation:0.8,x:118.6,y:78.1},0).wait(1).to({rotation:1.2,x:118.3,y:78.2},0).wait(1).to({rotation:1.6,x:118.1,y:78.1},0).wait(1).to({rotation:2,x:117.8},0).wait(1).to({rotation:2.4,x:117.7,y:78},0).wait(1).to({rotation:2.7,x:117.4,y:78.1},0).wait(1).to({rotation:3.1,x:117.2,y:78},0).wait(1).to({rotation:3.5,x:116.9},0).wait(1).to({rotation:3.9,x:116.8,y:77.9},0).wait(1).to({rotation:3.4,x:117.1,y:78},0).wait(1).to({rotation:2.8,x:117.4,y:78.1},0).wait(1).to({rotation:2.2,x:117.7},0).wait(1).to({rotation:1.7,x:118},0).wait(1).to({rotation:1.1,x:118.4,y:78.2},0).wait(1).to({rotation:0.5,x:118.7},0).wait(1).to({rotation:0,x:119},0).wait(1).to({rotation:-0.6,x:119.4},0).wait(1).to({rotation:-1.2,x:119.7,y:78.3},0).wait(1).to({rotation:-1.7,x:120,y:78.2},0).wait(1).to({rotation:-2.3,x:120.4},0).wait(1).to({rotation:-2.9,x:120.6,y:78.3},0).wait(1).to({rotation:-3.4,x:121,y:78.2},0).wait(1).to({rotation:-2.6,x:120.6,y:78.3},0).wait(1).to({rotation:-1.9,x:120.1},0).wait(1).to({rotation:-1.1,x:119.7,y:78.2},0).wait(1).to({rotation:-0.3,x:119.2},0).wait(1).to({rotation:0.5,x:118.8},0).wait(1).to({rotation:1.2,x:118.3,y:78.1},0).wait(1).to({rotation:2,x:117.8},0).wait(1).to({rotation:2.8,x:117.4},0).wait(1).to({rotation:3.6,x:116.9,y:78},0).wait(1).to({rotation:4.4,x:116.5},0).wait(1).to({rotation:5.1,x:116.1,y:77.9},0).wait(1).to({rotation:5.9,x:115.6,y:77.8},0).wait(1).to({rotation:6.7,x:115.2,y:77.7},0).wait(13).to({regX:69.5,regY:0,rotation:6.5,x:121,y:45},0).wait(1));

	// Trump copy
	this.instance_1 = new lib.TrumpSymbol("synched",44);
	this.instance_1.parent = this;
	this.instance_1.setTransform(210.9,66.6,1,1,0,0,0,-40,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// Clinton copy
	this.instance_2 = new lib.ClintonSymbol("synched",44);
	this.instance_2.parent = this;
	this.instance_2.setTransform(24,66.1,1,1,0,0,0,20,25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	// Balance stem copy
	this.instance_3 = new lib.IdeologicalBeliefRed03svg("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(116.6,105.8,0.342,0.342,0,0,0,94.2,171.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

	// 14 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_36 = new cjs.Graphics().p("AgxBoIAAjPIBjAAIAADPg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AhJBoIAAjPICTAAIAADPg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AhhBoIAAjPIDEAAIAADPg");
	var mask_1_graphics_39 = new cjs.Graphics().p("Ah6BoIAAjPID1AAIAADPg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AiSBoIAAjPIElAAIAADPg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AiqBoIAAjPIFVAAIAADPg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AjCBoIAAjPIGFAAIAADPg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AjaBoIAAjPIG2AAIAADPg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AjzBoIAAjPIHnAAIAADPg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AkLBoIAAjPIIXAAIAADPg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AkjBoIAAjPIJHAAIAADPg");
	var mask_1_graphics_47 = new cjs.Graphics().p("Ak7BoIAAjPIJ3AAIAADPg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AlUBoIAAjPIKpAAIAADPg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AlsBoIAAjPILZAAIAADPg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(36).to({graphics:mask_1_graphics_36,x:318,y:35.5}).wait(1).to({graphics:mask_1_graphics_37,x:320.5,y:35.5}).wait(1).to({graphics:mask_1_graphics_38,x:323,y:35.5}).wait(1).to({graphics:mask_1_graphics_39,x:325.5,y:35.5}).wait(1).to({graphics:mask_1_graphics_40,x:328,y:35.5}).wait(1).to({graphics:mask_1_graphics_41,x:330.5,y:35.5}).wait(1).to({graphics:mask_1_graphics_42,x:333,y:35.5}).wait(1).to({graphics:mask_1_graphics_43,x:335.5,y:35.5}).wait(1).to({graphics:mask_1_graphics_44,x:338,y:35.5}).wait(1).to({graphics:mask_1_graphics_45,x:340.5,y:35.5}).wait(1).to({graphics:mask_1_graphics_46,x:343,y:35.5}).wait(1).to({graphics:mask_1_graphics_47,x:345.6,y:35.5}).wait(1).to({graphics:mask_1_graphics_48,x:348,y:35.5}).wait(1).to({graphics:mask_1_graphics_49,x:350.6,y:35.5}).wait(1));

	// Weight
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgwBNQgDgCgBgFIAFgJIAIgNIALgRIAMgVIAagrIAOgXIAOgWIACAAQAEAAAEAEQAEADAAAEIgYAnIgYAkIgWAlIgTAhIgEABQgEAAgDgCgAAWBGIgIgFQgDgCgCgEIgCgHIAAgFIABgFIABgEIADgDIACgCIgBgDQAAgEADgCQACgDADAAIAKABQAGAAAFADQAGACAEAFQAEAFAAAJQAAAHgDAFQgCAEgEADIgIAFIgIACQgEAAgFgCgAAbAmIgCAFIgBAFQAAAEACACQACACADAAQAFAAACgDIACgFQAAgHgEgDQgEgCgFAAIAAACgAgpgRQgEgBgDgDIgFgHQgCgDAAgFIABgIIADgHIADgEIACgDIgBgDQAAgIAHgBIADAAIAKABQAFABAFADQAFADADAGQADAFAAAIQAAAGgCAFIgGAJQgEADgFADQgFACgFAAIgIgCgAgigzQAAACgDAEQgCADAAAEQAAACACACQADACACAAIAFgBIADgDIABgDIABgDIgBgGIgDgDIgEgCIgFAAIABACg");
	this.shape_6.setTransform(364.8,35.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgnA9QgCgEAAgEIAAgEIAXgZIALgLIAKgNQAFgGADgGQADgHAAgJQAAgJgHgGQgHgFgHAAQgHAAgGAEQgGAFgEAJQgBADgEAAQgEAAgDgCQgEgCAAgEIABgCQAGgPAKgFQALgHAMAAIAMACQAHABAGAFQAGADAEAIQADAHAAALQABAGgCAGIgEALIgHAJIgIAKIgNAPIgSATIAQAAIAOgBIAdgBQAEABABADIACAEQgBAEgBACQgCADgEgBIgkABIgjAAQgEABgDgEg");
	this.shape_7.setTransform(352.5,35.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgDAOIgFgCIgEgFQgCgDABgEQgBgHAFgDQAEgEAHABQAGAAAEADQACAFAAAFIAAABIAAABQAAAGgFAEQgDADgFAAg");
	this.shape_8.setTransform(343.7,42.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAKBCQgCgCAAgEIAAgCIAEgfIAFgbIADgYIADgaIgNAAIgPABIgPAAIgMAAQgFAAgCgCQgCgDAAgEQAAgEADgCIAJgCIAMgBIAPAAIARAAIAPgBQAEAAAEADQAEADAAAHIAAACIgHA3QgDAcgHAgQAAAEgDABIgHACQgDgBgCgCg");
	this.shape_9.setTransform(335.9,35.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgGBCQgDgCAAgFIAAgBIABgcIABgeIAAgfIgBgfQAAgCADgCQADgCACAAIAGACQACABABADIABAhIAAAdIgBAdIgBAgQgBAEgCACQgDACgCAAQgDAAgDgDg");
	this.shape_10.setTransform(327.9,35.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgHAqQgDgCAAgFIACgXIgOgBIgOgCQgDAAgCgDQgBgCAAgEQAAgCACgDQABgCAEgBIAbACIgBgeQAAgBADgDQADgCADAAIAFACQACABAAAEIACAOIABAPIAOAAIANgCQACABACADQACAEAAACQAAADgDACIgIADIgLACIgMAAIgBAZQgBADgDACIgFABQgDAAgDgBg");
	this.shape_11.setTransform(319.3,34.6);

	var maskedShapeInstanceList = [this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},36).wait(14));

	// Balance chain
	this.instance_4 = new lib.bluebalancesymbol();
	this.instance_4.parent = this;
	this.instance_4.setTransform(389.9,47.1,1,1,0,0,0,66.3,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:67.5,regY:33.2,rotation:-0.4,x:391.3,y:78.2},0).wait(1).to({rotation:-0.9,x:391.6},0).wait(1).to({rotation:-1.3,x:391.8},0).wait(1).to({rotation:-1.8,x:392,y:78.1},0).wait(1).to({rotation:-2.2,x:392.3,y:78.2},0).wait(1).to({rotation:-2.6,x:392.6,y:78.1},0).wait(1).to({rotation:-3.1,x:392.8},0).wait(1).to({rotation:-3.5,x:393},0).wait(1).to({rotation:-4,x:393.3,y:78},0).wait(1).to({rotation:-4.4,x:393.5},0).wait(1).to({rotation:-3.7,x:393.1,y:78.1},0).wait(1).to({rotation:-3,x:392.7},0).wait(1).to({rotation:-2.2,x:392.3},0).wait(1).to({rotation:-1.5,x:392,y:78.2},0).wait(1).to({rotation:-0.8,x:391.5},0).wait(1).to({rotation:-0.1,x:391.1},0).wait(1).to({rotation:0.6,x:390.8},0).wait(1).to({rotation:1.4,x:390.4},0).wait(1).to({rotation:2.1,x:390},0).wait(1).to({rotation:2.8,x:389.6},0).wait(1).to({rotation:3.5,x:389.2},0).wait(1).to({rotation:4.2,x:388.8},0).wait(1).to({rotation:5,x:388.4},0).wait(1).to({rotation:4.5,x:388.7},0).wait(1).to({rotation:4.1,x:388.9},0).wait(1).to({rotation:3.6,x:389.1},0).wait(1).to({rotation:3.2,x:389.4},0).wait(1).to({rotation:2.7,x:389.6},0).wait(1).to({rotation:2.3,x:389.8},0).wait(1).to({rotation:1.9,x:390.1},0).wait(1).to({rotation:1.4,x:390.4},0).wait(1).to({rotation:1,x:390.6},0).wait(1).to({rotation:0.5,x:390.8},0).wait(1).to({rotation:0.1,x:391.1},0).wait(1).to({rotation:-0.4,x:391.3},0).wait(1).to({rotation:-0.8,x:391.5},0).wait(1).to({rotation:-1.3,x:391.8},0).wait(1).to({rotation:-1.8,x:392},0).wait(1).to({rotation:-2.2,x:392.3,y:78.1},0).wait(1).to({rotation:-2.7,x:392.5},0).wait(1).to({rotation:-3.2,x:392.8},0).wait(1).to({rotation:-3.7,x:393},0).wait(1).to({rotation:-4.1,x:393.3,y:78},0).wait(1).to({rotation:-4.6,x:393.6},0).wait(1).to({rotation:-5.1,x:393.9,y:77.9},0).wait(1).to({rotation:-5.6,x:394.1},0).wait(1).to({rotation:-6,x:394.3},0).wait(1).to({rotation:-6.5,x:394.6},0).wait(1).to({rotation:-7,x:394.9,y:77.8},0).wait(1));

	// Trump
	this.instance_5 = new lib.TrumpSymbol("synched",44);
	this.instance_5.parent = this;
	this.instance_5.setTransform(482,65.6,1,1,0,0,0,-40,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50));

	// Clinton
	this.instance_6 = new lib.ClintonSymbol("synched",44);
	this.instance_6.parent = this;
	this.instance_6.setTransform(300.6,66.1,1,1,0,0,0,20,25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50));

	// Balance stem
	this.instance_7 = new lib.IdeologicalBeliefBlue03svg("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(390.2,105.8,0.342,0.342,0,0,0,94.2,171.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(261.6,134.1,504.1,127.1);
// library properties:
lib.properties = {
	id: 'A4A3109511D847FAA0CC739F808D36FE',
	width: 521,
	height: 193,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/IdeologicalAlignment_Belief_atlas_.png", id:"IdeologicalAlignment_Belief_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A4A3109511D847FAA0CC739F808D36FE'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;