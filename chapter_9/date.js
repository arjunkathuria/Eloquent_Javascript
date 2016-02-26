// practicing the date stuff in Js, we have this cool Date constructor
//testing the match op on string similar to exec on a RegEx and the date stuff combined;

function findDate(string){
  var dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/;
  var match = dateTime.exec(string);

  return new Date(match[3],match[2]-1,match[1]);
}

console.log(findDate('5-7-1994'));

//if a single argumet is passed in the Date constructor then it takes is as the miliseconds

console.log(new Date(1)); // gives the time in unix time in my timezone
 
