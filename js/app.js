'use strict';

function AppCtrl($scope) {
  console.log('in AppCtrl');
  $scope.test = 'hello, world';
  $scope.test2 = function() {
    console.log('hello, world 222');
  };

  $scope.draw = function(i) {
    move(i);
  };

  //let's use angular bindings to make the string to move dynamic, default to O
  $scope.movingStr = "O";

  //padding so the O doesn't get displayed right on the edge of screen
  var pad = 50;

  //canvas setup
  var canvas = document.getElementById('grid');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight; 

  //default path: left-middle, top-middle, right-middle, bottom-middle, center
  var defPath = [
    new Point(0 + pad, canvas.height / 2),
    new Point(canvas.width / 2, 0 + pad),
    new Point(canvas.width - pad, canvas.height / 2),
    new Point(canvas.width / 2, canvas.height - pad),
    new Point(canvas.width / 2, canvas.height / 2) 
  ];

  //current Point in path
  var pathIndex = 0;

  function move(index) {

    clearAllTimeouts();
    var ctx = canvas.getContext('2d');

    //ctx.fillText("O", 230, 230); 
    //console.log('in move:' + new Date());
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var point = defPath[index % 5];
    ctx.fillText($scope.movingStr, point.x, point.y);
    setTimeout(move, 1000, index + 1); //TODO: timeout should be user definable
  }

  //constructor for Point object
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }

  function clearAllTimeouts() {
    var id = window.setTimeout(function() {}, 0);
    while (id--) {
      window.clearTimeout(id); // will do nothing if no timeout with id is present
    }
  }
}
