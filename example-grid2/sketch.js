function setup() {
  	createCanvas(600, 600);
	noLoop();
}

function draw() {
	background(0);
	
	var rows = 15;
	var cols = 15;
	
	var rowHeight = height / rows;
	var colWidth = width / cols;
	
	
	for (var i=0; i<cols; i++) {
		for (var j=0; j<rows; j++) {
			fill(random(255),255,255,random(200));
			rect(i * colWidth, j * rowHeight, random(100), random(100));
		}		
	}
}