function AppCtrl($scope) {
  $scope.test = 'hello, world';
  $scope.test2 = function() {
    console.log('hello, world 222');
  };

  var canvas = document.getElementById('grid');
  canvas.width = 500;
  canvas.height = 500;

  var ctx = canvas.getContext('2d');

  $scope.draw = function() {
    ctx.fillText("O", 230, 230); 
  };
}
