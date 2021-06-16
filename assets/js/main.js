$(document).ready(function () {
  // choses-slider

  AOS.init();

  

  if ($(".header-slider").length) {
    $('.header-slider').on('init', function(e, slick) {
      var $firstAnimatingElements = $('div.slider-item:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);    
  });
  $('.header-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('div.slider-item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);    
  });
  $('.header-slider').slick({
     autoplay: true,
     autoplaySpeed: 3000,
     speed: 2000,
     dots: true,
     fade: true,
     prevArrow: false,
     nextArrow: false
  });
  function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function() {
          var $this = $(this);
          var $animationDelay = $this.data('delay');
          var $animationType = 'animated ' + $this.data('animation');
          $this.css({
              'animation-delay': $animationDelay,
              '-webkit-animation-delay': $animationDelay
          });
          $this.addClass($animationType).one(animationEndEvents, function() {
              $this.removeClass($animationType);
          });
      });
  }

  }


  if ($(".bg-sidenavOpen").length) {
    $(".bg-sidenavOpen").on("click", function () {
      $("#mySidenav").css("right", "-400px");
      $(this).css("display", "none");
      document.body.classList.remove("openMenuActive");
    });
  } 

  $(window).scroll(() => {
    if ($(this).scrollTop() > 20) {
      $(".navbar").addClass("fixed-navbar");
      $("#floating").css("opacity", "0.8");
    } else {
      $(".navbar").removeClass("fixed-navbar");
      $("#floating").css("opacity", "0");
    }
  });

  $("#floating").click(() => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      50
    );
  });

  if ($(".langSelect").length) {
    $(".langSelect").niceSelect();
  }

  if ($(".joinSelect").length) {
    $(".joinSelect").niceSelect();
  }

  $(".sidenav li.NesteListParent").click(function () {
    $(this).children("ul").slideToggle();
    $(this).children("i").toggleClass("iMenue");
  });

  if($('.counter').length){
    $('.counter').counterUp({
      time: 1000
    });
  }

});

function openNav() {
  document.getElementById("mySidenav").style.right = "0";
  document.querySelector(".bg-sidenavOpen").style.display = "block";
  document.body.classList.add("openMenuActive");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.right = "-400px";
  document.querySelector(".bg-sidenavOpen").style.display = "none";
  document.body.classList.remove("openMenuActive");
}

const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("displayNone");
  });
});
