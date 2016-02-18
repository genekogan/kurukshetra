var z1, z2, z3, z4, z5, z6, z7, z8;

function setup() {
  	createCanvas(windowWidth, windowHeight);

	noFill();
	stroke(0, 20);

	frameRate(5);

	z1 = 0;
	z2 = 100;
	z3 = 200;
	z4 = 300;
	z5 = 400;
	z6 = 500;
	z7 = 600;
	z8 = 700;
}

function draw() {
	background(255,0,0);
	
	var t = millis();
	
	var t2 = frameCount;
	
	z1 = z1 + 0.01;
	z2 = z2 + 0.01;
	z3 = z3 + 0.01;
	z4 = z4 + 0.01;
	z5 = z5 + 0.01;
	z6 = z6 + 0.01;
	z7 = z7 + 0.01;
	z8 = z8 + 0.01;
	
	var x1 = 500 * noise(z1);
	var y1 = 500 * noise(z2);
	var x2 = 500 * noise(z3);
	var y2 = 500 * noise(z4);
	var x3 = 500 * noise(z5);
	var y3 = 500 * noise(z6);
	var x4 = 500 * noise(z7);
	var y4 = 500 * noise(z8);
	
	
	bezier(x1, y1, x2, y2, x3, y3, x4, y4);
}