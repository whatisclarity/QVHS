$(document).ready(function(){

  // Scroll to page
  function scrolll(to) {
    // Add nav active class
    var nav = $('#mainNav').find('a[href="' + to + '"]');
    nav.addClass('active').siblings('a').removeClass('active');
    // animate the scroll
    $('html, body').animate({
      scrollTop: $(to).offset().top
    }, 600, function(){
      window.location.hash = to;
    });
  }

  // Scroll to page on click
  $('.scroll-to').on('click', function(event) {
    if (this.hash !== '') {
      var to = this.hash;
      event.preventDefault();
      scrolll(to);
    }
  });

  // Scroll to page on load
  if(window.location.hash) {
    scrolll(window.location.hash);
  }

  // Nav toggle
  $('.nav-toggle').on('click', function(event) {
    $('body').toggleClass('show-nav');
    event.preventDefault();
  });

  // Close nav on nav link click
  $('#mainNav a').on('click', function() {
    $('body').removeClass('show-nav');
  });

});
