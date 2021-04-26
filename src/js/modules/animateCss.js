module.exports = function() {

  // begin Animate CSS + WayPoints javaScript Plugin

  $(
    ".filter__title, .filter__subtitle, .filter__text-left,  .filter__text-right, .filter__clock, " +
    ".trees__title, .trees__icon, .trees__descr, .trees__item, " +
    ".gallery__title, .gallery__text-left,  .gallery__text-right, .gallery-item"
  ).waypoint(function() {
    $(this).addClass("animate__animated animate__fadeInUp");
  }, {
    offset: "100%"
  });

  // end Animate CSS + WayPoints javaScript Plugin

};