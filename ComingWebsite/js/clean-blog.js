var headerHeight = 0;

(function($) {
  "use strict"; // Start of use strict

  // Floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });

    if (window.innerWidth > 768) {
      document.getElementById("header-container").style.marginTop = document.getElementById("mainNav").clientHeight + 60 + "px";
      document.getElementById("portfolio").style.marginTop = 110 + "px";
      document.getElementById("portfolio").style.paddingTop = 80 + "px";
    } else {
      document.getElementById("header-container").style.marginTop = document.getElementById("mainNav").clientHeight + 15 + "px";
      document.getElementById("portfolio").style.marginTop = 55 + "px";
      document.getElementById("portfolio").style.paddingTop = 45 + "px";
    }
  //primary navigation slide-in effect
    headerHeight = $('#mainNav').height();
    $(window).on('scroll', {
        previousTop: 0
      },
      function() {
        var currentTop = $(window).scrollTop();
        if (currentTop >= headerHeight) $('#mainNav').addClass('is-fixed');
        else if (!$('#mainNav').hasClass('menu-on')) $('#mainNav').removeClass('is-fixed');
      });

})(jQuery); // End of use strict

function toggleMenu() {
    var currentTop = $(window).scrollTop();
    if ($('#mainNav').hasClass('menu-on')) { //If the menu is open
        console.log(currentTop);
        console.log(headerHeight);
        if (currentTop < headerHeight) { //The menu should close and hide
            setTimeout(function(){$('#mainNav').removeClass('is-fixed menu-on');}, 280);
        } else { //The menu should close
            $('#mainNav').removeClass('menu-on');
        }   
    } else { //If the menu is closed
        $('#mainNav').addClass('is-fixed menu-on');
    }    
}

function adjustSpaces() {
  if (window.innerWidth > 768) {
      document.getElementById("header-container").style.marginTop = document.getElementById("mainNav").clientHeight + 60 + "px";
      document.getElementById("portfolio").style.marginTop = 110 + "px";
      document.getElementById("portfolio").style.paddingTop = 80 + "px";
    } else {
      document.getElementById("header-container").style.marginTop = document.getElementById("mainNav").clientHeight + 15 + "px";
      document.getElementById("portfolio").style.marginTop = 55 + "px";
      document.getElementById("portfolio").style.paddingTop = 45 + "px";
    }
}