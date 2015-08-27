function range (start,end,steps) {
	var arr = [];	
	if (arguments.length<3) {
		
		if (end>start) {

		for(var i = start;i<=end;i++){
		arr.push(i);
	}
		} else{
			for(var i = start;i>=end;i--){
		arr.push(i);
	}
		};

	}

	else{
		if (arguments[2]<0) {for(var i = start;i>=end;i+=steps){
		arr.push(i);
	}} else{
		for(var i = start;i<=end;i+=steps){
		arr.push(i);
	}
	};
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

