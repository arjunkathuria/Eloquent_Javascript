var squareWorker = new Worker('./square-worker.js');

squareWorker.addEventListener('message', function (event) {
    console.log("the web worker responded with ", event.data);
});

squareWorker.postMessage(10);
squareWorker.postMessage(24);