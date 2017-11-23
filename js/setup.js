'use strict';

// Создаем массивы
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

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

var wizards = [];

// Заполняем массив объектами с параметрами мага: name, coatColor, eyesColor.
function createArrayWizzards(numberWizard) {

  for (var j = 0; j <= numberWizard - 1; j++) {
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
