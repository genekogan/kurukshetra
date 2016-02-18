function setup() {
  	createCanvas(500, 500);
}

function draw() {
	background(0, 0, 255);
	
	translate(mouseX, mouseY);
	
	ellipse(0, 0, 5, 5);
	rect(50, 150, 50, 50);
}