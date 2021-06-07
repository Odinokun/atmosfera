module.exports = function() {

  // begin header background
  $(window).on("scroll", function () {
    bgHeader();
  });

  $(window).on("load", function () {
    bgHeader();
  });

  function bgHeader() {
    if ($(this).scrollTop() > 50) {
      $('.header').addClass('is-scroll');
      $('.menu').addClass('active');
    } else {
      $('.header').removeClass('is-scroll');
      $('.menu').removeClass('active');
    }
  }
  // end header background

};