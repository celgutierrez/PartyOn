$(function() {
    var action = 1;

    $("#phone").on("click", alertSys);

    function alertSys() {
        if (action == 1) {
            alert('Favorites: BFF, Roommate, Ex');
            action = 2;
        } else {
            alert('Favorites: BFF, Roommate, Ex');
            action = 1;
        }
    }


});
