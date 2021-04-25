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

  // begin trees
  $('.trees__item').on('click', function(e) {
    e.preventDefault();

    let targetTab = $(this).data('tree');
    let targetItem = $('#trees__popup-' + targetTab);

    $('.trees__item').removeClass('active');
    $('.trees__popup').removeClass('active');

    $(this).addClass('active');
    $(targetItem).addClass('active');
  });

  $('.trees__popup-close').on('click', function (){
    $('.trees__item').removeClass('active');
    $('.trees__popup').removeClass('active');
  })
  // end trees


};