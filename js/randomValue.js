'use strict';
(function () {
// Находим максимальное число в массиве
  window.randomValue = {
    getMaxElement: function (array) {
      return array.slice().sort(function (a, b) {
        return a - b;
      })[([array.length - 1])];
    },
    // Находим случайную прозрачность
    getRandomValueOpacity: function (minValue, maxValue) {
      return Math.random() * (maxValue - minValue) + minValue;
    },
    // Находим случайный элемент в массиве
    getRandomArrayIndex: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

  };
})();
