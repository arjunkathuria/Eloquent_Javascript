function range(start,end,step) {
  var arr = [];
  if(step == null) step = 1;
  if(step>0)  {
  for (var i = start; i <=end; i+=step)) {
    arr.push(i);
    }
  }
  else {
  for (var i = start; i >=end; i+=step)) {
    arr.push(i);
  }
  return arr;
}

function sum(arr) {
  var result = 0;
  while (arr.length!=0) {
    result += arr.shift();
  }
  return result;
}

console.log(range(1,10));
