'use strict';

function AppCtrl($scope) {

  //canvas setup
  var canvas = document.getElementById('grid');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight; 
  var ctx = canvas.getContext('2d');
  ctx.font = '20pt Calibri';

  //constants for calculating points around a clock
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var tau = 2 * Math.PI;
  var clockRadius = Math.min(canvas.width, canvas.height) / 2.3;  

  // analog clock path 
  var defPath = [
    getClockPoint(12),
    getClockPoint(1),
    getClockPoint(2),
    getClockPoint(3),
    getClockPoint(4),
    getClockPoint(5),
    getClockPoint(6),
    getClockPoint(7),
    getClockPoint(8),
    getClockPoint(9),
    getClockPoint(10),
    getClockPoint(11)
  ];

  // keeps track of if we should grow the moving string
  var growFlag = false;

  //let's use angular bindings to make the string to move, speed, and start index dynamic. Check local storage first
  $scope.movingStr = localStorage.getItem('movingStr') || "O";
  $scope.stepSpeed = parseInt(localStorage.getItem('stepSpeed')) || 1000;
  $scope.startIndex = parseInt(localStorage.getItem('startIndex')) || 0;

  // draw the string at the specified index
  $scope.draw = function(i) {
    move(i);
  };

  // helper function to get the coordinates for specified hour
  function getClockPoint(hour) {
    var radians = tau * (hour / 12);
    var hourX = centerX + Math.cos(radians - (tau / 4)) * clockRadius;
    var hourY = centerY + Math.sin(radians - (tau / 4)) * clockRadius;
    return new Point(hourX, hourY);
  }

  function move(index) {
    clearAllTimeouts();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var point = defPath[index % defPath.length];
    ctx.fillText($scope.movingStr, point.x, point.y);
    if (growFlag && point.equals(defPath[defPath.length - 1])) {
      //grow:  O --> OO
      $scope.movingStr += $scope.movingStr[$scope.movingStr.length - 1];
    }
    growFlag = true;
    localStorage.setItem("startIndex", index);
    localStorage.setItem("stepSpeed", $scope.stepSpeed);
    localStorage.setItem("movingStr", $scope.movingStr);
    var time = parseInt($scope.stepSpeed);
    setTimeout(move, time, index + 1); 
  }

  function clearAllTimeouts() {
    var id = window.setTimeout(function() {}, 0);
    while (id--) {
      window.clearTimeout(id); 
    }
  }

  //constructor for Point object
  function Point(x, y) {
    this.x = x;
    this.y = y;
    this.equals = function(other) {
      return this.x === other.x && this.y === other.y;
    };
  }

}
