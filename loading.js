
function loading() {
    $(".loading-screen-text").text("loading.");
    setTimeout( function() {
        $(".loading-screen-text").text("loading..");
        setTimeout( function() {
            $(".loading-screen-text").text("loading...");
            setTimeout( function () {
                loading();
            }, 300);
        }, 300);
    }, 300);
}

loading();

window.addEventListener("load", startup, false);
function startup() {
    $(".loading-screen").removeClass("loading-screen-on");
    setTimeout(function() {$(".loading-screen").css("display", "none") }, 500);
}

//https://dev.to/phillt/inherit-the-width-of-the-parent-element-when-position-fixed-is-applied

 function toggleFixed() {
   adjustWidth();
   $(".child").toggleClass("fixed");
 }

 function adjustWidth() {
   var parentwidth = $(".parent").width();
   $(".child").width(parentwidth);
 }

 $(function() {

   $("#fixer").click(
     function() {
       toggleFixed();
     });

   $(window).resize(
     function() {
       adjustWidth();
     })

 })