function setup() {
  	createCanvas(800, 700);
}

function draw() {
	background(0, 200, 0);
	
	var angle = 0.02 * mouseX;
	
	rotate(angle);
	
	rect(150, 100, 100, 100);
}