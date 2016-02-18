function setup() {
  	createCanvas(600, 600);
	noLoop();
}

function draw() {
	background(0);
	
	for (var i=0; i<12; i++) {
		for (var j=0; j<12; j++) {
			fill(random(255),255,255,random(200));
			rect(i*50, j*50, random(100), random(100));
		}		
	}
}