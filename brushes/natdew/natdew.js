////////////////////////////////////////////////////////////////////
// natdew.js
//
// basic natdew tool: draws a thin, solid line with circles
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
		// ellipse(pmouseX, pmouseY, mouseX + random(1, 2), mouseY + random(-1, -2));
		rect(pmouseX, pmouseY, 40, 10);

		noFill();
		stroke(forecolor);
		if (mouseIsPressed) {
			ellipse(pmouseX, pmouseY, mouseX - 60, mouseY - 20);
		}
	}
};
