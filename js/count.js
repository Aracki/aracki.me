document.addEventListener("DOMContentLoaded", function (event) {
    // redirect to 7777 port
    // ping golang counter
    getRequest("localhost:7777/count", function (request) {
        var response = request.currentTarget.response || request.target.responseText;
        console.log(response);
    })
});

function getRequest(url, success) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = success;
    xhr.send();
    return xhr;
}