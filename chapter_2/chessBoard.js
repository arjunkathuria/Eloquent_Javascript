var op = "";
var hash = "#";
var space = " ";
var nextLine = "\n";

for (var i = 0; i < 8; i++) {
	for (var j = 0; j < 4 ; j++) {
		if (i%2==0) {
			op += hash;
			op += space;
		}
		else {
			op += space;
			op += hash;
		}
	}
	op += nextLine;
}

console.log(op);
