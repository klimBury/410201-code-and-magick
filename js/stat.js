'use strict';
var MY_RESULT_COLOR = 'rgba(255, 0, 0, 1)';
var HISTOGRAM_HEIGHT = 150;

function drawCloud(ctx) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
}

function drawColoumn(ctx, names, times) {
  var max = Math.max.apply(null, times);

  var step = HISTOGRAM_HEIGHT / max;

  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = MY_RESULT_COLOR;
    } else {
      ctx.fillStyle = 'rgba(36, 0, 203, ' + (0.1 + Math.random()) + ')';
    }
    ctx.fillRect(140 + 90 * i, 240, 40, -times[i] * step);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], 140 + 90 * i, 260);
    ctx.fillText(Math.floor(times[i]), 140 + 90 * i, (240 - (times[i] * step) - 10));
  }
}

window.renderStatistics = function (ctx, names, times) {
  drawCloud(ctx);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура, Вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  drawColoumn(ctx, names, times);
};
