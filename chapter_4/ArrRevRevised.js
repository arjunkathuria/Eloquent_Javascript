function reverseArray(arr) {
  var revArr = [];
  while (arr.length != 0) {
  revArr.push(arr.pop())  ;
  }
  return revArr;
}

function reverseArrayInPlace(arr){
var start,end;
  for(var i=0;i<Math.floor(arr.length/2);i++){
    start = i;
    end = arr.length - 1 - start;
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
  }
  return arr
};

function reverseArrayInPlacePart2(arr) {
  var length = arr.length
  
}

console.log(reverseArrayInPlace([1,2,3,4,5,6,7,8,9]))
