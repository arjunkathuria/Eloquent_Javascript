document.body.style.background = "orange";

setInterval(function () {
    if(document.body.style.background == "orange")
        document.body.style.background = "aqua";
    else if (document.body.style.background == "aqua")
        document.body.style.background = "orange";
}, 1000);

var bombTimer = setTimeout(function () {
    console.log("Boom!");
},50);

if (Math.random() < 0.5){
    //50-50 chance
    console.log("Defused!");
    clearTimeout(bombTimer)
}

var tick = 0;
var clock = setInterval(function(){
    console.log("tick: ", tick++);
    if(tick == 100){
        console.log("enough ticks for today!");
        clearInterval(clock);
    }
},50)