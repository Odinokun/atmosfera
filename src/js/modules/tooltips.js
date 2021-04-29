module.exports = function() {

  // begin tooltips
  $tooltip = $(".tooltip");

  $('.free, .sold').hover(function() {
    $tooltip.addClass('active');
    $tooltip.html($(this).attr('id'));
  }, function() {
    $tooltip.removeClass('active');
  });

  $('.sold').hover(function() {
    $tooltip.addClass('active');
    $tooltip.html($(this).attr('id'));
  }, function() {
    $tooltip.removeClass('active');
  });

  $(document).on('mousemove', function(e){
    $tooltip.css({
      left:  e.pageX + 30,
      top:   e.pageY - 40
    });
  });
  // end tooltips

};