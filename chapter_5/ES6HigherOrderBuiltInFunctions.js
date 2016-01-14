var arr = [1,2,3,4,5,6,7,8,9,10];

//ES6 variants of the built-in higher order functions, these ones especially pertain to arrays !
console.log(arr.filter((n) => {return n%2==0 }));
console.log(arr.reverse().map((number) => {return number*number}));
console.log(arr.reduce((a,b) => {return min = Math.max(a,b) }))
