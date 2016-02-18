function setup() {
  	createCanvas(500, 500);
}

function draw() {
	background(0, 255, 0);

	// this is a house!
	fill(255, 255, 255);
	rect(200, 300, 200, 200);
	triangle(150, 300, 450, 300, 300, 200);
	fill(0, 255, 0);
	rect(240, 340, 80, 45);
	rect(310, 420, 30, 80);
}