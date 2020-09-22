// home search button

$(".home-search").click(function(){
    $(".input").toggleClass("active").focus;
    $(this).toggleClass("animate");
    $(".input").val("");
});