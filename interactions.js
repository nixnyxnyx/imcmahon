/*-------------------COLOR--------------------*/

var colorWell;
var curColor;
var defaultColor;
if(sessionStorage.getItem("bg_color") != null) {
    defaultColor = sessionStorage.getItem("bg_color");
}
else {
    defaultColor = '130047';
}
curColor = defaultColor;


window.addEventListener("load", startup, false);
function startup() {
    $(':root').css("--nav-color", defaultColor);
    colorWell = document.querySelector("#colorWell");
    if(colorWell != null) {
        colorWell.value = defaultColor;
        colorWell.addEventListener("change", updateAll, false);
    }

    $(".tab").css("transition", "all 0.25s");

    var footer_hgt = $(".footer").position().top;
    var window_hgt = $(window).height();
    if(footer_hgt < window_hgt) {
        diff = window_hgt - footer_hgt;
        $(".footer").css("margin-top", diff);
    }

}
function updateAll(event) {
    curColor = event.target.value;
    $(':root').css("--nav-color", curColor);
    sessionStorage.setItem("bg_color", curColor);
}

function resetColor() {
    curColor = defaultColor;
    colorWell.value = curColor;
    $(':root').css("--nav-color", curColor);
    sessionStorage.setItem("bg_color", curColor);
}

/*-------------------NAV BAR------------------*/

$(".tab").hover(function() {
    var darken = DarkenColor(curColor, 20);
    $(this).css("background", darken);
}, function() {
    $(this).css("background", "unset");
})

$(".footer-comp").hover(function() {
    var darken = DarkenColor(curColor, 20);
    $(this).css("background", darken);
}, function() {
    $(this).css("background", "unset");
})

$("#Home").click(function() {
    window.location.href = 'index.html';
});

$("#Experiences").click(function() {
    window.location.href = 'index.html';
});

$("#References").click(function() {
    window.location.href = 'index.html';
});

$("#Directory").click(function() {
    window.location.href = 'index.html';
});

$("#Contact").click(function() {
    window.location.href = 'index.html';
});

/*---------------------- FUNCTIONS -----------------------*/

function DarkenColor(col, amt) {
  
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
}