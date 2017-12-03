document.addEventListener("DOMContentLoaded", function (event) {
    // redirect to 7777 port
    // ping golang counter
    getRequest("http://www.aracki.me:7777/count", function (request) {
        var response = request.currentTarget.response || request.target.responseText;

        counter = document.getElementById("counter_text");
        if (counter != null) {
            document.getElementById("counter_text")
                .innerHTML = "[" + response + " unique visitors]";
        }
    })
});

// TODO NE RADI KADA JE DUGACAK ID
// TODO NE RADI KADA JE DUGACAK ID
// TODO NE RADI KADA JE DUGACAK ID

function getRequest(url, success) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = success;
    xhr.send();
    return xhr;
}

$('#back_to_home1').on('click', function () {
    window.location.href = 'index.html';
});

$('#back_to_home2').on('click', function () {
    window.location.href = 'index.html';
});

$('#yt_text').on('click', function () {
    window.location.href = "yt.html";
})

$('#yt_music.all').on('click', function () {
    window.location.href = 'https://www.youtube.com/playlist?list=PLixj0sfBDNycqalON_hUofYc05QDvBZxy';
})

// YT PLAYLISTS
$('#yt_disco.love').on('click', function () {
    window.location.href = 'https://www.youtube.com/playlist?list=PLixj0sfBDNyeBSLQ7tcvAebXORqCCe1D0';
})

$('#yt_dark.electronic').on('click', function () {
    window.location.href = 'https://www.youtube.com/playlist?list=PLixj0sfBDNyd1HMeDgLPyUU9lisSChdFv';
})

$('#yt_techno').on('click', function () {
    window.location.href = 'https://www.youtube.com/playlist?list=PLixj0sfBDNycXX3SzjVkuAbH6D_y2IFVH';
})

$('#yt_electronic.deep.progressive').on('click', function () {
    window.location.href = 'https://www.youtube.com/playlist?list=PLixj0sfBDNydn7k9ciczUXmmaxu6Z5iuX';
})

$('#yt_techno.techhouse').on('click', function () {
    window.location.href = 'https://www.youtube.com/playlist?list=PLixj0sfBDNyd8uSlKryP20EOkCHZav367';
})

$('#yt_psytrance.progressive').on('click', function () {
    window.location.href = 'https://www.youtube.com/playlist?list=PLixj0sfBDNyfRGdF8QsNWfxITKanVR3IU';
})

$('#yt_domestic.grooves').on('click', function () {
    window.location.href = 'https://www.youtube.com/playlist?list=PLixj0sfBDNyfSsjZz4e052dy6bBmjAYkO';
})

$('#yt_slow.melodies').on('click', function () {
    window.location.href = 'https://www.youtube.com/playlist?list=PL759DEC41B8F2BFD4';
})

$('#yt_psytrance.all').on('click', function () {
    window.location.href = 'https://www.youtube.com/playlist?list=PL7946349FB1A70DCC';
})

$('#yt_rap').on('click', function () {
    window.location.href = 'https://www.youtube.com/playlist?list=PL9C7007893FB8A75E';
})

$('#yt_music.all.2').on('click', function () {
    window.location.href = 'https://www.youtube.com/playlist?list=PLC5818F5DD42CD41A';
})

$('#yt_music.all').on('click', function () {
    window.location.href = 'https://www.youtube.com/playlist?list=PLixj0sfBDNycqalON_hUofYc05QDvBZxy';
})

$('#yt_albums.all').on('click', function () {
    window.location.href = 'https://www.youtube.com/watch?v=WmdgMezeP1s&list=PLixj0sfBDNydVkRDM48P-qYsvGwkcA1j1';
})

$('#yt_goa.trance').on('click', function () {
    window.location.href = 'https://www.youtube.com/playlist?list=PLixj0sfBDNyfQFF8ybiIcdju8temjlxB_';
})

$('#yt_psytrance.progressive').on('click', function () {
    window.location.href = 'https://www.youtube.com/playlist?list=PLixj0sfBDNyfRGdF8QsNWfxITKanVR3IU';
})

$('#yt_rock.evergreen').on('click', function () {
    window.location.href = 'https://www.youtube.com/playlist?list=PL68B6057C9E876C39';
})

$('#yt_classical.music').on('click', function () {
    window.location.href = 'https://www.youtube.com/playlist?list=PL861A215DF778BAE8';
})

$('#yt_electronika.all').on('click', function () {
    window.location.href = 'https://www.youtube.com/playlist?list=PLixj0sfBDNyfmmQnv8oTFeio-8_HEZrIF';
})

// ***************