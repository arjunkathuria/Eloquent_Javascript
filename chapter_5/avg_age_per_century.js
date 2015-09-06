// var ancestory = JSON.parse(require('./ancestry'))

// var centuryList = {};

// var byCentury = {}
// var arr15
// ancestory.forEach(function(person){
// 	var century =Math.ceil(person.died/100);
// 	if (!(century in byCentury)) 
// 		byCentury[century]=[person];
// 	else
// 		byCentury[century].push(person);
// })

// for (var century in byCentury) {
// 	 console.log ( century + ": " + byCentury[century].map(function (person) {
// 		return person.died - person.born;
// 	}).reduce(function(a,b){return a+b})/byCentury[century].length)
// }

// **************** IMPROOVED SOLUTION ******************   \\

var ancestory = JSON.parse(require('./ancestry'))

function groupBy(arr,groupingFunction){
	var groups = {};
	arr.forEach(function(element) {
		var groupName = groupingFunction(element)
		if (groupName in groups) {
			groups[groupName].push(element)
		} else {
			groups[groupName]=[element];
		}	
	});
	return groups
}

function average(arr) {
	function plus(a,b){return a+b}
	return arr.reduce(plus)/arr.length;
}

var byCentury = groupBy(ancestory,function(person){
	return Math.ceil(person.died/100);
})

for(var century in byCentury){
	var arr = byCentury[century].map(function(person){return person.died-person.born;})
	console.log(century +" : "+ average(arr));
	
}