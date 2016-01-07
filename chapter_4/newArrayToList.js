function arrayToList(arr){
  var list = null;
  for (var i= arr.length - 1 ; i>=0;i--) {
    list = { value:arr[i], rest: list} ;
  }
  return list
}

function listToArray(list) {
  var arr = [];
  for(var node = list; node ; node=node.rest)
    arr.push(node.value)
  return arr;
}

function nth(list,n) {
  if(!list)
    return undefined;
  if(n == 0)
    return list.value;
  else
    return nth(list.rest,n-1);

}

console.log(nth(arrayToList([10, 20, 30]), 1));
