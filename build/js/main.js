'use strict';

(function () {
  svg4everybody();

  objectFitImages();
})();

'use strict';

(function () {

  window.addEventListener('scroll', function () {
    var scrolled = window.scrollY;
    var header = document.querySelector(".header");
    scrolled > 20 ? header.classList.add('header--active') : header.classList.remove('header--active')
  })

})();


(function () {

  var burgerButton = document.querySelector('.burger-button__open');
  var closeButton = document.querySelector('.burger-button__close');
  var menu = document.querySelector('.dropdown-menu');
  var isOpened = menu.classList.contains('dropdown-menu--opened');
  var isClosed = menu.classList.contains('dropdown-menu--closed');
  var disableBodyScroll = bodyScrollLock.disableBodyScroll;
  var enableBodyScroll = bodyScrollLock.enableBodyScroll;
  var screenWidth;

  if (!burgerButton) {
    return;
  }

  burgerButton.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.remove('dropdown-menu--closed');
    menu.classList.add('dropdown-menu--opened');
    burgerButton.classList.add('hidden');
    closeButton.classList.remove('hidden');
    disableBodyScroll();
  })


  closeButton.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.remove('dropdown-menu--opened');
    menu.classList.add('dropdown-menu--closed');
    burgerButton.classList.remove('hidden');
    closeButton.classList.add('hidden');
    enableBodyScroll();
  })


  console.log(closeButton)
  console.log(burgerButton)

})();
