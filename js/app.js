$(document).ready(function () {

    /*Defining global variables*/
    console.log('Welcome to console');
    var submissions = 0;


    /*Allows an "Enter" keystroke to work as a submit button for input field*/
    function getItem(){
        $('#add-items').keydown(function (enter) {
            if (enter.keyCode == 13) {
                postItem();
            }
        });
    }

    /*Takes returned value from previous function and manipulates it*/
    function postItem(){
        var item = $('#add-items').val();
        var work = $('<p class="full-width no-strikethrough">'+ xMark + item + checkMark + '</p>';);
        $('.rounded-list').prepend(work);
        $('#add-items').val('');
        $('.rounded-list p:first-child');
    });

/*Clears all items on list*/
$(document).on("click", "#startover", function(){
    $(".rounded-list").empty();
    submissions = 0;
});

/*Allows user to delete items*/
$(document).on("click", ".delete", function(){
    $(this).closest('li').fadeOut(300);
});

/*Allows user to check off items*/
$(document).on("click", ".cross-off", function(){
    if (!$(this).closest('li').hasClass('strikethrough')) {
        console.log("I am going to add a strikethrough");
        $(this).closest('li').addClass("strikethrough");
        $(this).siblings('.delete').addClass("alt-delete");
        $(this).addClass("alt-cross-off");
   }
   else {
        console.log("I am going to remove a strikethrough");
        $(this).closest('li').removeClass("strikethrough");
        $(this).siblings('.delete').removeClass("alt-delete");
        $(this).removeClass("alt-cross-off");
   }
   
});