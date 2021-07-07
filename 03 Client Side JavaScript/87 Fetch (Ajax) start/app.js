/**
* AJAX
*/

/*
    Ajax is a technique that allows web pages to communicate asynchronously with a
    server and to dynamically update web pages without reloading.
*/

/*
    Ajax used to be done with the XMLHttpRequest object, but it was tedious to use and people usually used it with a helper library,
    such as jQuery. Nowadays, the XMLHttpRequest object has been superseded by the Fetch API, which is the new standard 
    for requesting and sending data asynchronously across a network.
*/

/*
    The Fetch API provides a global fetch() method that only has one mandatory
    argument, which is the URL of the resource you wish to fetch
*/

/*
    Let's see an actual example by getting data from a text file which we will get by clicking the appropriate button
*/

document.querySelector('button#getText').addEventListener('click', () => {
    fetch('text.txt') // fetch returns a promise
        .then(response => response.text()) // returns a promise as well
        .then(text => console.log(text))
        .catch(error => console.log('There was an error: ', error));
});

/*
    So that was a simple GET request, and fetch uses the GET request by default
*/

/*
    The blob() method is used to read a file of raw data, such as an image or a spreadsheet
*/

document.querySelector('button#getFile').addEventListener('click', () => {
    fetch('fruit.jpg')
        .then(response => response.blob())
        // .then(blob => console.log( blob ))
        .then(blob => console.log(blob.type))
        .catch(error => console.log('There was an error: ', error));
});

/*
    Let's now see how to work with JSON, which is the most common format for AJAX responses.
    The json() method is used to deal with these.
    I am gonna use a website called jsonplaceholder for JSON examples (show website), since it provides a great API to work with.
*/

/*
    So I am gonna GET (use the get method) a single post with an id of 1 (show url in browser to see what we're expecting to get)    
*/
document.querySelector('button#get').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(json => console.log(json))
        // .then(json => console.log( json.title ))
        .catch(error => console.log('There was an error: ', error));
});

// show network tab and fetch instead of xhr

/*
    Now I am gonna use the POST method to post something.
    This isn't actually gonna post it to jsonplaceholder because of coutse they can't allow anyone to post stuff,
    but we will get a response from them which means that the post method worked
*/

// Create an object to POST
let post = {
    title: 'Some Title',
    body: 'Some Body',
    userId: 99
}

document.querySelector('button#post').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log('There was an error: ', error));
});

/*
    UPDATE
*/
// Create an object to POST
let updatePost = {
    id: 1,
    title: 'Some Title',
    body: 'Some Body',
    userId: 99
}

document.querySelector('button#update').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify(updatePost),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log('There was an error: ', error));
});

/*
    Again, we are not actually gonna update the post on jsonplaceholder (see https://jsonplaceholder.typicode.com/posts/1)
    but based on what is returned it is a success, meaning it would actually update the post if we were using our own API
    where we could actually post update and delete stuff
*/

/*
    DELETE
*/
document.querySelector('button#delete').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE'
    });
    // .then(response => console.log(response.json()));
});

/*****************************************************************************************************************************************************************/