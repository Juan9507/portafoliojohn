$(document).ready(function () {
  if ($(".typed").length) {
    var typed_strings = $(".typed").data("typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }
  // TYPEDSERVICES
  if ($(".typedServices").length) {
    var typed_strings = $(".typedServices").data("typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typedServices", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }
  new WOW().init();
});

// PORTAFOLIOFILTER
$("#primefilter").click(function() {
  $("#primeComun").show();
  $("#quince").hide();
  $("#fotoes").hide();
  $("#celebra").hide();

})

$("#quincefilter").click(function() {
  $("#primeComun").hide();
  $("#quince").show().fadeIn("slow");
  $("#fotoes").hide();
  $("#celebra").hide();
})

$("#fotoesfilter").click(function() {
  $("#primeComun").hide();
  $("#quince").hide();
  $("#fotoes").show();
  $("#celebra").hide();
})

$("#celebrafilter").click(function() {
  $("#primeComun").hide();
  $("#quince").hide();
  $("#fotoes").hide();
  $("#celebra").show();
})

// Smooth scroll for the navigation menu and links with .scrollto classes
let scrolltoOffset = $('#nav').outerHeight() - 21;
$(document).on('click', '.navbar-nav a', function(e) {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    let target = $(this.hash);
    if (target.length) {
      e.preventDefault();

      let scrollto = target.offset().top - scrolltoOffset;

      $('html, body').animate({
        scrollTop: scrollto
      }, 1500, 'easeInOutExpo');

      if ($(this).parents('.navbar-nav').length) {
        $('.navbar-nav .active').removeClass('active');
        $(this).closest('li').addClass('active');
      }
      return false;
    }
  }
});

$(document).on('click','.scroll', function(e) {
  let target = $(this.hash);
    if (target.length) {
      e.preventDefault();
      let scrollto = target.offset().top - scrolltoOffset;
      $('html, body').animate({
        scrollTop: scrollto
      }, 1500, 'easeInOutExpo');
      return false;
    }
})

$(document).ready(function() {
  window.oncontextmenu = function() {
    alert("Derechos reservados por John fotografo");
    return false;
  }
});

// Activate smooth scroll on page load with hash links in the url
// let scrolltoOffset = $('#navbarSupportedContent').outerHeight() - 21;
// $(document).ready(function() {
//   if (window.location.hash) {
//     let initial_nav = window.location.hash;
//     if ($(initial_nav).length) {
//       let scrollto = $(initial_nav).offset().top - scrolltoOffset;
//       $('html, body').animate({
//         scrollTop: scrollto
//       }, 1500, 'easeInOutExpo');
//     }
//   }
// });
