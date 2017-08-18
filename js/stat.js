'use strict';
window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура, Вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / max;

  for (i = 0; i < times.length; i++) {
    ctx.fillStyle = 'rgba(36, 0, 203, ' + 1 * Math.random() + ')';
    ctx.fillRect(140 + 90 * i, 240, 40, -times[i] * step);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], 140 + 90 * i, 260);
    ctx.fillText(Math.floor(times[i]), 140 + 90 * i, (240 - (times[i] * step) - 10));

  }
  function getColor(name) {
    name = names[j];
    for (var j = 0; j < names.length; j++) {
      if (name === "Вы") {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'rgba(36, 0, 203, ' + 1 * Math.random() + ')';
      }
    }
  }
};
