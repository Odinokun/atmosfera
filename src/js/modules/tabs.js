module.exports = function() {

  // begin tabs
  $('.about-tabs__link').on('click', function(e) {
    e.preventDefault();

    let targetTab = $(this).data('tab');
    let targetItem = $('.about-tabs__item--' + targetTab);

    $('.about-tabs__item').fadeOut(0);
    $('.about-tabs__link').removeClass('active')

    $(this).addClass('active');
    $(targetItem).fadeIn();
  });
  // end tabs


};