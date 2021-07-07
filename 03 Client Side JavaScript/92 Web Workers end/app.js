let worker = new Worker('./task.js');

worker.postMessage('Hello from main script');

worker.addEventListener('message', (e) => {
    console.log( e.data );
    worker.terminate();
});

// worker.terminate();