var z1, z2, z3, z4, z5, z6, z7;

function setup() {
  	createCanvas(500, 500);
	background(0);

	z1 = 0;
	z2 = 10;
	z3 = 20;
	z4 = 30;
	z5 = 40;
	z6 = 50;
	z7 = 60;
}

function draw() {
	
	z1 = z1 + 0.01;
	z2 = z2 + 0.01;
	z3 = z3 + 0.01;
	z4 = z4 + 0.01;
	z5 = z5 + 0.01;
	z6 = z6 + 0.01;
	z7 = z7 + 0.01;

	// position
	var x = 500 * noise(z1);
	var y = 500 * noise(z2);
	var w = 300 * noise(z3);
	var h = 300 * noise(z4);
	
	// color
	var r = 255 * noise(z5);
	var g = 255 * noise(z6);
	var b = 255 * noise(z7);
	
	fill(r, g, b);
	ellipse(x, y, w, h);
}