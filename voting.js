$(function() {
    $("li").on("click", function() {
    $(this).animate({
        opacity: 0.0,
        paddingLeft: "+150"

    }, 700, function() {

        $(this).after("<p class='mess'>Thanks for your vote!</p>");

    })
    $("p").remove();
    $("li").unbind();
    
    
    


})

})
