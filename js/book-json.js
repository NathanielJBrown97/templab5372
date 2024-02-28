
function changeImageOpacity() {
    var images = document.querySelectorAll('img');
    images.forEach(function(img) {
        img.style.opacity = '0.5';
    });
}

function loadJSON(filePath, index) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            var book = data.books[index];
            var detailsDiv = document.getElementById('details');
            detailsDiv.innerHTML = ''; 

            var newHtml = '<h3>' + book.title + '</h3>' +
                          '<p><b>Author:</b> ' + book.author + '</p>' +
                          '<p><b>Copies Sold:</b> ' + book.sold + ' million</p>' +
                          '<p>' + book.description + '</p>';
            
            detailsDiv.innerHTML = newHtml; 
        }
    };
    xhr.open('GET', filePath, true);
    xhr.send();
}

document.getElementById('don-quixote-img').addEventListener('click', function() {
    loadJSON('../data/book-data.json', 0); 
    changeImageOpacity();
    this.style.opacity = '1';
});

document.getElementById('two-cities-img').addEventListener('click', function() {
    loadJSON('../data/book-data.json', 1); 
    changeImageOpacity();
    this.style.opacity = '1';
});

document.getElementById('lotr-img').addEventListener('click', function() {
    loadJSON('../data/book-data.json', 2); 
    changeImageOpacity();
    this.style.opacity = '1';
});
