/******/ (() => { // webpackBootstrap
/*!***************************************!*\
  !*** ./src/blocks/slider/frontend.js ***!
  \***************************************/
document.addEventListener('DOMContentLoaded', () => {
  const zoloSliders = document.querySelectorAll('.wp-block-zolo-slider');
  zoloSliders.forEach(slider => {
    const sliderSelector = slider.querySelector('.swiper');
    const sliderOptions = JSON.parse(slider.dataset?.swiperOptions || '{}');
    const videos = slider.querySelectorAll('video.zolo-html5-video');
    const {
      speed = 800,
      autoplay = false,
      autoplayDelay = 3000,
      pauseOnMouseEnter = false,
      loop = false,
      navigation = true,
      effect = 'slide',
      pagination = true,
      paginationType = 'bullets'
    } = sliderOptions;

    // Initialize all videos
    videos.forEach(video => {
      Object.assign(video, {
        autoplay: false,
        muted: true,
        loop: false
      });
      video.pause();
    });
    const defaultOptions = {
      // navigation: { nextEl, prevEl },
      loop: loop || false,
      autoplay: autoplay ? {
        delay: autoplayDelay || 3,
        disableOnInteraction: false,
        pauseOnMouseEnter: pauseOnMouseEnter || false
      } : false,
      speed: speed || 800,
      effect: effect || 'slide',
      navigation: navigation ? {
        nextEl: slider.querySelector('.swiper-button-next'),
        prevEl: slider.querySelector('.swiper-button-prev')
      } : false,
      pagination: pagination ? {
        el: '.swiper-pagination',
        type: paginationType || 'bullets',
        clickable: true
      } : false,
      on: {
        init() {
          const firstVideo = this.slides[0].querySelector('video.zolo-html5-video');
          if (firstVideo) {
            this.autoplay.stop();
            firstVideo.play().catch(error => console.log('Autoplay prevented for first slide:', error));
          }
        },
        slideChangeTransitionEnd() {
          const activeSlide = this.slides[this.activeIndex];
          const activeVideo = activeSlide.querySelector('video.zolo-html5-video');

          // Pause all videos and reset current time
          videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
          });
          if (activeVideo) {
            activeVideo.play().catch(error => console.log('Autoplay prevented:', error));
            this.autoplay.stop();

            // Restart autoplay based on video duration
            activeVideo.onended = () => {
              this.autoplay.start();
            };
          }
        },
        slideChange() {
          const activeVideo = this.slides[this.activeIndex].querySelector('video.zolo-html5-video');
          if (activeVideo && !activeVideo.paused) {
            this.slideTo(this.previousIndex);
          }
        }
      }
    };
    // Initialize Swiper
    new Swiper(sliderSelector, defaultOptions);
  });
});
/******/ })()
;
//# sourceMappingURL=frontend.js.map