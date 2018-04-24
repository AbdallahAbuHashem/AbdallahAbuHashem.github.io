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
	this.shape.graphics.f("rgba(204,104,117,0.8)").s().p("AgCCEQgLgEgGgDIgbgTQgPgKgMgJQgPgMgHgNQgPgVgJgbQgNgtAXgoQAUglAogRQgXALgRAUQgSAVgHAZQgGAZAEAYQAFAZAOASIAAAAIAUAbIgJgOIgGgIQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBgBAAQgOgXgDgcQgDgcAKgaQAKgaAUgTQAVgTAagGIANgEIAJACQAFADABgBQAZgCAZALQASAHAXAQIACAHQAYAfgBAlQAAgRgHgSQgIgVgRgQQgQgPgXgHQgXgGgWADIgSADIgPAFIgOAFQgFACADgFIACgDQgNAIgLATIgEACIgDAGQgIACgFAMQAAgEgBgCIAAAJIgDAMIgCAUQgCACgBAEQgBAEABADIACAJQABAIAFAQQABAPALAJIADADIABAGQAEAGAMAFQAKAPAMAKQABAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIgCgGIAIADIAHAAIAMgCIAMACQAFABAGAAIALAEIAJgCQAEACADAAIAIgEIAJABIAIgFQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQABgCAGgDIAIgFIAMgGIABgCIAIgGIAEgFIALgNIgCAJIgEAKQABABAEgEIAIgHQgEAHABADIADADQABADgKAPQgTAegYAMQgCACgKAAIgRACIgMAFQgGADgGAAIgDAAQgJAAgKgCg");
	this.shape.setTransform(12.4,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(213,130,141,0.698)").s().p("AgeBYQgOgSgFgYQgEgaAGgYQAHgZASgUQARgVAWgLIAOgEIAOgDIAGgBIgNAEQgaAGgUAUQgUASgKAbQgKAZADAcQADAcAOAXg");
	this.shape_1.setTransform(5.7,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D5828D").s().p("AgCAMQgMgKgLgOIAFADIABAEQATAKAaABIgMACIgHAAIgIgDIABAGQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgCgBg");
	this.shape_2.setTransform(8.9,20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(208,114,126,0.8)").s().p("AgGAXIgBgoQAAgDADgCQADgCABADIACARIAGgIIgEAGIAAAKQgCAIgEAHIgEAFIAAgBg");
	this.shape_3.setTransform(25.8,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,26.7,26.9), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,104,117,0.8)").s().p("AhNB4QgogWgTgrQAMAZAWATQAXATAbAHQAbAIAbgFQAbgFAUgPQARgMAMgKQgEABgKAJIgJAHQABgBAAAAQAAgBAAABQgBAAgBABQgBABgCABQgaAQgdADQgfADgcgKQgegMgTgVQgVgXgIgdIgEgOIACgKQADgFgBgCQgCgaALgdQAKgUAQgYIAIgDQAmgfAuAFQgYgCgYAKQgYAJgRATQgSAUgHAXQgHAXAEAZIADAWQADALAJAVQACAFgFgDIgEgDQAKAPAUANIACAEIAHADQAAADAFAFQAFAEAGACQgEgBgDACQAFgBAFABIANADIAWADQAIAGAGgDIAKgCQAJgBASgFQARgCAJgMIAFgDIAFgBQAHgFAGgMQASgNAJgNQAAgBABAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQgCAAgDACIACgJIAAgIIgBgNIACgNIACgNQAAgGAEgGIgDgKQACgCAAgGIgBgDIgEgGIABgJIgFgKIACgBIgGgHQgCgFgEgEIgGgNIgCgBIgHgJIgMgLIgIgFIAKADIAKAEQACgBgFgFIgIgIQAIAFADgBIAEgDQACgBARALQAgAWAMAZQACACABAKQABAOACAFIAEAMQADAHABAHQAAAKgDAOQgDAMgEAGIgJAOIgLAPIgUAeQgNAQgPAIQgVARgfAJQgQAFgQAAQgfAAgegQg");
	this.shape.setTransform(14.6,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(213,130,141,0.698)").s().p("AgEAzQgbgGgXgUQgWgSgMgZIgJgdIgBgIIAFAOQAIAdAVAWQASAVAfAMQAbALAfgEQAegDAagPIgCACQgUAPgbAFQgLACgLAAQgRAAgPgFg");
	this.shape_1.setTransform(9.9,22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D5828D").s().p("AgKAXIAFgCQALgUACgdIABANIAAAIIgCAJQADgCACAAQABAAAAAAQABAAAAAAQAAABAAAAQgBABAAABQgJAMgRAOg");
	this.shape_2.setTransform(23,19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(208,114,126,0.8)").s().p("AAGAGIgYAAQgDAAgCgDQgDgDAEgBIAMgBQAGAAABgBIgDgCIALAAQANADAIAIIgMAAIgIAAg");
	this.shape_3.setTransform(15.5,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0.4,29.2,28.6), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,104,117,0.8)").s().p("AhHCRQgCACgDAAQgDABgRgMQgigXgOgdQgCgCgBgLIgDgUIgFgOQgDgIAAgGQgBgKADgQQAEgNAEgHIAUghQAIgMAPgUQAPgSAPgJQAZgSAggKQA1gOAxAaQAsAXAVAwQgOgcgYgUQgZgVgegIQgdgIgeAGQgdAFgWAQIgJAGIgIAGIgQAMIAQgLIAKgIIAEgDQAdgRAggDQAigDAfALQAgAMAWAYQAXAZAJAgIACAGIADAKQAAAEgDAGQgCAGABACQACAdgMAgQgKAXgTAbIgIADQgkAdgsABQAUgBAUgIQAbgLATgVQATgVAIgbQAIgbgEgbIgEgZQgBgGgFgMIgHgQQgDgHAGAEIAEADQgKgPgXgQIgCgEIgIgDQgBgEgFgFQgEgDgIgEQAFABACgCIgKAAIgPgEIgYgDQgDgCgFgBQgFgCgDACIgLACQgNABgRAGQgSACgMANIgEADIgGABQgIAHgHAMQgSAOgLAPQgBABAAABQAAABAAAAQAAABAAAAQAAAAABAAQADAAADgDIgDALIAAAIIAAAPIgCAOQgCAJABAGQgCAJgCAEIADALQgDAEAAAFIAGAKIgBALIAGAKQAAABAAAAQgBAAAAAAQAAABAAAAQgBAAAAgBQACACAEAHIAHAJIAHAPIACABIAIAJIAOAMIAJAGIgLgDIgMgFQgBABAFAFIAJAIQgJgEgCABg");
	this.shape.setTransform(16,14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(213,130,141,0.698)").s().p("ABqAzIgCgFQgJghgXgXQgWgZgggLQgegMgiAEQghADgdARIADgDQAWgQAdgFQAfgFAcAIQAeAHAZAVQAYAVAOAaIAGARIAEAQIABAIg");
	this.shape_1.setTransform(21.1,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D5828D").s().p("AgKARIAAgIIADgKQgDACgDAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBABgBQALgPARgOIgEAGIgFACQgNAXgDAgIAAgPg");
	this.shape_2.setTransform(6.5,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(208,114,126,0.8)").s().p("AAIAEIgMAAQgKgCgIgEQgJgGAEABQAJgBAoACQADAAADADQACADgDABIgNABQgIAAgBABIALAFg");
	this.shape_3.setTransform(14.8,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0.1,0,31.9,31.7), null);


(lib.Group_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(100,183,129,0.8)").s().p("AgCCEQgLgEgGgDIgbgTQgPgKgMgJQgPgMgHgNQgPgVgJgbQgNgtAXgoQAUglAogRQgXALgRAUQgSAVgHAZQgGAZAEAYQAFAZAOASIAAAAIAUAbIgJgOIgGgIQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBgBAAQgOgXgDgcQgDgcAKgaQAKgaAUgTQAVgTAagGIANgEIAJACQAFADABgBQAZgCAZALQASAHAXAQIACAHQAYAfgBAlQAAgRgHgSQgIgVgRgQQgQgPgXgHQgXgGgWADIgSADIgPAFIgOAFQgFACADgFIACgDQgNAIgLATIgEACIgDAGQgIACgFAMQAAgEgBgCIAAAJIgDAMIgCAUQgCACgBAEQgBAEABADIACAJQABAIAFAQQABAPALAJIADADIABAGQAEAGAMAFQAKAPAMAKQABAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIgCgGIAIADIAHAAIAMgCIAMACQAFABAGAAIALAEIAJgCQAEACADAAIAIgEIAJABIAIgFQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQABgCAGgDIAIgFIAMgGIABgCIAIgGIAEgFIALgNIgCAJIgEAKQABABAEgEIAIgHQgEAHABADIADADQABADgKAPQgTAegYAMQgCACgKAAIgRACIgMAFQgGADgGAAIgDAAQgJAAgKgCg");
	this.shape_4.setTransform(12.4,13.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(126,197,151,0.698)").s().p("AgeBYQgOgSgFgYQgEgaAGgYQAHgZASgUQARgVAWgLIAOgEIAOgDIAGgBIgNAEQgaAGgUAUQgUASgKAbQgKAZADAcQADAcAOAXg");
	this.shape_5.setTransform(5.7,9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7EC597").s().p("AgCAMQgMgKgLgOIAFADIABAEQATAKAaABIgMACIgHAAIgIgDIABAGQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgCgBg");
	this.shape_6.setTransform(8.9,20.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(109,188,137,0.8)").s().p("AgGAXIgBgoQAAgDADgCQADgCABADIACARIAGgIIgEAGIAAAKQgCAIgEAHIgEAFIAAgBg");
	this.shape_7.setTransform(25.8,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0,0,26.7,26.9), null);


(lib.Group_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(100,183,129,0.8)").s().p("AhNB4QgogWgTgrQAMAZAWATQAXATAbAHQAbAIAbgFQAbgFAUgPQARgMAMgKQgEABgKAJIgJAHQABgBAAAAQAAgBAAABQgBAAgBABQgBABgCABQgaAQgdADQgfADgcgKQgegMgTgVQgVgXgIgdIgEgOIACgKQADgFgBgCQgCgaALgdQAKgUAQgYIAIgDQAmgfAuAFQgYgCgYAKQgYAJgRATQgSAUgHAXQgHAXAEAZIADAWQADALAJAVQACAFgFgDIgEgDQAKAPAUANIACAEIAHADQAAADAFAFQAFAEAGACQgEgBgDACQAFgBAFABIANADIAWADQAIAGAGgDIAKgCQAJgBASgFQARgCAJgMIAFgDIAFgBQAHgFAGgMQASgNAJgNQAAgBABAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQgCAAgDACIACgJIAAgIIgBgNIACgNIACgNQAAgGAEgGIgDgKQACgCAAgGIgBgDIgEgGIABgJIgFgKIACgBIgGgHQgCgFgEgEIgGgNIgCgBIgHgJIgMgLIgIgFIAKADIAKAEQACgBgFgFIgIgIQAIAFADgBIAEgDQACgBARALQAgAWAMAZQACACABAKQABAOACAFIAEAMQADAHABAHQAAAKgDAOQgDAMgEAGIgJAOIgLAPIgUAeQgNAQgPAIQgVARgfAJQgQAFgQAAQgfAAgegQg");
	this.shape_4.setTransform(14.6,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(126,197,151,0.698)").s().p("AgEAzQgbgGgXgUQgWgSgMgZIgJgdIgBgIIAFAOQAIAdAVAWQASAVAfAMQAbALAfgEQAegDAagPIgCACQgUAPgbAFQgLACgLAAQgRAAgPgFg");
	this.shape_5.setTransform(9.9,22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7EC597").s().p("AgKAXIAFgCQALgUACgdIABANIAAAIIgCAJQADgCACAAQABAAAAAAQABAAAAAAQAAABAAAAQgBABAAABQgJAMgRAOg");
	this.shape_6.setTransform(23,19.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(109,188,137,0.8)").s().p("AAGAGIgYAAQgDAAgCgDQgDgDAEgBIAMgBQAGAAABgBIgDgCIALAAQANADAIAIIgMAAIgIAAg");
	this.shape_7.setTransform(15.5,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0_1, new cjs.Rectangle(0,0.4,29.2,28.6), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(100,183,129,0.8)").s().p("AhHCRQgCACgDAAQgDABgRgMQgigXgOgdQgCgCgBgLIgDgUIgFgOQgDgIAAgGQgBgKADgQQAEgNAEgHIAUghQAIgMAPgUQAPgSAPgJQAZgSAggKQA1gOAxAaQAsAXAVAwQgOgcgYgUQgZgVgegIQgdgIgeAGQgdAFgWAQIgJAGIgIAGIgQAMIAQgLIAKgIIAEgDQAdgRAggDQAigDAfALQAgAMAWAYQAXAZAJAgIACAGIADAKQAAAEgDAGQgCAGABACQACAdgMAgQgKAXgTAbIgIADQgkAdgsABQAUgBAUgIQAbgLATgVQATgVAIgbQAIgbgEgbIgEgZQgBgGgFgMIgHgQQgDgHAGAEIAEADQgKgPgXgQIgCgEIgIgDQgBgEgFgFQgEgDgIgEQAFABACgCIgKAAIgPgEIgYgDQgDgCgFgBQgFgCgDACIgLACQgNABgRAGQgSACgMANIgEADIgGABQgIAHgHAMQgSAOgLAPQgBABAAABQAAABAAAAQAAABAAAAQAAAAABAAQADAAADgDIgDALIAAAIIAAAPIgCAOQgCAJABAGQgCAJgCAEIADALQgDAEAAAFIAGAKIgBALIAGAKQAAABAAAAQgBAAAAAAQAAABAAAAQgBAAAAgBQACACAEAHIAHAJIAHAPIACABIAIAJIAOAMIAJAGIgLgDIgMgFQgBABAFAFIAJAIQgJgEgCABg");
	this.shape_4.setTransform(16,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(126,197,151,0.698)").s().p("ABqAzIgCgFQgJghgXgXQgWgZgggLQgegMgiAEQghADgdARIADgDQAWgQAdgFQAfgFAcAIQAeAHAZAVQAYAVAOAaIAGARIAEAQIABAIg");
	this.shape_5.setTransform(21.1,6.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7EC597").s().p("AgKARIAAgIIADgKQgDACgDAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBABgBQALgPARgOIgEAGIgFACQgNAXgDAgIAAgPg");
	this.shape_6.setTransform(6.5,10.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(109,188,137,0.8)").s().p("AAIAEIgMAAQgKgCgIgEQgJgGAEABQAJgBAoACQADAAADADQACADgDABIgNABQgIAAgBABIALAFg");
	this.shape_7.setTransform(14.8,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0.1,0,31.9,31.7), null);


(lib.Group_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(100,183,129,0.8)").s().p("AgCCEQgLgEgGgDIgbgTQgPgKgMgJQgPgMgHgNQgPgVgJgbQgNgtAXgoQAUglAogRQgXALgRAUQgSAVgHAZQgGAZAEAYQAFAZAOASIAAAAIAUAbIgJgOIgGgIQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBgBAAQgOgXgDgcQgDgcAKgaQAKgaAUgTQAVgTAagGIANgEIAJACQAFADABgBQAZgCAZALQASAHAXAQIACAHQAYAfgBAlQAAgRgHgSQgIgVgRgQQgQgPgXgHQgXgGgWADIgSADIgPAFIgOAFQgFACADgFIACgDQgNAIgLATIgEACIgDAGQgIACgFAMQAAgEgBgCIAAAJIgDAMIgCAUQgCACgBAEQgBAEABADIACAJQABAIAFAQQABAPALAJIADADIABAGQAEAGAMAFQAKAPAMAKQABAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIgCgGIAIADIAHAAIAMgCIAMACQAFABAGAAIALAEIAJgCQAEACADAAIAIgEIAJABIAIgFQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQABgCAGgDIAIgFIAMgGIABgCIAIgGIAEgFIALgNIgCAJIgEAKQABABAEgEIAIgHQgEAHABADIADADQABADgKAPQgTAegYAMQgCACgKAAIgRACIgMAFQgGADgGAAIgDAAQgJAAgKgCg");
	this.shape_8.setTransform(12.4,13.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(126,197,151,0.698)").s().p("AgeBYQgOgSgFgYQgEgaAGgYQAHgZASgUQARgVAWgLIAOgEIAOgDIAGgBIgNAEQgaAGgUAUQgUASgKAbQgKAZADAcQADAcAOAXg");
	this.shape_9.setTransform(5.7,9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7EC597").s().p("AgCAMQgMgKgLgOIAFADIABAEQATAKAaABIgMACIgHAAIgIgDIABAGQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgCgBg");
	this.shape_10.setTransform(8.9,20.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(109,188,137,0.8)").s().p("AgGAXIgBgoQAAgDADgCQADgCABADIACARIAGgIIgEAGIAAAKQgCAIgEAHIgEAFIAAgBg");
	this.shape_11.setTransform(25.8,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_2, new cjs.Rectangle(0,0,26.7,26.9), null);


(lib.Group_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(100,183,129,0.8)").s().p("AhNB4QgogWgTgrQAMAZAWATQAXATAbAHQAbAIAbgFQAbgFAUgPQARgMAMgKQgEABgKAJIgJAHQABgBAAAAQAAgBAAABQgBAAgBABQgBABgCABQgaAQgdADQgfADgcgKQgegMgTgVQgVgXgIgdIgEgOIACgKQADgFgBgCQgCgaALgdQAKgUAQgYIAIgDQAmgfAuAFQgYgCgYAKQgYAJgRATQgSAUgHAXQgHAXAEAZIADAWQADALAJAVQACAFgFgDIgEgDQAKAPAUANIACAEIAHADQAAADAFAFQAFAEAGACQgEgBgDACQAFgBAFABIANADIAWADQAIAGAGgDIAKgCQAJgBASgFQARgCAJgMIAFgDIAFgBQAHgFAGgMQASgNAJgNQAAgBABAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQgCAAgDACIACgJIAAgIIgBgNIACgNIACgNQAAgGAEgGIgDgKQACgCAAgGIgBgDIgEgGIABgJIgFgKIACgBIgGgHQgCgFgEgEIgGgNIgCgBIgHgJIgMgLIgIgFIAKADIAKAEQACgBgFgFIgIgIQAIAFADgBIAEgDQACgBARALQAgAWAMAZQACACABAKQABAOACAFIAEAMQADAHABAHQAAAKgDAOQgDAMgEAGIgJAOIgLAPIgUAeQgNAQgPAIQgVARgfAJQgQAFgQAAQgfAAgegQg");
	this.shape_8.setTransform(14.6,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(126,197,151,0.698)").s().p("AgEAzQgbgGgXgUQgWgSgMgZIgJgdIgBgIIAFAOQAIAdAVAWQASAVAfAMQAbALAfgEQAegDAagPIgCACQgUAPgbAFQgLACgLAAQgRAAgPgFg");
	this.shape_9.setTransform(9.9,22.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7EC597").s().p("AgKAXIAFgCQALgUACgdIABANIAAAIIgCAJQADgCACAAQABAAAAAAQABAAAAAAQAAABAAAAQgBABAAABQgJAMgRAOg");
	this.shape_10.setTransform(23,19.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(109,188,137,0.8)").s().p("AAGAGIgYAAQgDAAgCgDQgDgDAEgBIAMgBQAGAAABgBIgDgCIALAAQANADAIAIIgMAAIgIAAg");
	this.shape_11.setTransform(15.5,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0_2, new cjs.Rectangle(0,0.4,29.2,28.6), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(100,183,129,0.8)").s().p("AhHCRQgCACgDAAQgDABgRgMQgigXgOgdQgCgCgBgLIgDgUIgFgOQgDgIAAgGQgBgKADgQQAEgNAEgHIAUghQAIgMAPgUQAPgSAPgJQAZgSAggKQA1gOAxAaQAsAXAVAwQgOgcgYgUQgZgVgegIQgdgIgeAGQgdAFgWAQIgJAGIgIAGIgQAMIAQgLIAKgIIAEgDQAdgRAggDQAigDAfALQAgAMAWAYQAXAZAJAgIACAGIADAKQAAAEgDAGQgCAGABACQACAdgMAgQgKAXgTAbIgIADQgkAdgsABQAUgBAUgIQAbgLATgVQATgVAIgbQAIgbgEgbIgEgZQgBgGgFgMIgHgQQgDgHAGAEIAEADQgKgPgXgQIgCgEIgIgDQgBgEgFgFQgEgDgIgEQAFABACgCIgKAAIgPgEIgYgDQgDgCgFgBQgFgCgDACIgLACQgNABgRAGQgSACgMANIgEADIgGABQgIAHgHAMQgSAOgLAPQgBABAAABQAAABAAAAQAAABAAAAQAAAAABAAQADAAADgDIgDALIAAAIIAAAPIgCAOQgCAJABAGQgCAJgCAEIADALQgDAEAAAFIAGAKIgBALIAGAKQAAABAAAAQgBAAAAAAQAAABAAAAQgBAAAAgBQACACAEAHIAHAJIAHAPIACABIAIAJIAOAMIAJAGIgLgDIgMgFQgBABAFAFIAJAIQgJgEgCABg");
	this.shape_8.setTransform(16,14.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(126,197,151,0.698)").s().p("ABqAzIgCgFQgJghgXgXQgWgZgggLQgegMgiAEQghADgdARIADgDQAWgQAdgFQAfgFAcAIQAeAHAZAVQAYAVAOAaIAGARIAEAQIABAIg");
	this.shape_9.setTransform(21.1,6.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7EC597").s().p("AgKARIAAgIIADgKQgDACgDAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBABgBQALgPARgOIgEAGIgFACQgNAXgDAgIAAgPg");
	this.shape_10.setTransform(6.5,10.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(109,188,137,0.8)").s().p("AAIAEIgMAAQgKgCgIgEQgJgGAEABQAJgBAoACQADAAADADQACADgDABIgNABQgIAAgBABIALAFg");
	this.shape_11.setTransform(14.8,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0.1,0,31.9,31.7), null);


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


(lib.Group_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(109,162,210,0.8)").s().p("AgCCEQgLgEgGgDIgbgTQgPgKgMgJQgPgMgHgNQgPgVgJgbQgNgtAXgoQAUglAogRQgXALgRAUQgSAVgHAZQgGAZAEAYQAFAZAOASIAAAAIAUAbIgJgOIgGgIQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBgBAAQgOgXgDgcQgDgcAKgaQAKgaAUgTQAVgTAagGIANgEIAJACQAFADABgBQAZgCAZALQASAHAXAQIACAHQAYAfgBAlQAAgRgHgSQgIgVgRgQQgQgPgXgHQgXgGgWADIgSADIgPAFIgOAFQgFACADgFIACgDQgNAIgLATIgEACIgDAGQgIACgFAMQAAgEgBgCIAAAJIgDAMIgCAUQgCACgBAEQgBAEABADIACAJQABAIAFAQQABAPALAJIADADIABAGQAEAGAMAFQAKAPAMAKQABAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIgCgGIAIADIAHAAIAMgCIAMACQAFABAGAAIALAEIAJgCQAEACADAAIAIgEIAJABIAIgFQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQABgCAGgDIAIgFIAMgGIABgCIAIgGIAEgFIALgNIgCAJIgEAKQABABAEgEIAIgHQgEAHABADIADADQABADgKAPQgTAegYAMQgCACgKAAIgRACIgMAFQgGADgGAAIgDAAQgJAAgKgCg");
	this.shape_12.setTransform(12.4,13.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(135,178,218,0.698)").s().p("AgeBYQgOgSgFgYQgEgaAGgYQAHgZASgUQARgVAWgLIAOgEIAOgDIAGgBIgNAEQgaAGgUAUQgUASgKAbQgKAZADAcQADAcAOAXg");
	this.shape_13.setTransform(5.7,9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#87B2DA").s().p("AgCAMQgMgKgLgOIAFADIABAEQATAKAaABIgMACIgHAAIgIgDIABAGQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIgCgBg");
	this.shape_14.setTransform(8.9,20.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(118,167,213,0.8)").s().p("AgGAXIgBgoQAAgDADgCQADgCABADIACARIAGgIIgEAGIAAAKQgCAIgEAHIgEAFIAAgBg");
	this.shape_15.setTransform(25.8,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_3, new cjs.Rectangle(0,0,26.7,26.9), null);


(lib.Group_0_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(109,162,210,0.8)").s().p("AhNB4QgogWgTgrQAMAZAWATQAXATAbAHQAbAIAbgFQAbgFAUgPQARgMAMgKQgEABgKAJIgJAHQABgBAAAAQAAgBAAABQgBAAgBABQgBABgCABQgaAQgdADQgfADgcgKQgegMgTgVQgVgXgIgdIgEgOIACgKQADgFgBgCQgCgaALgdQAKgUAQgYIAIgDQAmgfAuAFQgYgCgYAKQgYAJgRATQgSAUgHAXQgHAXAEAZIADAWQADALAJAVQACAFgFgDIgEgDQAKAPAUANIACAEIAHADQAAADAFAFQAFAEAGACQgEgBgDACQAFgBAFABIANADIAWADQAIAGAGgDIAKgCQAJgBASgFQARgCAJgMIAFgDIAFgBQAHgFAGgMQASgNAJgNQAAgBABAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQgCAAgDACIACgJIAAgIIgBgNIACgNIACgNQAAgGAEgGIgDgKQACgCAAgGIgBgDIgEgGIABgJIgFgKIACgBIgGgHQgCgFgEgEIgGgNIgCgBIgHgJIgMgLIgIgFIAKADIAKAEQACgBgFgFIgIgIQAIAFADgBIAEgDQACgBARALQAgAWAMAZQACACABAKQABAOACAFIAEAMQADAHABAHQAAAKgDAOQgDAMgEAGIgJAOIgLAPIgUAeQgNAQgPAIQgVARgfAJQgQAFgQAAQgfAAgegQg");
	this.shape_12.setTransform(14.6,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(135,178,218,0.698)").s().p("AgEAzQgbgGgXgUQgWgSgMgZIgJgdIgBgIIAFAOQAIAdAVAWQASAVAfAMQAbALAfgEQAegDAagPIgCACQgUAPgbAFQgLACgLAAQgRAAgPgFg");
	this.shape_13.setTransform(9.9,22.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#87B2DA").s().p("AgKAXIAFgCQALgUACgdIABANIAAAIIgCAJQADgCACAAQABAAAAAAQABAAAAAAQAAABAAAAQgBABAAABQgJAMgRAOg");
	this.shape_14.setTransform(23,19.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(118,167,213,0.8)").s().p("AAGAGIgYAAQgDAAgCgDQgDgDAEgBIAMgBQAGAAABgBIgDgCIALAAQANADAIAIIgMAAIgIAAg");
	this.shape_15.setTransform(15.5,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0_3, new cjs.Rectangle(0,0.4,29.2,28.6), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(109,162,210,0.8)").s().p("AhHCRQgCACgDAAQgDABgRgMQgigXgOgdQgCgCgBgLIgDgUIgFgOQgDgIAAgGQgBgKADgQQAEgNAEgHIAUghQAIgMAPgUQAPgSAPgJQAZgSAggKQA1gOAxAaQAsAXAVAwQgOgcgYgUQgZgVgegIQgdgIgeAGQgdAFgWAQIgJAGIgIAGIgQAMIAQgLIAKgIIAEgDQAdgRAggDQAigDAfALQAgAMAWAYQAXAZAJAgIACAGIADAKQAAAEgDAGQgCAGABACQACAdgMAgQgKAXgTAbIgIADQgkAdgsABQAUgBAUgIQAbgLATgVQATgVAIgbQAIgbgEgbIgEgZQgBgGgFgMIgHgQQgDgHAGAEIAEADQgKgPgXgQIgCgEIgIgDQgBgEgFgFQgEgDgIgEQAFABACgCIgKAAIgPgEIgYgDQgDgCgFgBQgFgCgDACIgLACQgNABgRAGQgSACgMANIgEADIgGABQgIAHgHAMQgSAOgLAPQgBABAAABQAAABAAAAQAAABAAAAQAAAAABAAQADAAADgDIgDALIAAAIIAAAPIgCAOQgCAJABAGQgCAJgCAEIADALQgDAEAAAFIAGAKIgBALIAGAKQAAABAAAAQgBAAAAAAQAAABAAAAQgBAAAAgBQACACAEAHIAHAJIAHAPIACABIAIAJIAOAMIAJAGIgLgDIgMgFQgBABAFAFIAJAIQgJgEgCABg");
	this.shape_12.setTransform(16,14.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(135,178,218,0.698)").s().p("ABqAzIgCgFQgJghgXgXQgWgZgggLQgegMgiAEQghADgdARIADgDQAWgQAdgFQAfgFAcAIQAeAHAZAVQAYAVAOAaIAGARIAEAQIABAIg");
	this.shape_13.setTransform(21.1,6.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#87B2DA").s().p("AgKARIAAgIIADgKQgDACgDAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBABgBQALgPARgOIgEAGIgFACQgNAXgDAgIAAgPg");
	this.shape_14.setTransform(6.5,10.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(118,167,213,0.8)").s().p("AAIAEIgMAAQgKgCgIgEQgJgGAEABQAJgBAoACQADAAADADQACADgDABIgNABQgIAAgBABIALAFg");
	this.shape_15.setTransform(14.8,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0.1,0,31.9,31.7), null);


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


(lib.redai = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#B32538").s().p("AgUCxIgQgDQgJgBgFgDIgBAAQABgBgKgDQgKgCgBgCQgEgDgFgBIgJgDQgBgEgFgCQgKgDgCgCIgOgOIAAACIgOgPIgMgQQgMgTgEgPQABABAAAAQABABAAAAQAAgBgBAAQgBgBgBgBIgCgIIgBAAIgEgHQgDgEABgEQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQgEgJAAgGIAAgsIAAACIABgGIgCABQABgBAAgGQABgGABABIAAABQACABACgKIgCABIABgEIAGgQQACgGAFgGIAAgEQAFgHAFgKQAGgLAGgDIAQgSQAFgHAMgKIANgIQAIgEAEAAIAQgHIAOgGQAAABAAAAQAAAAABAAQAAABABAAQABgBABAAQAGgCABABQAAgBAAAAQAAAAAAgBQABAAABAAQAAAAABAAQAFgBABgBIAAACIASgCIgCABQAAABAGgBIADgCIgBACIADgBIAAABQAIABAAgDIADACQAAAAABAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIAEABQACABAEAAIgDAAIAFABQADABADgBIABgCIgFAAIAJgBIAAABIAFABQABABAAAAQABAAAAAAQABAAAAAAQAAAAABgBIAAACIAEAAQgEACAGACIAFACIgBgDIADADQABABAAAAQABAAAAAAQABAAABAAQAAAAABAAIgBACQABAAAAABQABAAAAAAQABAAAAAAQAAgBABAAIACABIgCAAIAPAFQAIADAEAEIAAABQAFAEAFACIgBgBIAHAEIgBACIAFADIgBAAQAHAHAFACIgBgBIAGgBIADACQABAAAAAAQAAAAABABQAAAAAAAAQABABAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAEADAEACQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAACACAEIAIAIQADADACAEIAAAFQAAAAAAABQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIADAEQAAAAAAAAQABAAAAABQAAAAAAABQABAAAAABIAAAAIAAABQABAEADAEIADAEQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIAAAEIADABIACAOIACARQgBABACAIIABgCIAAATIgBARIABADIgBAAIgCADIgBAQIgBgBIADgdIgCAAIgCAHIACACIgDAUQgCAHABABIAAABIABAAIgHAMIACgGIgEAFIAAAEQABACgFAGIgDADQABABgEAFIgGAIIAIgEIgLASQAAAAAAgBQAAAAgBAAQAAAAAAABQgBAAAAAAIgBADIgDACQgBADADACQABADgUAQQAAAAABAAQAAAAAAAAQAAAAAAAAQgBAAAAABIADgCIgKAGQAAACgFAEIgJAFIgBAAIABgCIgHADQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBABQgBgCgIAEQgKAGgFABIgOADQgLABgCABIAAgBIgHACIABAAIgCAAIAAABIABAAIAAAAQgDgBgEAAIgBAAIgDAAIAEgBIgQgCIgKgDQACgBAOgCIACABIADgBQAAAAABgBQAAAAAAAAQAAAAAAAAQAAgBgBAAQAFABACgCIACgDIAEABIAJgDIACABIAJgFIgGAAIADgBQASgCAIgHIAFgEIgBABIATgPQAKgIAIgMIgGAEQAKgOAHgOIAIgUIAFgLQACgGACgOIAAgUQAAgJgCgLIgDgTQgKgngfgbQgcgZgpgJIABAAIgPgEQgFgBgJABIAAgBIgFAAQgYAAgSAJQgCAAgHACIgKAEQghANgVAdQgXAfgFAjIgCAGIABAAIgCAPIABANQAAAGACAJIABANIADAGQAJAYAKAOQANATAQANQASAQALAGQAVAJAWACQAFAEALAGIAFAKIgWAIg");
	this.shape.setTransform(30.3,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B32538").s().p("AAAAEIAAgHIABAAIgBAIg");
	this.shape_1.setTransform(47.4,21.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B32538").s().p("AEeCMIABgCIgBgDQgBAAAAAAQAAgBAAAAQAAAAgBAAQAAABAAAAQABgFgBgBIgDgDIABgDIgCgJIABgBIgDgJIAAAEIgBgCIABAAIgBgRIgCgJIgDgFIAAABIgHgVQgDgLgHgLIAAAHQgHgPgIgMQgRgXAAgCQgJgOgRgQIgbgYQgGgFgYgRIgRgHQgJgFgHgCIgkgKIgSgEIgSgDIABAAQgTgDgIACIAAgBIgGAAQgbABgLAEIgTACQg8AKg5AwIgFADIACABQgNAJgIAKQgHAJgLAKIgCAGIgVAhIgQAlIgMAfIgFApIgJAQIgKAFIgIgTIABgNQABgLABgDIAAAAQABAAABgJQAAgIACgCQABgDAAgGIABgHQADgCAAgEIgBgFQAAgFADgBIAFgQIgBAAIAPgfQAKgRAIgJQAAAEABgFIAEgGIAAAAIACgHQABgEAEgCQAAABABAAQAAAAAAgBQAAAAABAAQAAgBAAgBQABAAAAAAQAAgBAAAAQAAAAAAAAQAAABAAAAQAGgJALgKIAJgIIAJgMIAAACIAEgEIgDgBQACAAAEgDQAAgBABgBQABAAAAAAQABgBAAAAQAAAAAAABIAAAAQABACAGgGQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIADgDQAEgBAIgHQAIgEADgBIABgDQAFgBAKgIQAJgFAGAAIAJgGIAbgMQAUgGAEABIAOgCQAGgDAHgBQAAABAAAAQAAABAAAAQABAAAAAAQABAAABAAIAGgBQAAAAAAgBQABAAAAAAQAAAAABAAQABgBAAAAQABAAABAAQABAAABAAQAAAAABAAQAAAAAAgBIABACIAPAAIgCAAQAAABABAAQAAAAAAAAQABAAABAAQABAAABgBIACgCIgBACIADAAIgBABQAIABAAgDIADABIABgBIgBgBIAIACIgCABIAEABIAFgBIABgDIgEABIAIgCQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAEAAIADAAIABACIADgBQgDADAFACIAFABIgBgDIACADQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAAABQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAIgCABIANACQAHAAAFAEIAAAAQAFACAEAAIAAAAIAGACIAAABIAFABIgBABQAFADAHABIgBgBQACAAADgEIADAAIADACQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABQAEAAAEAAQgGABAHAGIAJADIAHADIACAEQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABIADABIADACIAAgBIABABIAAAAQACADAEACIAFABQACgCADAGIACgBIATATQAAACAFADIAAgBQAKAMAMALIACABQgBAAAAAAQAAAAAAAAQAAABAAABQABABABABIAJAJIgBABIgRgTIgCABIADAGIADAAQAFAHAHAHQADAEACABIAAAAIAFAKIgEgEIACAFIADACQADABABAGIAAAEQACgBAEAOIABgIIAJAQQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAIACACIABADQACACADgCQADABAFAVIABgBIAAABIAAgDIABALQACAAABAGIADAIQAAAFgCgGIAAAHIABgBIABABIgBAEIAAAFIACAIQABAEAAACIAAANQgBAKABABIgBABIABAFIAAABIABAAIgCAHIABAAIgBACIAAgCIgHAXQgBgCgBgNg");
	this.shape_2.setTransform(29.8,52);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B32538").s().p("AgCgCIABAAIAEAFg");
	this.shape_3.setTransform(54,48.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0A2AA").s().p("AkABhIADgZIAFgZIAIgYIAHgRQAEgHAGgKQAggsAygcQAvgZA0gHQA0gHAzALQA0AMArAeQAzAhAcAwQAOAaAHAcIgDgKQgMgfgSgXQgSgWgagVQgQgMgIgEIgdgPQgkgOgZgGIgTgEIgrgEIgGAAQgUAAgZAFIgUAFIAEgBIgUAIIgVAKQgzAZgdAaIgNARIgKAKIgJALIgPAaQgPAcgDAjIgBgJIgEAXg");
	this.shape_4.setTransform(29.6,51.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,59.4,67.5);


(lib.ArtOnPathBrush_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.Group_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.2,13.9,1,1,0,0,0,13.2,13.4);
	this.instance_1.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ArtOnPathBrush_1_1, new cjs.Rectangle(0,0.5,26.7,26.9), null);


(lib.ArtOnPathBrush_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.Group_0_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.2,14.7,1,1,0,0,0,14.6,14.7);
	this.instance_1.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ArtOnPathBrush_0_1, new cjs.Rectangle(0.6,0.4,29.2,28.6), null);


(lib.ArtOnPathBrush_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.Group_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16,15.8,1,1,0,0,0,16,15.8);
	this.instance_1.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ArtOnPathBrush_2, new cjs.Rectangle(0.1,0,31.9,31.7), null);


(lib.greenai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F8430").s().p("AgMA7IgEgDQgDgCgBgCQgBgDAAgDIABgHQACgDACAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQACgDADAAIACAAIADAAIAGABQADAAADACQADACABAEQACACAAAGQAAAHgFAFQgGAFgIAAgAgIAnIgBADIgCADQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIADAAIACgCIAAgCIAAgBQAAgFgBgCQgCgBgDAAIgCAAIgBAAIABADgAgJARQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgPIAAgBIAAgBQAAgDACgCQADgDADgBIAFgCIAGgCIAFgGQACgDAAgFIgBgGIgEgGIgFgDIgGgCQgFABgFACIgIAEIgCABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQACgEAHgDQAHgCAJAAQAGAAAFACQAFACAEADQAEAEACAFQACAFAAAFQAAAGgDAFQgCAGgEADQgDAEgFADQgFADgFABIAAAOQAAADgCACIgEABIgEgBg");
	this.shape.setTransform(30,53.9);

	this.instance = new lib.ArtOnPathBrush_1_1();
	this.instance.parent = this;
	this.instance.setTransform(29.9,19.5,1,1,0,0,0,13.2,13.9);

	this.instance_1 = new lib.ArtOnPathBrush_0_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.9,18.7,1,1,0,0,0,15.2,14.7);

	this.instance_2 = new lib.ArtOnPathBrush_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(28.9,17.6,1,1,0,0,0,16,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B9447").s().p("AgUCxIgQgDQgJgBgFgDIgBAAQABgBgKgDQgKgCgBgCQgEgDgFgBIgJgDQgBgEgFgCQgKgDgCgCIgOgOIAAACIgOgPIgMgQQgMgTgEgPQABABAAAAQABABAAAAQAAgBgBAAQgBgBgBgBIgCgIIgBAAIgEgHQgDgEABgEQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQgEgJAAgGIAAgsIAAACIABgGIgCABQABgBAAgGQABgGABABIAAABQACABACgKIgCABIABgEIAGgQQACgGAFgGIAAgEQAFgHAFgKQAGgLAGgDIAQgSQAFgHAMgKIANgIQAIgEAEAAIAQgHIAOgGQAAABAAAAQAAAAABAAQAAABABAAQABgBABAAQAGgCABABQAAgBAAAAQAAAAAAgBQABAAABAAQAAAAABAAQAFgBABgBIAAACIASgCIgCABQAAABAGgBIADgCIgBACIADgBIAAABQAIABAAgDIADACQAAAAABAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIAEABQACABAEAAIgDAAIAFABQADABADgBIABgCIgFAAIAJgBIAAABIAFABQABABAAAAQABAAAAAAQABAAAAAAQAAAAABgBIAAACIAEAAQgEACAGACIAFACIgBgDIADADQABABAAAAQABAAAAAAQABAAABAAQAAAAABAAIgBACQABAAAAABQABAAAAAAQABAAAAAAQAAgBABAAIACABIgCAAIAPAFQAIADAEAEIAAABQAFAEAFACIgBgBIAHAEIgBACIAFADIgBAAQAHAHAFACIgBgBIAGgBIADACQABAAAAAAQAAAAABABQAAAAAAAAQABABAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAEADAEACQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAACACAEIAIAIQADADACAEIAAAFQAAAAAAABQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIADAEQAAAAAAAAQABAAAAABQAAAAAAABQABAAAAABIAAAAIAAABQABAEADAEIADAEQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIAAAEIADABIACAOIACARQgBABACAIIABgCIAAATIgBARIABADIgBAAIgCADIgBAQIgBgBIADgdIgCAAIgCAHIACACIgDAUQgCAHABABIAAABIABAAIgHAMIACgGIgEAFIAAAEQABACgFAGIgDADQABABgEAFIgGAIIAIgEIgLASQAAAAAAgBQAAAAgBAAQAAAAAAABQgBAAAAAAIgBADIgDACQgBADADACQABADgUAQQAAAAABAAQAAAAAAAAQAAAAAAAAQgBAAAAABIADgCIgKAGQAAACgFAEIgJAFIgBAAIABgCIgHADQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBABQgBgCgIAEQgKAGgFABIgOADQgLABgCABIAAgBIgHACIABAAIgCAAIAAABIABAAIAAAAQgDgBgEAAIgBAAIgDAAIAEgBIgQgCIgKgDQACgBAOgCIACABIADgBQAAAAABgBQAAAAAAAAQAAAAAAAAQAAgBgBAAQAFABACgCIACgDIAEABIAJgDIACABIAJgFIgGAAIADgBQASgCAIgHIAFgEIgBABIATgPQAKgIAIgMIgGAEQAKgOAHgOIAIgUIAFgLQACgGACgOIAAgUQAAgJgCgLIgDgTQgKgngfgbQgcgZgpgJIABAAIgPgEQgFgBgJABIAAgBIgFAAQgYAAgSAJQgCAAgHACIgKAEQghANgVAdQgXAfgFAjIgCAGIABAAIgCAPIABANQAAAGACAJIABANIADAGQAJAYAKAOQANATAQANQASAQALAGQAVAJAWACQAFAEALAGIAFAKIgWAIg");
	this.shape_1.setTransform(30.3,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B9447").s().p("AAAAEIAAgHIABAAIgBAIg");
	this.shape_2.setTransform(47.4,21.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B9447").s().p("AEeCMIABgCIgBgDQgBAAAAAAQAAgBAAAAQAAAAgBAAQAAABAAAAQABgFgBgBIgDgDIABgDIgCgJIABgBIgDgJIAAAEIgBgCIABAAIgBgRIgCgJIgDgFIAAABIgHgVQgDgLgHgLIAAAHQgHgPgIgMQgRgXAAgCQgJgOgRgQIgbgYQgGgFgYgRIgRgHQgJgFgHgCIgkgKIgSgEIgSgDIABAAQgTgDgIACIAAgBIgGAAQgbABgLAEIgTACQg8AKg5AwIgFADIACABQgNAJgIAKQgHAJgLAKIgCAGIgVAhIgQAlIgMAfIgFApIgJAQIgKAFIgIgTIABgNQABgLABgDIAAAAQABAAABgJQAAgIACgCQABgDAAgGIABgHQADgCAAgEIgBgFQAAgFADgBIAFgQIgBAAIAPgfQAKgRAIgJQAAAEABgFIAEgGIAAAAIACgHQABgEAEgCQAAABABAAQAAAAAAgBQAAAAABAAQAAgBAAgBQABAAAAAAQAAgBAAAAQAAAAAAAAQAAABAAAAQAGgJALgKIAJgIIAJgMIAAACIAEgEIgDgBQACAAAEgDQAAgBABgBQABAAAAAAQABgBAAAAQAAAAAAABIAAAAQABACAGgGQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIADgDQAEgBAIgHQAIgEADgBIABgDQAFgBAKgIQAJgFAGAAIAJgGIAbgMQAUgGAEABIAOgCQAGgDAHgBQAAABAAAAQAAABAAAAQABAAAAAAQABAAABAAIAGgBQAAAAAAgBQABAAAAAAQAAAAABAAQABgBAAAAQABAAABAAQABAAABAAQAAAAABAAQAAAAAAgBIABACIAPAAIgCAAQAAABABAAQAAAAAAAAQABAAABAAQABAAABgBIACgCIgBACIADAAIgBABQAIABAAgDIADABIABgBIgBgBIAIACIgCABIAEABIAFgBIABgDIgEABIAIgCQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAEAAIADAAIABACIADgBQgDADAFACIAFABIgBgDIACADQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAAABQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAIgCABIANACQAHAAAFAEIAAAAQAFACAEAAIAAAAIAGACIAAABIAFABIgBABQAFADAHABIgBgBQACAAADgEIADAAIADACQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABQAEAAAEAAQgGABAHAGIAJADIAHADIACAEQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABIADABIADACIAAgBIABABIAAAAQACADAEACIAFABQACgCADAGIACgBIATATQAAACAFADIAAgBQAKAMAMALIACABQgBAAAAAAQAAAAAAAAQAAABAAABQABABABABIAJAJIgBABIgRgTIgCABIADAGIADAAQAFAHAHAHQADAEACABIAAAAIAFAKIgEgEIACAFIADACQADABABAGIAAAEQACgBAEAOIABgIIAJAQQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAIACACIABADQACACADgCQADABAFAVIABgBIAAABIAAgDIABALQACAAABAGIADAIQAAAFgCgGIAAAHIABgBIABABIgBAEIAAAFIACAIQABAEAAACIAAANQgBAKABABIgBABIABAFIAAABIABAAIgCAHIABAAIgBACIAAgCIgHAXQgBgCgBgNg");
	this.shape_3.setTransform(29.8,52);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B9447").s().p("AgCgCIABAAIAEAFg");
	this.shape_4.setTransform(54,48.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9DD4B2").s().p("AkABhIADgZIAFgZIAIgYIAHgRQAEgHAGgKQAggsAygcQAvgZA0gHQA0gHAzALQA0AMArAeQAzAhAcAwQAOAaAHAcIgDgKQgMgfgSgXQgSgWgagVQgQgMgIgEIgdgPQgkgOgZgGIgTgEIgrgEIgGAAQgUAAgZAFIgUAFIAEgBIgUAIIgVAKQgzAZgdAaIgNARIgKAKIgJALIgPAaQgPAcgDAjIgBgJIgEAXg");
	this.shape_5.setTransform(29.6,51.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,59.4,67.5);


(lib.ArtOnPathBrush_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_2 = new lib.Group_1_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(13.2,13.9,1,1,0,0,0,13.2,13.4);
	this.instance_2.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ArtOnPathBrush_1_2, new cjs.Rectangle(0,0.5,26.7,26.9), null);


(lib.ArtOnPathBrush_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_2 = new lib.Group_0_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(15.2,14.7,1,1,0,0,0,14.6,14.7);
	this.instance_2.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ArtOnPathBrush_0_2, new cjs.Rectangle(0.6,0.4,29.2,28.6), null);


(lib.ArtOnPathBrush_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_2 = new lib.Group_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(16,15.8,1,1,0,0,0,16,15.8);
	this.instance_2.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.ArtOnPathBrush_3, new cjs.Rectangle(0.1,0,31.9,31.7), null);


(lib.greenai_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ArtOnPathBrush_1_2();
	this.instance.parent = this;
	this.instance.setTransform(29.9,19.5,1,1,0,0,0,13.2,13.9);

	this.instance_1 = new lib.ArtOnPathBrush_0_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.9,18.7,1,1,0,0,0,15.2,14.7);

	this.instance_2 = new lib.ArtOnPathBrush_3();
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


(lib.ArtOnPathBrush_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_3 = new lib.Group_1_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(13.2,13.9,1,1,0,0,0,13.2,13.4);
	this.instance_3.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ArtOnPathBrush_1_3, new cjs.Rectangle(0,0.5,26.7,26.9), null);


(lib.ArtOnPathBrush_0_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_3 = new lib.Group_0_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(15.2,14.7,1,1,0,0,0,14.6,14.7);
	this.instance_3.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ArtOnPathBrush_0_3, new cjs.Rectangle(0.6,0.4,29.2,28.6), null);


(lib.ArtOnPathBrush_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_3 = new lib.Group_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(16,15.8,1,1,0,0,0,16,15.8);
	this.instance_3.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ArtOnPathBrush_4, new cjs.Rectangle(0.1,0,31.9,31.7), null);


(lib.blueai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ArtOnPathBrush_1_3();
	this.instance.parent = this;
	this.instance.setTransform(29.9,19.5,1,1,0,0,0,13.2,13.9);

	this.instance_1 = new lib.ArtOnPathBrush_0_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.9,18.7,1,1,0,0,0,15.2,14.7);

	this.instance_2 = new lib.ArtOnPathBrush_4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(28.9,17.6,1,1,0,0,0,16,15.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3073B9").s().p("AgUCxIgQgDQgJgBgFgDIgBAAQABgBgKgDQgKgCgBgCQgEgDgFgBIgJgDQgBgEgFgCQgKgDgCgCIgOgOIAAACIgOgPIgMgQQgMgTgEgPQABABAAAAQABABAAAAQAAgBgBAAQgBgBgBgBIgCgIIgBAAIgEgHQgDgEABgEQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQgEgJAAgGIAAgsIAAACIABgGIgCABQABgBAAgGQABgGABABIAAABQACABACgKIgCABIABgEIAGgQQACgGAFgGIAAgEQAFgHAFgKQAGgLAGgDIAQgSQAFgHAMgKIANgIQAIgEAEAAIAQgHIAOgGQAAABAAAAQAAAAABAAQAAABABAAQABgBABAAQAGgCABABQAAgBAAAAQAAAAAAgBQABAAABAAQAAAAABAAQAFgBABgBIAAACIASgCIgCABQAAABAGgBIADgCIgBACIADgBIAAABQAIABAAgDIADACQAAAAABAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIAEABQACABAEAAIgDAAIAFABQADABADgBIABgCIgFAAIAJgBIAAABIAFABQABABAAAAQABAAAAAAQABAAAAAAQAAAAABgBIAAACIAEAAQgEACAGACIAFACIgBgDIADADQABABAAAAQABAAAAAAQABAAABAAQAAAAABAAIgBACQABAAAAABQABAAAAAAQABAAAAAAQAAgBABAAIACABIgCAAIAPAFQAIADAEAEIAAABQAFAEAFACIgBgBIAHAEIgBACIAFADIgBAAQAHAHAFACIgBgBIAGgBIADACQABAAAAAAQAAAAABABQAAAAAAAAQABABAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAEADAEACQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAACACAEIAIAIQADADACAEIAAAFQAAAAAAABQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIADAEQAAAAAAAAQABAAAAABQAAAAAAABQABAAAAABIAAAAIAAABQABAEADAEIADAEQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAIAAAEIADABIACAOIACARQgBABACAIIABgCIAAATIgBARIABADIgBAAIgCADIgBAQIgBgBIADgdIgCAAIgCAHIACACIgDAUQgCAHABABIAAABIABAAIgHAMIACgGIgEAFIAAAEQABACgFAGIgDADQABABgEAFIgGAIIAIgEIgLASQAAAAAAgBQAAAAgBAAQAAAAAAABQgBAAAAAAIgBADIgDACQgBADADACQABADgUAQQAAAAABAAQAAAAAAAAQAAAAAAAAQgBAAAAABIADgCIgKAGQAAACgFAEIgJAFIgBAAIABgCIgHADQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBABQgBgCgIAEQgKAGgFABIgOADQgLABgCABIAAgBIgHACIABAAIgCAAIAAABIABAAIAAAAQgDgBgEAAIgBAAIgDAAIAEgBIgQgCIgKgDQACgBAOgCIACABIADgBQAAAAABgBQAAAAAAAAQAAAAAAAAQAAgBgBAAQAFABACgCIACgDIAEABIAJgDIACABIAJgFIgGAAIADgBQASgCAIgHIAFgEIgBABIATgPQAKgIAIgMIgGAEQAKgOAHgOIAIgUIAFgLQACgGACgOIAAgUQAAgJgCgLIgDgTQgKgngfgbQgcgZgpgJIABAAIgPgEQgFgBgJABIAAgBIgFAAQgYAAgSAJQgCAAgHACIgKAEQghANgVAdQgXAfgFAjIgCAGIABAAIgCAPIABANQAAAGACAJIABANIADAGQAJAYAKAOQANATAQANQASAQALAGQAVAJAWACQAFAEALAGIAFAKIgWAIg");
	this.shape.setTransform(30.3,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3073B9").s().p("AAAAEIAAgHIABAAIgBAIg");
	this.shape_1.setTransform(47.4,21.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3073B9").s().p("AEeCMIABgCIgBgDQgBAAAAAAQAAgBAAAAQAAAAgBAAQAAABAAAAQABgFgBgBIgDgDIABgDIgCgJIABgBIgDgJIAAAEIgBgCIABAAIgBgRIgCgJIgDgFIAAABIgHgVQgDgLgHgLIAAAHQgHgPgIgMQgRgXAAgCQgJgOgRgQIgbgYQgGgFgYgRIgRgHQgJgFgHgCIgkgKIgSgEIgSgDIABAAQgTgDgIACIAAgBIgGAAQgbABgLAEIgTACQg8AKg5AwIgFADIACABQgNAJgIAKQgHAJgLAKIgCAGIgVAhIgQAlIgMAfIgFApIgJAQIgKAFIgIgTIABgNQABgLABgDIAAAAQABAAABgJQAAgIACgCQABgDAAgGIABgHQADgCAAgEIgBgFQAAgFADgBIAFgQIgBAAIAPgfQAKgRAIgJQAAAEABgFIAEgGIAAAAIACgHQABgEAEgCQAAABABAAQAAAAAAgBQAAAAABAAQAAgBAAgBQABAAAAAAQAAgBAAAAQAAAAAAAAQAAABAAAAQAGgJALgKIAJgIIAJgMIAAACIAEgEIgDgBQACAAAEgDQAAgBABgBQABAAAAAAQABgBAAAAQAAAAAAABIAAAAQABACAGgGQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIADgDQAEgBAIgHQAIgEADgBIABgDQAFgBAKgIQAJgFAGAAIAJgGIAbgMQAUgGAEABIAOgCQAGgDAHgBQAAABAAAAQAAABAAAAQABAAAAAAQABAAABAAIAGgBQAAAAAAgBQABAAAAAAQAAAAABAAQABgBAAAAQABAAABAAQABAAABAAQAAAAABAAQAAAAAAgBIABACIAPAAIgCAAQAAABABAAQAAAAAAAAQABAAABAAQABAAABgBIACgCIgBACIADAAIgBABQAIABAAgDIADABIABgBIgBgBIAIACIgCABIAEABIAFgBIABgDIgEABIAIgCQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAEAAIADAAIABACIADgBQgDADAFACIAFABIgBgDIACADQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAAABQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAIgCABIANACQAHAAAFAEIAAAAQAFACAEAAIAAAAIAGACIAAABIAFABIgBABQAFADAHABIgBgBQACAAADgEIADAAIADACQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABQAEAAAEAAQgGABAHAGIAJADIAHADIACAEQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABIADABIADACIAAgBIABABIAAAAQACADAEACIAFABQACgCADAGIACgBIATATQAAACAFADIAAgBQAKAMAMALIACABQgBAAAAAAQAAAAAAAAQAAABAAABQABABABABIAJAJIgBABIgRgTIgCABIADAGIADAAQAFAHAHAHQADAEACABIAAAAIAFAKIgEgEIACAFIADACQADABABAGIAAAEQACgBAEAOIABgIIAJAQQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAIACACIABADQACACADgCQADABAFAVIABgBIAAABIAAgDIABALQACAAABAGIADAIQAAAFgCgGIAAAHIABgBIABABIgBAEIAAAFIACAIQABAEAAACIAAANQgBAKABABIgBABIABAFIAAABIABAAIgCAHIABAAIgBACIAAgCIgHAXQgBgCgBgNg");
	this.shape_2.setTransform(29.8,52);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3073B9").s().p("AgCgCIABAAIAEAFg");
	this.shape_3.setTransform(54,48.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A5C6E3").s().p("AkABhIADgZIAFgZIAIgYIAHgRQAEgHAGgKQAggsAygcQAvgZA0gHQA0gHAzALQA0AMArAeQAzAhAcAwQAOAaAHAcIgDgKQgMgfgSgXQgSgWgagVQgQgMgIgEIgdgPQgkgOgZgGIgTgEIgrgEIgGAAQgUAAgZAFIgUAFIAEgBIgUAIIgVAKQgzAZgdAaIgNARIgKAKIgJALIgPAaQgPAcgDAjIgBgJIgEAXg");
	this.shape_4.setTransform(29.6,51.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,59.4,67.5);


(lib.L1People = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.greenai_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(37.6,247.6,1.265,1.265,0,0,0,29.7,34.3);

	this.instance_1 = new lib.redai("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(37.5,142.3,1.265,1.264,0,0,0,29.6,34.1);

	this.instance_2 = new lib.blueai("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(37.6,43.4,1.265,1.265,0,0,0,29.7,34.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,75.2,289.5);


// stage content:
(lib.A6GreenShareNews = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Head Green
	this.instance = new lib.greenai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(220.5,233.7,3.121,3.121,0,0,0,29.4,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:29.8,regY:33.8,scaleX:2.77,scaleY:2.77,x:203.8,y:233.2},0).wait(1).to({scaleX:2.41,scaleY:2.41,x:185.8,y:233.4},0).wait(1).to({scaleX:2.26,scaleY:2.26,x:182.3,y:233.6},0).wait(1).to({scaleX:2.12,scaleY:2.12,x:178.9,y:233.9},0).wait(1).to({scaleX:1.97,scaleY:1.97,x:175.4,y:234.2},0).wait(1).to({scaleX:1.82,scaleY:1.82,x:171.9,y:234.5},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:158.6,y:234.3},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:145.3,y:234.1},0).wait(1).to({regX:29.6,regY:34.2,scaleX:1.26,scaleY:1.26,x:93,y:170.4,mode:"single"},0).wait(27).to({startPosition:0},0).wait(2).to({regX:30.2,regY:34.6,scaleX:1.15,scaleY:1.15,x:91.2,y:169.7},0).wait(2).to({regX:30.8,regY:35.1,scaleX:1.03,scaleY:1.03,x:93.6,y:170.4},0).wait(1));

	// L1 People
	this.instance_1 = new lib.L1People("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(271.5,187.7,1,1,0,0,0,38.1,146.1);
	this.instance_1.alpha = 0.148;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).wait(4).to({alpha:0.352},0).wait(4).to({alpha:0.602},0).wait(4).to({alpha:0.801},0).wait(3).to({alpha:1},0).wait(11));

	// L1 Lines (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_15 = new cjs.Graphics().p("AiwYgMAAAgiXIM+AAMAAAAiXg");
	var mask_graphics_16 = new cjs.Graphics().p("Am+RMMAAAgiXIN9AAMAAAAiXg");
	var mask_graphics_17 = new cjs.Graphics().p("AnfRMMAAAgiXIO/AAMAAAAiXg");
	var mask_graphics_18 = new cjs.Graphics().p("An/RMMAAAgiXIP/AAMAAAAiXg");
	var mask_graphics_19 = new cjs.Graphics().p("AogRMMAAAgiXIRAAAMAAAAiXg");
	var mask_graphics_20 = new cjs.Graphics().p("ApARMMAAAgiXISBAAMAAAAiXg");
	var mask_graphics_21 = new cjs.Graphics().p("ApgRMMAAAgiXITBAAMAAAAiXg");
	var mask_graphics_22 = new cjs.Graphics().p("AqBRMMAAAgiXIUDAAMAAAAiXg");
	var mask_graphics_23 = new cjs.Graphics().p("AqhRMMAAAgiXIVDAAMAAAAiXg");
	var mask_graphics_24 = new cjs.Graphics().p("ArBRMMAAAgiXIWDAAMAAAAiXg");
	var mask_graphics_25 = new cjs.Graphics().p("ArhRMMAAAgiXIXDAAMAAAAiXg");
	var mask_graphics_26 = new cjs.Graphics().p("AsCRMMAAAgiXIYFAAMAAAAiXg");
	var mask_graphics_27 = new cjs.Graphics().p("AsiRMMAAAgiXIZFAAMAAAAiXg");
	var mask_graphics_28 = new cjs.Graphics().p("AtCRMMAAAgiXIaFAAMAAAAiXg");
	var mask_graphics_29 = new cjs.Graphics().p("AtjRMMAAAgiXIbHAAMAAAAiXg");
	var mask_graphics_30 = new cjs.Graphics().p("AqSYgMAAAgiXIcHAAMAAAAiXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_graphics_15,x:65.4,y:156.8}).wait(1).to({graphics:mask_graphics_16,x:92.5,y:203.6}).wait(1).to({graphics:mask_graphics_17,x:95.7,y:203.6}).wait(1).to({graphics:mask_graphics_18,x:99,y:203.6}).wait(1).to({graphics:mask_graphics_19,x:102.3,y:203.6}).wait(1).to({graphics:mask_graphics_20,x:105.5,y:203.6}).wait(1).to({graphics:mask_graphics_21,x:108.8,y:203.6}).wait(1).to({graphics:mask_graphics_22,x:112.1,y:203.6}).wait(1).to({graphics:mask_graphics_23,x:115.3,y:203.6}).wait(1).to({graphics:mask_graphics_24,x:118.6,y:203.6}).wait(1).to({graphics:mask_graphics_25,x:121.8,y:203.6}).wait(1).to({graphics:mask_graphics_26,x:125.1,y:203.6}).wait(1).to({graphics:mask_graphics_27,x:128.4,y:203.6}).wait(1).to({graphics:mask_graphics_28,x:131.6,y:203.6}).wait(1).to({graphics:mask_graphics_29,x:134.9,y:203.6}).wait(1).to({graphics:mask_graphics_30,x:114.1,y:156.8}).wait(11));

	// graph L1 lines copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AGXOeIgigjQgngigNACQgEAAgbgeQACAHgVgPQgWgPgBADQgngqgSgRIgngjIisigIgNgOIgDgBIghgiQAAgBgBAAQAAgBgBAAQAAAAAAABQAAAAAAABIhShXIgCABIgRgSQgKgNgGgFQAAgBgBAAQAAgBgBAAQAAAAAAAAQgBAAAAABIAAABQg5g7hPhVIgXgeIgGgKIAJAJIgKgLIgBgDIANAOIgOgPQAJAHARAUQgOgRAIAEQAGAEAPAPIgGgIQACAAAJALIAMANQABAAgLgNQgNgNAAgCIAXAXQAEACgKgKQgLgMABAAIASAUQgFgHACgBQABgBAAAAQAAgBAAAAQAAgBAAgBQAAgBgBAAIgIgRQAAgEARAPQAGAEAVAXIgLgRIAlAfQAiAeA3A6IAFAFQAqAtBsBvQByBzAXAVICDCGQBQBRAyA2QgEgDAHAJQAEAHgBAAIgBgBgAkchGIgXgFIgGgDIAIAAIgJAAIgCgCIALAAIgMAAIAWABQgNgDAFgCQAFgCAQgBIgJAAQAAgCAJABIAKABQABgBgKgBQgLAAgBgBIAUgBQACgBgJAAQgJAAAAgBIAQAAQgFgBABgCQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgJgEgBgCQgCgDANgCQAEgBAUAAIgNgDIAdgFQAdgDAvABIAEgBQAjABBgAAQBggBATgCIBxgBQBEgBAtABQgDABAHACQACABABAAQABAAAAABQABAAAAAAQAAAAgBABIgMAAIgSgBQgeAEgGALQAAADgZgBQAEADgPAFQgRAFABADIgxgBIitAQIgLAAIgCABIgEABIgYgBQgBAAAAAAQAAAAAAABQgBAAABAAQAAAAAAABIgvABIgZgCIgBABIgOAAQgKgCgFABIgCABIABACQg7gBg9gCgAmIl1IgPAJIAbgRQgSAJAFgGQAFgFATgOIgMAHQAAgCALgGIANgIQAAgCgMAIQgOAJgCAAQAQgMAIgFQACgDgKAHQgMAJAAgBIAUgOQgHAEgBgDQAAAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBAAIgQAEQgEAAAPgNQAEgEAYgQIgQAHIAggcQAegYA9gpIAFgDQAtgdByhPQB2hSAVgRICKhfICKhdQgDADAJgDQAJgEgDADIgPAKIgVAOQglAeABAMQAAACgeAUQAGAAgPARQgRARADACQgrAbgSANIjJCdIgPAJIgBADIgEADIgfAUQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAABAAIg5AoIgfATIAAACQgGAFgMAGIgTAMIgBACIABABQhXA7g8AmIgeAPIgKADIAKgHIgLAHIgEABg");
	this.shape.setTransform(182.8,199);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15).to({_off:false},0).wait(26));

	// fake news
	this.instance_2 = new lib.FakeNews("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(424.4,182,1.064,1.064,0,0,0,128.2,121.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:127.9,regY:130.1,x:538.7,y:153.4},0).wait(1).to({x:639.2,y:120},0).wait(1).to({x:725.8,y:91.2},0).wait(1).to({x:798.3,y:67.1},0).to({_off:true},1).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(387.5,309.1,528.9,369.4);
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