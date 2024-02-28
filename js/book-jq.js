
$(document).ready(function() {
    $('#don-quixote-img').click(function() {
        $('img').fadeTo('slow', 0.5);
        $('#don-quixote-img').fadeTo('slow', 1);
        $('#details').load('https://nathanieljbro.rhody.dev/lab5/data/cervantes-data.html', function() {
            $(this).hide().slideDown('slow');
        });
    });

    $('#two-cities-img').click(function() {
        $('img').fadeTo('slow', 0.5);
        $('#two-cities-img').fadeTo('slow', 1);
        $('#details').load('https://nathanieljbro.rhody.dev/lab5/data/dickens-data.html', function() {
            $(this).hide().slideDown('slow');
        });
    });

    $('#lotr-img').click(function() {
        $('img').fadeTo('slow', 0.5);
        $('#lotr-img').fadeTo('slow', 1);
        $('#details').load('https://nathanieljbro.rhody.dev/lab5/data/tolkien-data.html', function() {
            $(this).hide().slideDown('slow');
        });
    });
});
