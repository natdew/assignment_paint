////////////////////////////////////////////////////////////////////
// natdew.js
//
// basic natdew tool: draws circlular tunnel with a line of rectangles in it
// author: Natasha Dewitz



////////////////////////////////////////////////////////////////////
// create and install brush

var natdew = new Brush("natdew", "./brushes/natdew/natdew.svg");
brushes.push(natdew);


////////////////////////////////////////////////////////////////////
// define brush behavior

natdew.draw = function() {

	fill(forecolor);
	noStroke();
	if (mouseIsPressed) {
		rect(pmouseX, pmouseY, 40, 10);

		noFill();
		stroke(forecolor);
		if (mouseIsPressed) {
			ellipse(pmouseX, pmouseY, mouseX - 60, mouseY - 20);
		}
	}
};
