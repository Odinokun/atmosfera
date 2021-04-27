module.exports = function() {

  // begin preloader

  $(window).on('load', function () {
    $('#preloader').delay(700).fadeOut('slow');
  });

  // end   preloader

};
