var input = document.querySelector('input');
var keyArr = [81,87,88,113,119,120];
input.addEventListener("keypress",function (event) {
    var key = event.keyCode || event.which ;
    if(keyArr.indexOf(key) > -1 ){
        event.preventDefault();}
});