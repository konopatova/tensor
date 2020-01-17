
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
