
function changeImageOpacity() {
    var images = document.querySelectorAll('img');
    images.forEach(function(img) {
        img.style.opacity = '0.5';
    });
}

function loadXML(filePath, index) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var xmlDoc = xhr.responseXML;
            var detailsDiv = document.getElementById('details');
            detailsDiv.innerHTML = ''; // reset board

            // pull book, title, author, sold, description
            var books = xmlDoc.getElementsByTagName('book');
            var title = books[index].getElementsByTagName('title')[0].childNodes[0].nodeValue;
            var author = books[index].getElementsByTagName('author')[0].childNodes[0].nodeValue;
            var sold = books[index].getElementsByTagName('sold')[0].childNodes[0].nodeValue;
            var description = books[index].getElementsByTagName('description')[0].childNodes[0].nodeValue;

            // add title author sold, description
            detailsDiv.innerHTML += '<h3>' + title + '</h3>';
            detailsDiv.innerHTML += '<p><b>Author:</b> ' + author + '</p>';
            detailsDiv.innerHTML += '<p><b>Copies Sold:</b> ' + sold + ' million</p>';
            detailsDiv.innerHTML += '<p>' + description + '</p>';
        }
    };
    xhr.open('GET', filePath, true);
    xhr.send();
}

document.getElementById('don-quixote-img').addEventListener('click', function() {
    loadXML('../data/book-data.xml', 0);
    changeImageOpacity();
    this.style.opacity = '1';
});

document.getElementById('two-cities-img').addEventListener('click', function() {
    loadXML('../data/book-data.xml', 1);
    changeImageOpacity();
    this.style.opacity = '1';
});

document.getElementById('lotr-img').addEventListener('click', function() {
    loadXML('../data/book-data.xml', 2); 
    changeImageOpacity();
    this.style.opacity = '1';
});
