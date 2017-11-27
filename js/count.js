document.addEventListener("DOMContentLoaded", function (event) {
    // redirect to 7777 port
    // ping golang counter
    getRequest("http://www.aracki.me:7777/count", function (request) {
        var response = request.currentTarget.response || request.target.responseText;

        document.getElementById("counter_text")
            .innerHTML = "[" + response + " unique visitors]";
    })
});

function getRequest(url, success) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = success;
    xhr.send();
    return xhr;
}