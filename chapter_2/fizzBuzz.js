for(var i = 1 ;i <= 100;i++){
  var op = "";
  if (i%3==0) {
    op += "Fizz"
  }
  if (i%5==0) {
    op += "Buzz"
  }
  if (!(i%3==0||i%5==0)) {
    op=i;
  }

    console.log(op);
}
