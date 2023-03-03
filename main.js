$(".nav .nav-link").on("click", function(event){
    $(".nav").find(".active").removeClass("active");
    $(this).addClass("active");
 });