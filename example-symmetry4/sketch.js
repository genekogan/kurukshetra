var z1, z2, z3, z4, z5, z6, z7, z8;

function setup() {
  	createCanvas(600, 600);

	z1 = 0;
	z2 = 10;
	z3 = 20;
	z4 = 30;
	z5 = 40;
	z6 = 50;
	z7 = 60;
	z8 = 70;
}

function draw() {
	var n = 12;
	var n2 = 25;
	var rad = 300 * noise(z1);
	var rad2 = 300 * noise(z2);
	
	var x1 = 300 * noise(z3);
	var y1 = 300 * noise(z4);
	var x2 = 300 * noise(z5);
	var y2 = 300 * noise(z6);
	var x3 = 300 * noise(z7);
	var y3 = 300 * noise(z8);
	
	background(0);

	stroke(255);
	fill(255, 255, 255, 80);
	
	translate(width/2, height/2);
	ellipse(0, 0, 50, 50);
	for (var i=0; i<n; i++) {
		push();
		var angle = TWO_PI * (i / n);
		rotate(angle);		
		translate(rad, 0);
		ellipse(0, 0, 20, 20);
		for (var j=0; j<n2; j++) {
			push();
			var angle2 = TWO_PI * (j / n2);
			rotate(angle2);
			//triangle(x1, y1, x2, y2, x3, y3);
			bezier(x1, y1, x2, y2, x3, y3, x2, y2);
			pop();
		}
		pop();
	}
	
	z1 = z1 + 0.013;	
	z2 = z2 + 0.009;
	z3 = z3 + 0.011;
	z4 = z4 + 0.012;
	z5 = z5 + 0.005;
	z6 = z6 + 0.007;
	z7 = z7 + 0.010;
	z8 = z8 + 0.016;
}