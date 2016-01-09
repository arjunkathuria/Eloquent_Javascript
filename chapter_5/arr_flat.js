// The excercise quess for flatening an Array

var arrays = [[1, 2, 3], [4, 5], [6],[7,8,9,10,11,12,13]];
function flat(arr) {
	var flatArr= arr.reduce(function (a,b) {
		return a.concat(b);
	})
	return flatArr;
}

console.log(flat(arrays));

