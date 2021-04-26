module.exports = function () {

  // begin COUNT
  $(document).ready(function () {

    var show = true;
    var countbox = ".info-header__num";
    $(window).on("scroll load resize", function () {
      if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
      var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
      var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
      var w_height = $(window).height(); // Высота окна браузера
      var d_height = $(document).height(); // Высота всего документа
      var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
      if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $('.info, .info__bg').addClass('active');
        $('.info-header__num').css('opacity', '1');
        $('.info-header__num').spincrement({
          thousandSeparator: ",",
          decimalPoint: ",",
          decimalPlaces: 1,
          duration: 2000
        });
        $('.info-body__num--01').spincrement({
          thousandSeparator: ",",
          decimalPoint: ",",
          decimalPlaces: 1,
          duration: 2000
        });
        $('.info-body__num--02').spincrement({
          duration: 2000
        });

        show = false;
      }
    });

  });
  // end COUNT

};