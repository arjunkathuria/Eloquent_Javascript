function wrapValue(n) {
	var localVariable = n;
	return function () {
		return localVariable;
	}
}
var wrap1 = wrapValue(5);
var wrap1 = wrapValue(17);

console.log(wrap1());
console.log(wrap2());
