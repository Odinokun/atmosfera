module.exports = function() {

  // begin popup open
  $('.popup-open').on('click', function(e) {
    e.preventDefault();

    $('.aside__desktop, .aside__bg, .header__burger').toggleClass('active');

    let targetPopup = '#' + $(this).data('popup');
    $(targetPopup + ', #popup__bg').fadeIn();
  });
  // end popup open

  // begin popup close
  $('#popup__bg, .popup__close').on('click', function() {
    $('.popup, #popup__bg').fadeOut();
  });
  // end popup close

};