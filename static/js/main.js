$(function() {
    console.log('good to go');
    var action = 1;

    $("button").on("click", alertSys);

    function alertSys() {
        if (action == 1) {
            alert('Favorites: Dad');
            action = 2;
        } else {
            alert('Favorites: Dad');
            action = 1;
        }
    }


});
