// Smooth Scroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            // $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            // $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// Carousel / Slideshow
$(document).ready(function (){
    $(".carousel").slick({
        autoplay: true,
        autoplaySpeed: 7000,
        dots: true
    });
});

// Makes an opaque navbar appear after scrolling down a certain point from the landing page
const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = function() {
    if(window.pageYOffset > 800) {
        navbar.classList.add('sticky');
        if(!scrolled) {
            navbar.style.transform = 'translateY(-70px)';
        } 
        setTimeout(function(){
            navbar.style.transform = 'translateY(0px)';
            scrolled = true;
        }, 150);
    } else {
        navbar.classList.remove('sticky');
        scrolled = false;
    }
}

// Make top arrow slide over after scrolling down a certain distance
// const toparrow = document.getElementById('top-arrow');

// window.onscroll = function() {
//     if(window.pageYOffset > 600) {
//         toparrow.style.transform = 'translateX(0px)';
        
//     } else {
//         toparrow.style.transform = 'translateX(200px)';
        
//     }
// }

/* Mobile Navigation */
$('.mobile-nav-icon').click(function() {
  var nav = $('.nav-list');
  var icon = $('.mobile-nav-icon i');

  nav.slideToggle(400);
  if (icon.hasClass('fas fa-bars')) {
      icon.removeClass('fas fa-bars');
      icon.addClass('fas fa-times');
      
  } else {
      icon.removeClass('fas fa-times');
      icon.addClass('fas fa-bars');
      

  }


})