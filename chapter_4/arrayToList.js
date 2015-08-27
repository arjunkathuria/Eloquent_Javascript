function arrayToList (arr) {
	var list = null
	for (var i = arr.length - 1; i >= 0; i--) {
		list = {value: arr[i] , rest: list};
	};
	return list
}

function listToArray (list) {
	var arr = [];
	for(var node= list; node ; node = rest ){
		arr.push(node.value);
	}
	return arr
};

function prepend (element,list) {
	var newList= {value:element,rest:list}
	return newList
}

function nth (list,postion) {
	if (!list) {return undefined}
	else if(n == 0) {return list.value}
	else{list=list.rest;
		nth(list,n-1)
	}
}