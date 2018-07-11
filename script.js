window.onload = function init(){
	var gridSize = 100;
	var i, j;
	var root = document.getElementById('root');
	var div = document.createElement("div");
	for (i = 0; i < gridSize; i++) {
		var row = document.createElement("div");
		row.className = "row";
		row.setAttribute("id", "row" + i);
		root.appendChild(row);
		for (j = 0; j < gridSize; j++) {
			var row = document.getElementById("row" + i);
			var column = document.createElement("div");
			column.className = "column";
			column.setAttribute("id", i + ", " + j);
			column.setAttribute("onMouseOver", "displayInfo(" + i + ", " + j + ")");
			row.appendChild(column);
		}
	}
	var display = document.createElement("div");
	display.className = "display";
	display.setAttribute("id", "display");
	root.appendChild(display);
};

function displayInfo(x, y) {
	var display = document.getElementById("display");
	var info = "";
	info += "<pre>";
	info += x + "<br>";
	info += "x " + y + "<br>";
	info += "----------------" + "<br>";
	info += (x * y) + "<br>";
	info += "<br>";
	info += "<br>";
	info += x + " x " + Math.trunc(y/10) * 10 + "    ---->    ";
	info += x * Math.trunc(y/10) + "<span class='weak'>0</span><br>";
	info += x + " x " + (y%10) + "    ---->    ";
	info += "+ " + (x * (y%10)) + "<br>";
	info += "----------------" + "<br>";
	info += x * y + "<br>";
	info += "</pre>";
	
	display.innerHTML = info;
}