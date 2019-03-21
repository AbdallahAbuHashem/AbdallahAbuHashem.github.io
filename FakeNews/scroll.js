$(document).ready(function (){
    $("#SNBtn").click(function (){
        $('html, body').animate({
            scrollTop: $("#socialnetwork").offset().top - 100
        }, 1000);
    });
});

$(document).ready(function (){
    $("#scrollDown").click(function (){
        $('html, body').animate({
            scrollTop: $("#socialnetwork").offset().top - 100
        }, 1000);
    });
});

$(document).ready(function (){
    $("#BBtn").click(function (){
        $('html, body').animate({
            scrollTop: $("#belief").offset().top - 100
        }, 1000);
    });
});

$(document).ready(function (){
    $("#ChBtn").click(function (){
        $('html, body').animate({
            scrollTop: $("#chamber").offset().top - 100
        }, 1000);
    });
});

$(document).ready(function (){
    $("#ClBtn").click(function (){
        $('html, body').animate({
            scrollTop: $("#closing").offset().top - 100
        }, 1000);
    });
});

$(document).ready(function (){
    $("#TopBTN").click(function (){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
});