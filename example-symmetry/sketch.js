function setup() {
  	createCanvas(600, 600);
}

function draw() {
	var n = 10;
	var rad = 150;
	
	background(0);

	translate(width/2, height/2);
	ellipse(0, 0, 50, 50);
	for (var i=0; i<n; i++) {
		push();
		var angle = TWO_PI * (i / n);
		rotate(angle);	
		ellipse(rad, 0, 20, 20);
		pop();
	}
	
}