var ancestry =JSON.parse(require('./ancestry.js'))
var byName = {};
ancestry.forEach(function(person){
	byName[person.name]=person;
})

function reduceAncestors(person,f,defualtValue) {
	function valueFor(person) {
		if (person == null) 
			return defualtValue;
		else
			return f(person,valueFor(byName[person.mother]),valueFor(byName[person.father]));	
		
	}
	return valueFor(person);
}

function sharedDNA(person,fromMother,fromFather) {
	if (person.name=="Pauwels van Haverbeke") 
		return 1;
	else
		return (fromMother+fromFather)/2;
	
}

var ph = byName["Philibert Haverbeke"];

console.log(reduceAncestors(ph,sharedDNA,0)/4);