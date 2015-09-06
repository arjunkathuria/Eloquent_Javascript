var ancestory = JSON.parse(require('./ancestry'));

var byName ={};
ancestory.forEach(function (person) {
	byName[person.name]= person;
})

var differences = ancestory.filter(function(person){return byName[person.mother]!=null }).map(function(person){return person.born - byName[person.mother].born});

function average(arr){
	function plus (a,b){return a + b};
	return arr.reduce(plus,0)/arr.length;
}

console.log(
	average(differences)
);