
'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  // объявляем переменные (Находим элементы открытия закрытия окна персонажа)
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  // объявляем переменные (Находим элементы содержащие параметры цвета)
  var setupUserName = setup.querySelector('.setup-user-name');

  // Валидация формы количество символов
  setupUserName.addEventListener('invalid', function () {
    if (setupUserName.validity.tooShort) {
      setupUserName.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (setupUserName.validity.tooLong) {
      setupUserName.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (setupUserName.validity.valueMissing) {
      setupUserName.setCustomValidity('Обязательное поле');
    } else {
      setupUserName.setCustomValidity('');
    }
  });

  //  Обьявляем функцию для открытия окна персонажа
  function openPopup() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  }

  //  Обьявляем функцию для закрытия окна персонажа
  function closePopup() {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  }

  //  Обьявляем функцию для открытия закрытия окна персонажа с клавиатуры
  function onPopupEscPress(evt) {
    var result;
    if (evt.keyCode === ESC_KEYCODE) {
      result = evt.target.tagName === 'INPUT' ? evt.preventDefault() : closePopup();
    }
    return result;
  }

  //  Обработчик события по клику для открытия окна персонажа
  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  // Обработчик события по нажатию Esc для открытия окна персонажа
  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  //  Обработчик события по клику для закрытия окна персонажа
  setupClose.addEventListener('click', function () {
    closePopup();
  });

  // Обработчик события по нажатию Esc для закрытия окна персонажа
  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });
})();
