(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.lotteryballs = function() {
	this.initialize(img.lotteryballs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3200,1680);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF","#161616","#191919","#000000"],[0.282,0.596,1,1,1],0,0,0,0,0,26.1).s().p("Ai3C1QhMhLAAhqQAAhpBMhLQBMhLBrAAQBrAABNBLQBMBLAABpQAABqhMBLQhNBLhrAAQhrAAhMhLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-25.6,52,51.2);


(lib.kaftor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.lotteryballs();
	this.instance.parent = this;
	this.instance.setTransform(-274.1,-177.6,0.171,0.211);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274.1,-177.6,548.3,355.2);


// stage content:
(lib.lottery_annaStrijko = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var home = this;
		var counter = 0;
		
		
		home.kaftor.addEventListener("click", clickonit)
		home.resetbtn.addEventListener("click", reset)
		
		function clickonit() {
		
			num = parseInt((Math.random() * 10) + 1);
			home.txtbox.text = num;
		
			if (num == 1 || num == 10) {
				home.txtbox.text = num + "\n" + " boom";
				home.kaftor.alpha -= 0.2;
				counter = counter + 1;
			}
			home.countbox.text = counter;
		}
		
		function reset() {
			home.kaftor.alpha = 1;
			counter = 0;
			home.txtbox.text = "הגרל מספר";
			home.countbox.text = counter;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.countbox = new cjs.Text("", "40px 'Arial'");
	this.countbox.name = "countbox";
	this.countbox.textAlign = "center";
	this.countbox.lineHeight = 47;
	this.countbox.lineWidth = 144;
	this.countbox.parent = this;
	this.countbox.setTransform(469,323);

	this.resetbtn = new lib.Symbol1();
	this.resetbtn.name = "resetbtn";
	this.resetbtn.parent = this;
	this.resetbtn.setTransform(468.8,346.6);
	new cjs.ButtonHelper(this.resetbtn, 0, 1, 1);

	this.txtbox = new cjs.Text("הגרל\nמספר", "40px 'Arial'");
	this.txtbox.name = "txtbox";
	this.txtbox.textAlign = "center";
	this.txtbox.lineHeight = 47;
	this.txtbox.lineWidth = 157;
	this.txtbox.parent = this;
	this.txtbox.setTransform(274.5,256.1);

	this.kaftor = new lib.kaftor2();
	this.kaftor.name = "kaftor";
	this.kaftor.parent = this;
	this.kaftor.setTransform(275.9,222.4,1.006,1);
	new cjs.ButtonHelper(this.kaftor, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.kaftor},{t:this.txtbox},{t:this.resetbtn},{t:this.countbox}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,244.8,551.7,355.2);
// library properties:
lib.properties = {
	id: 'D0673AF7CD263346914D84A1B9B95318',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/lotteryballs.jpg?1541260292563", id:"lotteryballs"}
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
an.compositions['D0673AF7CD263346914D84A1B9B95318'] = {
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