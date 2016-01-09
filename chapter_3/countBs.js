
function countChar(string,character){
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if(string.charAt(i)==character)
      counter += 1  ;
  }
  return counter;
}


function countBs(string) {
   return countChar(string,"B");
}

console.log(countBs("this is B a test B string b for TesBetinB"))
