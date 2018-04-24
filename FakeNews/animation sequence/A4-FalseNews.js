(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,303);// helper functions:

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


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(100,183,129,0.8)").s().p("AgCCEQgLgEgGgDIgbgTQgPgKgMgJQgPgMgHgNQgPgVgJgbQgNgtAXgoQAUglAogRQgXALgRAUQgSAVgHAZQgGAZAEAYQAFAZAOASIAAAAIAUAbIgJgOIgGgIQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBgBAAQgOgXgDgcQgDgcAKgaQAKgaAUgTQAVgTAagGIANgEIAJACQAFADABgBQAZgCAZALQASAHAXAQIACAHQAYAfgBAlQAAgRgHgSQgIgVgRgQQgQgPgXgHQgXgGgWADIgSADIgPAFIgOAFQgFACADgFIACgDQgNAIgLATIgEACIgDAGQgIACgFAMQAAgEgBgCIAAAJIgDAMIgCAUQgCACgBAEQgBAEABADIACAJQABAIAFAQQABAPALAJIADADIABAGQAEAGAMAFQAKAPAMAKQABAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIgCgGIAIADIAHAAIAMgCIAMACQAFABAGAAIALAEIAJgCQAEACADAAIAIgEIAJABIAIgFQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQABgCAGgDIAIgFIAMgGIABgCIAIgGIAEgFIALgNIgCAJIgEAKQABABAEgEIAIgHQgEAHABADIADADQABADgKAPQgTAegYAMQgCACgKAAIgRACIgMAFQgGADgGAAIgDAAQgJAAgKgCg");
	this.shape.setTransform(12.4,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(126,197,151,0.698)").s().p("AgeBYQgOgSgFgYQgEgaAGgYQAHgZASgUQARgVAWgLIAOgEIAOgDIAGgBIgNAEQgaAGgUAUQgUASgKAbQgKAZADAcQADAcAOAXg");
	this.shape_1.setTransform(5.7,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7EC597").s().p("AgCAMQgMgKgLgOIAFADIABAEQATAKAaABIgMACIgHAAIgIgDIABAGQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgCgBg");
	this.shape_2.setTransform(8.9,20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(109,188,137,0.8)").s().p("AgGAXIgBgoQAAgDADgCQADgCABADIACARIAGgIIgEAGIAAAKQgCAIgEAHIgEAFIAAgBg");
	this.shape_3.setTransform(25.8,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,26.7,26.9), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(100,183,129,0.8)").s().p("AhNB4QgogWgTgrQAMAZAWATQAXATAbAHQAbAIAbgFQAbgFAUgPQARgMAMgKQgEABgKAJIgJAHQABgBAAAAQAAgBAAABQgBAAgBABQgBABgCABQgaAQgdADQgfADgcgKQgegMgTgVQgVgXgIgdIgEgOIACgKQADgFgBgCQgCgaALgdQAKgUAQgYIAIgDQAmgfAuAFQgYgCgYAKQgYAJgRATQgSAUgHAXQgHAXAEAZIADAWQADALAJAVQACAFgFgDIgEgDQAKAPAUANIACAEIAHADQAAADAFAFQAFAEAGACQgEgBgDACQAFgBAFABIANADIAWADQAIAGAGgDIAKgCQAJgBASgFQARgCAJgMIAFgDIAFgBQAHgFAGgMQASgNAJgNQAAgBABAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQgCAAgDACIACgJIAAgIIgBgNIACgNIACgNQAAgGAEgGIgDgKQACgCAAgGIgBgDIgEgGIABgJIgFgKIACgBIgGgHQgCgFgEgEIgGgNIgCgBIgHgJIgMgLIgIgFIAKADIAKAEQACgBgFgFIgIgIQAIAFADgBIAEgDQACgBARALQAgAWAMAZQACACABAKQABAOACAFIAEAMQADAHABAHQAAAKgDAOQgDAMgEAGIgJAOIgLAPIgUAeQgNAQgPAIQgVARgfAJQgQAFgQAAQgfAAgegQg");
	this.shape.setTransform(14.6,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(126,197,151,0.698)").s().p("AgEAzQgbgGgXgUQgWgSgMgZIgJgdIgBgIIAFAOQAIAdAVAWQASAVAfAMQAbALAfgEQAegDAagPIgCACQgUAPgbAFQgLACgLAAQgRAAgPgFg");
	this.shape_1.setTransform(9.9,22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7EC597").s().p("AgKAXIAFgCQALgUACgdIABANIAAAIIgCAJQADgCACAAQABAAAAAAQABAAAAAAQAAABAAAAQgBABAAABQgJAMgRAOg");
	this.shape_2.setTransform(23,19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(109,188,137,0.8)").s().p("AAGAGIgYAAQgDAAgCgDQgDgDAEgBIAMgBQAGAAABgBIgDgCIALAAQANADAIAIIgMAAIgIAAg");
	this.shape_3.setTransform(15.5,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0.4,29.2,28.6), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(100,183,129,0.8)").s().p("AhHCRQgCACgDAAQgDABgRgMQgigXgOgdQgCgCgBgLIgDgUIgFgOQgDgIAAgGQgBgKADgQQAEgNAEgHIAUghQAIgMAPgUQAPgSAPgJQAZgSAggKQA1gOAxAaQAsAXAVAwQgOgcgYgUQgZgVgegIQgdgIgeAGQgdAFgWAQIgJAGIgIAGIgQAMIAQgLIAKgIIAEgDQAdgRAggDQAigDAfALQAgAMAWAYQAXAZAJAgIACAGIADAKQAAAEgDAGQgCAGABACQACAdgMAgQgKAXgTAbIgIADQgkAdgsABQAUgBAUgIQAbgLATgVQATgVAIgbQAIgbgEgbIgEgZQgBgGgFgMIgHgQQgDgHAGAEIAEADQgKgPgXgQIgCgEIgIgDQgBgEgFgFQgEgDgIgEQAFABACgCIgKAAIgPgEIgYgDQgDgCgFgBQgFgCgDACIgLACQgNABgRAGQgSACgMANIgEADIgGABQgIAHgHAMQgSAOgLAPQgBABAAABQAAABAAAAQAAABAAAAQAAAAABAAQADAAADgDIgDALIAAAIIAAAPIgCAOQgCAJABAGQgCAJgCAEIADALQgDAEAAAFIAGAKIgBALIAGAKQAAABAAAAQgBAAAAAAQAAABAAAAQgBAAAAgBQACACAEAHIAHAJIAHAPIACABIAIAJIAOAMIAJAGIgLgDIgMgFQgBABAFAFIAJAIQgJgEgCABg");
	this.shape.setTransform(16,14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(126,197,151,0.698)").s().p("ABqAzIgCgFQgJghgXgXQgWgZgggLQgegMgiAEQghADgdARIADgDQAWgQAdgFQAfgFAcAIQAeAHAZAVQAYAVAOAaIAGARIAEAQIABAIg");
	this.shape_1.setTransform(21.1,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7EC597").s().p("AgKARIAAgIIADgKQgDACgDAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBABgBQALgPARgOIgEAGIgFACQgNAXgDAgIAAgPg");
	this.shape_2.setTransform(6.5,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(109,188,137,0.8)").s().p("AAIAEIgMAAQgKgCgIgEQgJgGAEABQAJgBAoACQADAAADADQACADgDABIgNABQgIAAgBABIALAFg");
	this.shape_3.setTransform(14.8,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0.1,0,31.9,31.7), null);


(lib.fakeNewsai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(9.9,11);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1A1718").p("AY6ZUMgxzAAAMAAAgynMAxzAAAg");
	this.shape.setTransform(159.9,162.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1718").s().p("A45ZUMAAAgynMAxzAAAMAAAAyng");
	this.shape_1.setTransform(159.9,162.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,320.8,326);


(lib.ArtOnPathBrush_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_1();
	this.instance.parent = this;
	this.instance.setTransform(13.2,13.9,1,1,0,0,0,13.2,13.4);
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ArtOnPathBrush_1, new cjs.Rectangle(0,0.5,26.7,26.9), null);


(lib.ArtOnPathBrush_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_0();
	this.instance.parent = this;
	this.instance.setTransform(15.2,14.7,1,1,0,0,0,14.6,14.7);
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ArtOnPathBrush_0, new cjs.Rectangle(0.6,0.4,29.2,28.6), null);


(lib.ArtOnPathBrush = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(16,15.8,1,1,0,0,0,16,15.8);
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ArtOnPathBrush, new cjs.Rectangle(0.1,0,31.9,31.7), null);


(lib.greenai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ArtOnPathBrush_1();
	this.instance.parent = this;
	this.instance.setTransform(29.9,19.5,1,1,0,0,0,13.2,13.9);

	this.instance_1 = new lib.ArtOnPathBrush_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.9,18.7,1,1,0,0,0,15.2,14.7);

	this.instance_2 = new lib.ArtOnPathBrush();
	this.instance_2.parent = this;
	this.instance_2.setTransform(28.9,17.6,1,1,0,0,0,16,15.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B9447").s().p("AgUCxIgQgDQgJgBgFgDIgBAAQABgBgKgDQgKgCgBgCQgEgDgFgBIgJgDQgBgEgFgCQgKgDgCgCIgOgOIAAACIgOgPIgMgQQgMgTgEgPQABABAAAAQABABAAAAQAAgBgBAAQgBgBgBgBIgCgIIgBAAIgEgHQgDgEABgEQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQgEgJAAgGIAAgsIAAACIABgGIgCABQABgBAAgGQABgGABABIAAABQACABACgKIgCABIABgEIAGgQQACgGAFgGIAAgEQAFgHAFgKQAGgLAGgDIAQgSQAFgHAMgKIANgIQAIgEAEAAIAQgHIAOgGQAAABAAAAQAAAAABAAQAAABABAAQABgBABAAQAGgCABABQAAgBAAAAQAAAAAAgBQABAAABAAQAAAAABAAQAFgBABgBIAAACIASgCIgCABQAAABAGgBIADgCIgBACIADgBIAAABQAIABAAgDIADACQAAAAABAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIAEABQACABAEAAIgDAAIAFABQADABADgBIABgCIgFAAIAJgBIAAABIAFABQABABAAAAQABAAAAAAQABAAAAAAQAAAAABgBIAAACIAEAAQgEACAGACIAFACIgBgDIADADQABABAAAAQABAAAAAAQABAAABAAQAAAAABAAIgBACQABAAAAABQABAAAAAAQABAAAAAAQAAgBABAAIACABIgCAAIAPAFQAIADAEAEIAAABQAFAEAFACIgBgBIAHAEIgBACIAFADIgBAAQAHAHAFACIgBgBIAGgBIADACQABAAAAAAQAAAAABABQAAAAAAAAQABABAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAEADAEACQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAACACAEIAIAIQADADACAEIAAAFQAAAAAAABQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIADAEQAAAAAAAAQABAAAAABQAAAAAAABQABAAAAABIAAAAIAAABQABAEADAEIADAEQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIAAAEIADABIACAOIACARQgBABACAIIABgCIAAATIgBARIABADIgBAAIgCADIgBAQIgBgBIADgdIgCAAIgCAHIACACIgDAUQgCAHABABIAAABIABAAIgHAMIACgGIgEAFIAAAEQABACgFAGIgDADQABABgEAFIgGAIIAIgEIgLASQAAAAAAgBQAAAAgBAAQAAAAAAABQgBAAAAAAIgBADIgDACQgBADADACQABADgUAQQAAAAABAAQAAAAAAAAQAAAAAAAAQgBAAAAABIADgCIgKAGQAAACgFAEIgJAFIgBAAIABgCIgHADQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBABQgBgCgIAEQgKAGgFABIgOADQgLABgCABIAAgBIgHACIABAAIgCAAIAAABIABAAIAAAAQgDgBgEAAIgBAAIgDAAIAEgBIgQgCIgKgDQACgBAOgCIACABIADgBQAAAAABgBQAAAAAAAAQAAAAAAAAQAAgBgBAAQAFABACgCIACgDIAEABIAJgDIACABIAJgFIgGAAIADgBQASgCAIgHIAFgEIgBABIATgPQAKgIAIgMIgGAEQAKgOAHgOIAIgUIAFgLQACgGACgOIAAgUQAAgJgCgLIgDgTQgKgngfgbQgcgZgpgJIABAAIgPgEQgFgBgJABIAAgBIgFAAQgYAAgSAJQgCAAgHACIgKAEQghANgVAdQgXAfgFAjIgCAGIABAAIgCAPIABANQAAAGACAJIABANIADAGQAJAYAKAOQANATAQANQASAQALAGQAVAJAWACQAFAEALAGIAFAKIgWAIg");
	this.shape.setTransform(30.3,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B9447").s().p("AAAAEIAAgHIABAAIgBAIg");
	this.shape_1.setTransform(47.4,21.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B9447").s().p("AEeCMIABgCIgBgDQgBAAAAAAQAAgBAAAAQAAAAgBAAQAAABAAAAQABgFgBgBIgDgDIABgDIgCgJIABgBIgDgJIAAAEIgBgCIABAAIgBgRIgCgJIgDgFIAAABIgHgVQgDgLgHgLIAAAHQgHgPgIgMQgRgXAAgCQgJgOgRgQIgbgYQgGgFgYgRIgRgHQgJgFgHgCIgkgKIgSgEIgSgDIABAAQgTgDgIACIAAgBIgGAAQgbABgLAEIgTACQg8AKg5AwIgFADIACABQgNAJgIAKQgHAJgLAKIgCAGIgVAhIgQAlIgMAfIgFApIgJAQIgKAFIgIgTIABgNQABgLABgDIAAAAQABAAABgJQAAgIACgCQABgDAAgGIABgHQADgCAAgEIgBgFQAAgFADgBIAFgQIgBAAIAPgfQAKgRAIgJQAAAEABgFIAEgGIAAAAIACgHQABgEAEgCQAAABABAAQAAAAAAgBQAAAAABAAQAAgBAAgBQABAAAAAAQAAgBAAAAQAAAAAAAAQAAABAAAAQAGgJALgKIAJgIIAJgMIAAACIAEgEIgDgBQACAAAEgDQAAgBABgBQABAAAAAAQABgBAAAAQAAAAAAABIAAAAQABACAGgGQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIADgDQAEgBAIgHQAIgEADgBIABgDQAFgBAKgIQAJgFAGAAIAJgGIAbgMQAUgGAEABIAOgCQAGgDAHgBQAAABAAAAQAAABAAAAQABAAAAAAQABAAABAAIAGgBQAAAAAAgBQABAAAAAAQAAAAABAAQABgBAAAAQABAAABAAQABAAABAAQAAAAABAAQAAAAAAgBIABACIAPAAIgCAAQAAABABAAQAAAAAAAAQABAAABAAQABAAABgBIACgCIgBACIADAAIgBABQAIABAAgDIADABIABgBIgBgBIAIACIgCABIAEABIAFgBIABgDIgEABIAIgCQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAEAAIADAAIABACIADgBQgDADAFACIAFABIgBgDIACADQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAAABQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAIgCABIANACQAHAAAFAEIAAAAQAFACAEAAIAAAAIAGACIAAABIAFABIgBABQAFADAHABIgBgBQACAAADgEIADAAIADACQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABQAEAAAEAAQgGABAHAGIAJADIAHADIACAEQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABIADABIADACIAAgBIABABIAAAAQACADAEACIAFABQACgCADAGIACgBIATATQAAACAFADIAAgBQAKAMAMALIACABQgBAAAAAAQAAAAAAAAQAAABAAABQABABABABIAJAJIgBABIgRgTIgCABIADAGIADAAQAFAHAHAHQADAEACABIAAAAIAFAKIgEgEIACAFIADACQADABABAGIAAAEQACgBAEAOIABgIIAJAQQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAIACACIABADQACACADgCQADABAFAVIABgBIAAABIAAgDIABALQACAAABAGIADAIQAAAFgCgGIAAAHIABgBIABABIgBAEIAAAFIACAIQABAEAAACIAAANQgBAKABABIgBABIABAFIAAABIABAAIgCAHIABAAIgBACIAAgCIgHAXQgBgCgBgNg");
	this.shape_2.setTransform(29.8,52);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B9447").s().p("AgCgCIABAAIAEAFg");
	this.shape_3.setTransform(54,48.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9DD4B2").s().p("AkABhIADgZIAFgZIAIgYIAHgRQAEgHAGgKQAggsAygcQAvgZA0gHQA0gHAzALQA0AMArAeQAzAhAcAwQAOAaAHAcIgDgKQgMgfgSgXQgSgWgagVQgQgMgIgEIgdgPQgkgOgZgGIgTgEIgrgEIgGAAQgUAAgZAFIgUAFIAEgBIgUAIIgVAKQgzAZgdAaIgNARIgKAKIgJALIgPAaQgPAcgDAjIgBgJIgEAXg");
	this.shape_4.setTransform(29.6,51.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,59.4,67.5);


(lib.FakeNews = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.fakeNewsai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(127.9,130.1,0.803,0.803,0,0,0,159.8,162.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,257.9,262.1);


// stage content:
(lib.A4FalseNews = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Head Green
	this.instance = new lib.greenai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(220.8,203.2,3.121,3.121,0,0,0,29.4,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44));

	// false stamp
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AgEAHIAEgOIAFABIAAACIgFgBIAAAFIADAAIgBACIgDgBIgBAEIAEABIgBACg");
	this.shape.setTransform(451.7,131.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AgBAHIgBAAIgCgBIAAgCIAAgBIAAgBIACABIAAAAIAAACIABAAIABABIAAgBIAAgBIAAAAIABgBIAAgBIgBAAIAAgBIAAgBIgCgBIAAgDIABgBIABgBIAAgBIACAAIACABIAAABIABABIAAACIAAABIgDgBIAAAAIABgCIgCgBIAAABIgBAAIAAABIAAABIAAABIAAAAIAAAAIABABIACABIAAAAIAAACIAAABIgBACIgBABIgBABIgBgBg");
	this.shape_1.setTransform(450.2,131.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AgDAHIAEgOIACAAIgDAMIAEABIgBACg");
	this.shape_2.setTransform(448.7,131);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("AACAHIAAgCIgCgBIgCADIgBgBIAGgNIACAAIgBAPgAAAACIADAAIAAgEg");
	this.shape_3.setTransform(447.2,130.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AgEAHIAEgOIAFACIAAACIgFgBIAAAEIADAAIgBACIgDgBIgBAHg");
	this.shape_4.setTransform(446.1,130.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CC0000").ss(4.4,1,1).p("AgigWIBNAVIgHAZIhOgWgAgggSIBGASIgFATIhHgTg");
	this.shape_5.setTransform(448.9,131.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CC0000").ss(4.4,1,1).p("AjUAMIAjiAIGHBpIgjCAgAjCAAIAbhhIFnBgIgaBig");
	this.shape_6.setTransform(445.2,132.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CC0000").ss(4.4,1,1).p("AleAAIAwiwIKICuIgvCwgAl/AVIA+jnILBC9Ig+Dog");
	this.shape_7.setTransform(441.4,133.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CC0000").ss(4.4,1,1).p("AoqAfIBalOIP7ERIhaFPgAn6ABIBFj/IOpD7IhED/g");
	this.shape_8.setTransform(437.7,134.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#CC0000").ss(4.4,1,1).p("ArUApIB1m2IU1FlIh2G2gAqWABIBalOITLFJIhaFNg");
	this.shape_9.setTransform(433.9,136.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CC0000").ss(4.4,1,1).p("At/AzICRoeIZuG6IiRIdgAsyABIBumcIXtGWIhvGcg");
	this.shape_10.setTransform(430.2,137.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#CC0000").ss(4.4,1,1).p("AwqA8ICtqFIeoINIitKGgAvOABICDnsIcOHkIiEHrg");
	this.shape_11.setTransform(426.4,138.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CC0000").ss(4.4,1,1).p("AxrABICZo6MAguAIyIiZI5gAzVBGIDIrsMAjjAJhIjJLsg");
	this.shape_12.setTransform(422.7,140);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC0000").s().p("AipDZICDnpIDQA4IgSBCIiLgmIglCQIB4AhIgSBBIh4ggIgnCPICLAmIgTBGg");
	this.shape_13.setTransform(512.6,167.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC0000").s().p("AhDD4QgZgHgUgOQgUgQgLgTQgMgUgEgYQgDgYAGgZIAHgaIBHATIgGAWQgFAUAHASQAHATAbAHQASAFALgDQAMgCAHgIQAHgIAFgOIAKgdIAGghQACgMgCgJQgDgJgGgHIgTgQIgrghQgogfgHgiQgIgjANguQAHgcAOgXQAOgWAUgOQATgOAZgFQAagEAeAIQAaAHATAPQATAQALAUQAMAUADAVQACAWgFAVIgJAiIhGgSIAEgQQAGgYgGgVQgHgUgbgIQgOgDgLACQgLADgHAIIgMASIgIAXIgGAZIABASIAJARIARAQIAwAkQAVAPAMAPQALAQADASQAEATgDAVIgKAwQgJAfgNAZQgNAZgTAPQgTAQgZAFQgJABgKAAQgTAAgXgGg");
	this.shape_14.setTransform(464.3,154.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC0000").s().p("AhxDZICCnpIBGATIhvGiICKAmIgTBGg");
	this.shape_15.setTransform(412.5,141.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC0000").s().p("AA5D5IAIhuIhfgaIgxBjIhGgSIDwnMIA7APIgXIGgAAAAyIBGASIANi6IgCAAg");
	this.shape_16.setTransform(364.3,130.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC0000").s().p("AipDsICDnpIDRA4IgSBCIiMgmIgmCVIB4AfIgSBCIh4ggIg4DRg");
	this.shape_17.setTransform(327,115.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CC0000").ss(4.4,1,1).p("AxZqHMAlQAJ/IiuKIMglPgJ/gAycsEMAodAK2IjlNTMgocgK1g");
	this.shape_18.setTransform(418.9,141.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).wait(34));

	// fake news
	this.instance_1 = new lib.FakeNews("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(424.4,182,1.064,1.064,0,0,0,128.2,121.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:127.9,regY:130.1,x:424,y:191.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(387.5,309.1,528.9,358);
// library properties:
lib.properties = {
	id: 'ACDAEE9789DB4B279F530FB87505F8F5',
	width: 651,
	height: 514,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png", id:"Image"}
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
an.compositions['ACDAEE9789DB4B279F530FB87505F8F5'] = {
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