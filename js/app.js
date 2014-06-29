function AppCtrl($scope) {
  console.log('in AppCtrl');
  $scope.test = 'hello, world';
  $scope.test2 = function() {
    console.log('hello, world 222');
  };

  //padding so the O doesn't get displayed right on the edge of screen
  var pad = 10;

  //canvas setup
  var canvas = document.getElementById('grid');
  canvas.width = 500;
  canvas.height = 500; 
  var ctx = canvas.getContext('2d');

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

  $scope.draw = function() {
    //ctx.fillText("O", 230, 230); 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var point = defPath[pathIndex % 5];

  };

  //constructor for Point object
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }
}
