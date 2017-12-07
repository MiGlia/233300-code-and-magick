'use strict';

// Статистика игры после того как игрок выиграл
// names - Имена игроков
// times - Время игры.
(function () {
  window.renderStatistics = function (ctx, names, times) {
  //  Рисуем гистограмму
    function drawTheHistogram() {
      var maxTime = window.randomValue.getMaxElement(times);
      var step = hist.height / maxTime; // px;
      var initialX = 120; // px;
      var initialY = 100; // px;
      var lineHeight = 20; // px;

      for (var i = 0; i < times.length; i++) {

        var indentX = (hist.indent + hist.width) * i;
        var indentY = hist.height - times[i] * step;

        ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1.0)' : 'rgba(25, 61, 224,  ' + window.randomValue.getRandomValueOpacity(0.1, 1) + ')';
        ctx.fillRect(initialX + indentX, initialY + indentY, hist.width, times[i] * step);
        ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
        ctx.fillText(names[i], initialX + indentX, hist.height + initialY + lineHeight);
        ctx.fillText(Math.floor(times[i]), initialX + indentX, initialY + indentY - lineHeight);
      }
    }

    var hist = {
      width: 40,
      height: 150,
      indent: 50
    };

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
    drawTheHistogram();
  };
})();
