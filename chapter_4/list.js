function arrayToList (arr) {
	var list=null

	for (var i = arr.length - 1; i >= 0; i--) {
		var list ={value:arr[i],rest:list};
	};
	return list
}

console.log(arrayToList([10,20,30,40]));