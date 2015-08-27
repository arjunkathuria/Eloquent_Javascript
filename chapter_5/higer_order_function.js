var numbers = [1,2,3,4,5];

numbers.forEach(function (number) {
  console.log(number);
});


function greaterThan(m) {
  return  function (n) { return n > m; };
}

var greaterThan10 = greaterThan(10);

console.log(greaterThan10(9));
