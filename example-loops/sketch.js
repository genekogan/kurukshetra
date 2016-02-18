function setup() {
  	createCanvas(500, 500);
}

function draw() {
	background(0);
	
	// these are variables: x, y
	var x = mouseX;
	var y = mouseY / 10;
	
	fill(255);

	for (var i=0; i<50; i++) {
		fill(i*4, 250-i*5, 90-2*i);
		
		if (i < y) {
			rect(i*10, i*10, x, 250);
		}
		else {
			ellipse(i*10, i*10, x, 250);
		}
	}
	
}