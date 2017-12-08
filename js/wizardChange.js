'use strict';
(function () {
  // Объявляем переменные
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var setupWizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var setupWizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var setupWizardFireball = document.querySelector('.setup-fireball-wrap');

  // Обьявляем функции и навешиваем обработчики событий для для смены цвета одежы, глаз, фаерболла мага по нажатию кнопки мыши
  function setColorWizardFill(arr) {
    setupWizardCoat.style.fill = window.randomValue.getRandomArrayIndex(arr);
  }

  function setColorEyesWizardFill(arr) {
    setupWizardEyes.style.fill = window.randomValue.getRandomArrayIndex(arr);
  }

  function setColorBgWizardFireball(arr) {
    setupWizardFireball.style.background = window.randomValue.getRandomArrayIndex(arr);
  }

  setupWizardEyes.addEventListener('click', function () {
    setColorEyesWizardFill(window.setup.WIZARD_EYES_COLOR);
  });

  setupWizardCoat.addEventListener('click', function () {
    setColorWizardFill(window.setup.WIZARD_COAT_COLOR);
  });

  setupWizardFireball.addEventListener('click', function () {
    setColorBgWizardFireball(WIZARD_FIREBALL_COLORS);
  });

})();
