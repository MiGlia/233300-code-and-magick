'use strict';

var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var userDialog = document.querySelector('.setup');
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var similarListElement = document.querySelector('.setup-similar-list');

// Находим случайный элемент в массиве
function getRandomArrayIndex(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Копируем шаблон(идеальный элемент) и заполняем его новыми данными(name, coatColor, eyesColor)
function renderWizard(wizards) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards.eyesColor;
  return wizardElement;
}

// Создаем пустой массив
var wizards = [];

// Заполняем массив wizards объектами со случайными параметрами мага: name, coatColor, eyesColor.
function createArrayWizzards(wizardCount) {

  // Создаем массивы с параметрами
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  for (var j = 0; j <= wizardCount - 1; j++) {
    wizards.push({name: getRandomArrayIndex(WIZARD_NAMES) + ' ' + getRandomArrayIndex(WIZARD_SURNAMES), coatColor: getRandomArrayIndex(WIZARD_COAT_COLOR), eyesColor: getRandomArrayIndex(WIZARD_EYES_COLOR)});
  }
}
createArrayWizzards(4);

//  Группируем элементы в обертку fragment, Вставляем заполненные элементы в DOM и отрсовываем их
function getRenderWizard() {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
}
getRenderWizard();

userDialog.querySelector('.setup-similar').classList.remove('hidden');

// объявляем переменные (Находим элементы открытия закрытия окна персонажа)
var setup = document.querySelector('.setup');

var setupOpen = document.querySelector('.setup-open');

var setupClose = setup.querySelector('.setup-close');

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

// объявляем переменные (Находим элементы содержащие параметры цвета)
var setupUserName = setup.querySelector('.setup-user-name');
var setupWizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var setupWizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var setupWizardFireball = setup.querySelector('.setup-fireball-wrap');

// Валидация формы
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

// Обьявляем функции и навешиваем обработчики событий для для смены цвета одежы, глаз, фаерболла мага по нажатию кнопки мыши
function setColorWizardFill(arr) {
  setupWizardCoat.style.fill = getRandomArrayIndex(arr);
}

function setColorEyesWizardFill(arr) {
  setupWizardEyes.style.fill = getRandomArrayIndex(arr);
}

function setColorBgWizardFireball(arr) {
  setupWizardFireball.style.background = getRandomArrayIndex(arr);
}

setupWizardEyes.addEventListener('click', function () {
  setColorEyesWizardFill(WIZARD_EYES_COLOR);
});

setupWizardCoat.addEventListener('click', function () {
  setColorWizardFill(WIZARD_COAT_COLOR);
});

setupWizardFireball.addEventListener('click', function () {
  setColorBgWizardFireball(WIZARD_FIREBALL_COLORS);
});
