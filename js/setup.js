'use strict';

var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var similarListElement = document.querySelector('.setup-similar-list');

// Находим случайный элемент в массиве
function getRandomArrayIndex(Array) {
  return Array[Math.floor(Math.random() * Array.length)];
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
  var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

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
  if (evt.keyCode === 27) {
    closePopup();
  }
}

//  Обработчик события по клику для открытия окна персонажа
setupOpen.addEventListener('click', function () {
  openPopup();
});

// Обработчик события по нажатию Esc для открытия окна персонажа
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
});

//  Обработчик события по клику для закрытия окна персонажа
setupClose.addEventListener('click', function () {
  closePopup();
});

// Обработчик события по нажатию Esc для закрытия окна персонажа
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closePopup();
  }
});

var setupUserName = setup.querySelector('.setup-user-name');

setupUserName.addEventListener('focus', function () {
  setup.removeEventListener('keydown', onPopupEscPress);
});

setupUserName.addEventListener('blur', function () {
  window.addEventListener('keydown', onPopupEscPress);
});
// setupUserName.addEventListener('focus', function (event) {
//   event.stopPropagation();
// });
