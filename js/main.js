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

$('#yt_text').on('click', function() {
    window.location.href = "yt.html";
})

$('#yt1').on('click', function() {
    window.location.href = 'https://www.youtube.com/playlist?list=PLixj0sfBDNycqalON_hUofYc05QDvBZxy';
})

$('#yt2').on('click', function() {
    window.location.href = 'https://www.youtube.com/playlist?list=PLixj0sfBDNyeLB8CoFDMjbctA749M42tq';
})

$('#yt3').on('click', function() {
    window.location.href = 'https://www.youtube.com/playlist?list=PLixj0sfBDNyfmmQnv8oTFeio-8_HEZrIF';
})

$('#back_to_home').on('click', function() {
    window.location.href = 'index.html';    
});