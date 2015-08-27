function(array,combineFunction,start){
	var current = start;
	for (var i = 0; i < array.length; i++) {
		current = combineFunction(current ,array[i]);
	}
	return current; 
}

function average (array){
	function plus (a,b){return a + b};
	return array.reduce(plus)/array.length;
};

function age(person) {return p.died - p.born}
function male(person){return person.sex == "male"}
function female(person){return person.sex == "female"}


console.log(average(ancestory.filter(male).map(age)));
