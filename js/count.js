document.addEventListener("DOMContentLoaded", function (event) {
    // redirect to 7777 port
    // ping golang counter
    httpGetAsync("http://www.google.rs", function (res) {
        alert(res);
    })
});

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            callback(xmlHttp.responseText);
    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send("ivan");
}