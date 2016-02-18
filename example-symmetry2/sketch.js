function setup() {
  	createCanvas(600, 600);
}

function draw() {
	var n = 8;
	var n2 = 5;
	var rad = mouseX / 4;
	var rad2 = mouseY / 4;
	
	background(0);

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
			ellipse(rad2, 0, 15, 15);
			pop();
		}
		pop();
	}	
}