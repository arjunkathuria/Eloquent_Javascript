var map = {};

function storePhi(event,phi) {
  map[event]= phi;
}

storePhi("pizza",0.69);
storePhi("study",0.75);

console.log(map);

for (var okay in map){
  console.log("the correlation for the event " + okay + " is "+ map[okay]);
}
