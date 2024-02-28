
function changeImageOpacity() {
    var images = document.querySelectorAll('img');
    images.forEach(function(img) {
        img.style.opacity = '0.5';
    });
}

function loadHTML(filePath) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('details').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', filePath, true);
    xhr.send();
}

document.getElementById('don-quixote-img').addEventListener('click', function() {
    loadHTML('../data/cervantes-data.html');
    changeImageOpacity();
    this.style.opacity = '1';
});

document.getElementById('two-cities-img').addEventListener('click', function() {
    loadHTML('../data/dickens-data.html');
    changeImageOpacity();
    this.style.opacity = '1';
});

document.getElementById('lotr-img').addEventListener('click', function() {
    loadHTML('../data/tolkien-data.html');
    changeImageOpacity();
    this.style.opacity = '1';
});
