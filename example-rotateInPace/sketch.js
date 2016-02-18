function setup() {
  	createCanvas(800, 700);

	// rectMode makes the x, y of a 
	// rect (first two arguments) refer
	// to the center of the rect, rather
	// than the top left corner

	//rectMode(CENTER);
}

function draw() {
	background(0, 200, 0);
	
	var angle = 0.02 * mouseX;

	translate(250, 200);	
	rotate(angle);	
	rect(0, 0, 100, 100);
}