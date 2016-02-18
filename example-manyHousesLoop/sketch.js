function setup() {
  	createCanvas(800, 700);
}

function draw() {
	background(0, 0, 255);

	for (var i=0; i<10; i++) {
		for (var j=0; j<10; j++) {
			push();
			translate(70*i, 70*j);
			house();
			pop();
		}
	}	
}

function house() {
	rect(0, 0, 50, 50);
	triangle(-5, 0, 55, 0, 25, -25);
	rect(5, 5, 8, 12);
}