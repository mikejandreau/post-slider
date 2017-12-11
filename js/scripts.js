
jQuery(document).ready(function($) {
    // variables
    var postslider = document.querySelector('.postslider');
    var numberOfSlides = document.querySelectorAll('.postslider-inner .postslider-item').length;
    var slide = 1;
    var slides = document.querySelectorAll('.postslider-inner .postslider-item');
    var timingSlider = 5000;

    // get previous slide
    function prevSlide() {
      var indexCurrent = slide - 1;

      if (slide > 1) slide -= 1;
      else slide = numberOfSlides;

      var indexNext = slide - 1;

      addRemoveSliderClasses(indexCurrent, indexNext);
    }

    // get next slide
    function nextSlide() {
      var indexCurrent = slide - 1;

      if (slide < numberOfSlides) slide += 1;
      else slide = 1;

      var indexNext = slide - 1;

      addRemoveSliderClasses(indexCurrent, indexNext);
    }

    // Add/Remove classes to the item of the postslider
    function addRemoveSliderClasses(indexCurrent, indexNext) {

      slides[indexCurrent].classList.add('hiddenSlide');
      slides[indexNext].classList.add('currentSlide');

      var transitionElements = document.querySelectorAll('.hiddenSlide');

      for (var i = 0; i < transitionElements.length; i++) {
        if (transitionElements[i] != slides[indexCurrent]) {
          transitionElements[i].classList.remove("hiddenSlide");
        }
      }

      slides[indexCurrent].classList.remove('currentSlide');
    }

    // reset timer for automatic sliding
    function resetInterval() {
      clearInterval(timer);
      timer = setInterval(function() {
        nextSlide();
      }, timingSlider);
    }

    // listeners for prev/next arrows
    if (postslider != null) {
      document.querySelector('.arrow-prev').addEventListener('click', function(e) {
        prevSlide();
        resetInterval();
      });

      document.querySelector('.arrow-next').addEventListener('click', function(e) {
        nextSlide();
        resetInterval();
      });

      var timer = setInterval(function() {
        nextSlide();
      }, timingSlider);
    }
});
