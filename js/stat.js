+'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var barWidth = 40;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(
    ctx,
    CLOUD_X + 10,
    CLOUD_Y + 10,
    'rgba(0, 0, 0, 0.3)'
  );
  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    '#fff'
  );

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  var CalcPoints = function() {
    var barPoints = ((BAR_HEIGHT * times[i]) / maxTime);
    return barPoints;
  };

  var yWidthGapN = CLOUD_Y + TEXT_WIDTH + GAP * 3.3;

  for (var i = 0; i < players.length; i++) {
    var xGapWidthNumber = CLOUD_X + GAP / 1.5 + FONT_GAP + (GAP + barWidth) * i;
    ctx.fillStyle = "black";
    ctx.fillText(
      players[i],
      xGapWidthNumber,
      CLOUD_Y + GAP * 5
    );
    if (players[i] == 'Вы') {
      ctx.fillStyle = "red";
    } else {
      ctx.fillStyle = 'hsl(240,' + getRandomInt(100) +'%, 50%)';
    }
    ctx.fillRect(
      CLOUD_X + GAP + (GAP + barWidth) * i,
      yWidthGapN,
      barWidth,
      -CalcPoints()
    );
    ctx.fillStyle = "black";
    ctx.fillText(
      Math.round(CalcPoints()),
      xGapWidthNumber,
     -CalcPoints() + yWidthGapN
    )
  }
};
