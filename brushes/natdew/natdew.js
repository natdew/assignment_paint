////////////////////////////////////////////////////////////////////
// natdew.js
//
// basic natdew tool: draws a thin, solid line
// author: Justin Bakse



////////////////////////////////////////////////////////////////////
// create and install brush

var natdew = new Brush("natdew", "./brushes/natdew/natdew.svg");
brushes.push(natdew);



////////////////////////////////////////////////////////////////////
// define brush behavior

natdew.draw = function() {
	noFill();
	stroke(forecolor);

	if (mouseIsPressed) {
		ellipse(pmouseX, pmouseY, 10, 10);
		line(pmouseX, pmouseY, mouseX, mouseY);
	}
};
