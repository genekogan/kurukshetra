function setup() {
  	createCanvas(800, 700);
}

function draw() {
	background(0, 0, 255);

	translate(50, 50);
	house();
	
	translate(250, 200);
	house();
	
	translate(100, 0);
	house();
}

function house() {
	rect(0, 0, 200, 200);
	triangle(-25, 0, 225, 0, 100, -100);
	rect(30, 20, 30, 45);
}