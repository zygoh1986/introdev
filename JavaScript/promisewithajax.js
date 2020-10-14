const loadURL = (url) => {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'html';
        request.onload = () => {
            if (request.status === 200) 
                resolve(request.response);
            else 
                reject(Error(alert('Error')));   
        };
        request.onerror = function () {
            reject(Error('There was a network error.'));
        };
        request.send();
    });
}

loadURL('http://127.0.0.1:5500/JS%20Foundations/General%20Hands%20On/js/errorhandling.html').then((response) => {
    console.log(response);
}, (Error) => {
    console.log(Error);
});