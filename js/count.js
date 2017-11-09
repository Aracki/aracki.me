document.addEventListener("DOMContentLoaded", function (event) {
    // redirect to 7777 port
    // ping golang counter
    httpGetAsync("http://www.aracki.me:7777", function (res) {
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
    xmlHttp.setRequestHeader("Access-Control-Allow-Origin", '*');
    xmlHttp.setRequestHeader("Access-Control-Allow-Methods", 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    xmlHttp.setRequestHeader("Access-Control-Allow-Headers", 'Origin, Content-Type, X-Auth-Token');
    xmlHttp.send("ivan");
}