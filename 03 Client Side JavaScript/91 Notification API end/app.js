// if (window.Notification) {
//     Notification.requestPermission()
//         .then(function () {
//             if (Notification.permission === 'granted') {
//                 new Notification('Hello from JavaScript');
//             }
//         });
// }

let notification = new Notification('JavaScript', {
    body: 'JavaScript is the best',
    icon: 'bananas.jpg'
});

if (window.Notification) {
    Notification.requestPermission()
        .then(function () {
            if (Notification.permission === 'granted') {
                notification;
            }
        });
}

setTimeout(() => {
    notification.close();
}, 2000);

notification.addEventListener('click', () => console.log( 'Notification click event triggered' ));