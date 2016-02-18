function setup() {
  	createCanvas(500, 500);
	background(0);
}

function draw() {
	fill(random(255), random(255), random(255));
	ellipse(mouseX, mouseY, random(100), random(100));
}