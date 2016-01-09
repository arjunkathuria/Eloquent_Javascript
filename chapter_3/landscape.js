function landscape() {
  var result = "";

  var flat = function(n){
    for (var i = 0; i < n; i++) {
      result += "_";
    }
  }

  var mountain = function(n){
    result += "/";
    for(var i = 0; i < n; i++){
        result += "'";
    }
    result += "\\";
  }

               flat(3);
               mountain(4);
               flat(6);
               mountain(1);
               flat(1);
               return result; // could have printed a value but then that would make this funciton usefull
                              // as a side effect, instead we made it return a value which makes it more
                              // useful and them when needed we logged it with consle.log(); :D
}
console.log(landscape());
