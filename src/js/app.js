$(function() {

  // begin SVG for IE
  require('./modules/svg4everybody')();

  // begin no-JS
  require('./modules/noJs')();
  require('./modules/aside')();
  require('./modules/tabs')();
  require('./modules/scroll2ancor')();
  require('./modules/slick')();
  require('./modules/popup')();
  require('./modules/count')();
  require('./modules/preloader')();

  //РАБОТАЕТ ТОЛЬКО С JQUERY < 3.0.0 !!!!!!!!!!!!!!!!!!
  require('./modules/waypoints')();
  require('./modules/animateCss')();

});