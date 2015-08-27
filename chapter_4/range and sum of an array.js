function range (start,end,steps) {
	if (steps=null) step = 1;
	var arr = [];	
	if (steps>0) {
		for(var i = start;i<=end;i+=steps){
		arr.push(i);
	}
	} else{
		for(var i = start;i>=end;i+=steps){
		arr.push(i);
	}
	};
	return arr;
}

function sum (arr) {
	var sumOfArr = 0;
	for (var i = 0; i < arr.length; i++) {
		sumOfArr+=arr[i]
	};

	return sumOfArr;
}

console.log(range(10,1,-3));

