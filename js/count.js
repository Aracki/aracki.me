document.addEventListener("DOMContentLoaded", function (event) {
    // redirect to 7777 port
    // ping golang counter
    getRequest("http://www.aracki.me:7777/count", function (request) {
        var response = request.currentTarget.response || request.target.responseText;

        document.getElementById("counterText")
            .innerHTML = "This page has been visited by " + response + " people";
    })
});

function getRequest(url, success) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = success;
    xhr.send();
    return xhr;
}