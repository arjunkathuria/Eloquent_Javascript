addEventListener("message", function (event) {
   var startTime = Date.now();
    while(Date.now() < startTime + 3000) {}
    postMessage(event.data * event.data);
})