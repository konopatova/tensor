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
  var menuLinks = document.querySelectorAll('.menu__item-link');
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

  for (let i = 0; i < menuLinks.length; i += 1) {
    menuLinks[i].addEventListener('click', function () {
      menu.classList.remove('dropdown-menu--opened');
      menu.classList.add('dropdown-menu--closed');
      burgerButton.classList.remove('hidden');
      closeButton.classList.add('hidden');
      enableBodyScroll();
    });
  }

})();


'use strict';
(function () {

  var accordionBtn = document.querySelectorAll('.footer__category-header');
  var accordionContent = document.querySelectorAll('.footer__category-list');
  var accordionSection = document.querySelectorAll('.footer__category');


  if (!accordionContent) {
    return;
  }

  for (var i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].onclick = function () {
      this.parentNode.classList.toggle('footer__category--opened');
      hideAll(this);
    };
  }

  function hideAll(exceptThis) {
    for (var k = 0; k < accordionBtn.length; k++) {
      if (accordionBtn[k] !== exceptThis) {
        accordionBtn[k].parentNode.classList.remove('footer__category--opened');
      }
    }
  }

})();
