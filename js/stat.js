'use strict';

// Статистика игры после того как игрок выиграл
// ctx - Canvas Rendering Context
// names - Имена игроков
// times - Время игры.

window.renderStatistics = function (ctx, names, times) {

// Рисуем окно для вывода статистики

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.fillRect(100, 10, 420, 270);

  // Рисуем текст для вывода статистики
  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  //  Сортируем массив времен
  var getMaxElement = function (array) {
    for (var i = 0; i <= times.length - 1; i++) {
      var minValue = times[i];

      for (var j = i + 1; j <= times.length - 1; j++) {
        if (times[j] < minValue) {
          minValue = times[j];
          var swap = times[i];
          times[i] = minValue;
          times[j] = swap;
        }
      }
    }
    return (times[times.length - 1]);
  };

  var histogramHeight = 150; // px;
  var histogramWidth = 40; // px;
  var step = histogramHeight / getMaxElement(); // px;
  var indent = 50; // px;
  var initialX = 120; // px;
  var initialY = 100; // px;
  var lineHeight = 20; // px;


  // Строти гистограмму
  for (var i = 0; i < times.length; i++) {
    var indentX = (indent + histogramWidth) * i;
    var indentY = histogramHeight - times[i] * step;

    ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1.0)' : 'rgba(25, 61, 224,  ' + Math.random() + ')';
    ctx.fillRect(initialX + indentX, initialY + indentY, histogramWidth, times[i] * step);
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
    ctx.fillText(names[i], initialX + indentX, histogramHeight + initialY + lineHeight);
    ctx.fillText(Math.floor(times[i]), initialX + indentX, initialY + indentY - lineHeight);
  }
};
