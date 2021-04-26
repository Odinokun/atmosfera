module.exports = function () {

  // begin ASIDE
  $('.aside__mobile').on('click', function() {
    $('.aside__desktop, .aside__bg, .header__burger').addClass('active');
  });

  $('.aside__bg').on('click', function() {
    $('.aside__desktop, .aside__bg, .header__burger').removeClass('active');
  });

  $('.header__burger').on('click', function() {
    $('.aside__desktop, .aside__bg, .header__burger').toggleClass('active');
  });

  $(window).on("scroll", function () {
    floatAside();
  });

  $(window).on("load", function () {
    floatAside();
  });

  function floatAside() {
    if ($(this).scrollTop() > 400) {
      $('.aside__desktop').removeClass('active');
    } else {
      $('.aside__desktop').addClass('active');
    }
  }
  // end ASIDE

};