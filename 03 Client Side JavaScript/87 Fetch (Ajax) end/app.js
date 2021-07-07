document.querySelector('button#getText').addEventListener('click', function () {
    fetch('text.txt')
        .then(response => response.text())
        .then(text => console.log( text ))
        .catch(error => console.log( 'There was an error: ', error ));
});

document.querySelector('button#getFile').addEventListener('click', function () {
    fetch('fruit.jpg')
        .then(response => response.blob())
        // .then(blob => console.log( blob ))
        .then(blob => console.log( blob.type ))
        .catch(error => console.log( 'There was an error: ', error ));
});

// GET
document.querySelector('button#get').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        // .then(json => console.log( json ))
        .then(json => console.log( json.title ))
        .catch(error => console.log( 'There was an error: ', error ));
});

// POST
let post = {
    title: 'Some Title',
    body: 'Some body',
    userId: 99
}

document.querySelector('button#post').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(json => console.log( json ))
        .catch(error => console.log( 'There was an error: ', error ));
});

// UPDATE
let updatePost = {
    title: 'Some Title',
    body: 'Some body',
    userId: 99,
    id: 1
}

document.querySelector('button#update').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify(post),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(json => console.log( json ))
        .catch(error => console.log( 'There was an error: ', error ));
});

// DELETE
document.querySelector('button#delete').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    })
    .then(response => console.log( response.json() ));
});