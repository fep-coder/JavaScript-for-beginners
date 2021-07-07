console.log( 'doing a task...' );

addEventListener('message', (e) => {
    console.log( e.data );
    self.postMessage('Finished');
});

// self.close();