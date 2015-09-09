app.controller('MainCtrl', function ($scope) {
  $scope.result = 'test';
})

app.controller('AddCtrl', function ($scope, $routeParams) {
  console.log($routeParams);
  // console.log($location.search());
  $scope.result = Number($routeParams.firstNum) + Number($routeParams.secondNum)
})

app.controller('SubtractCtrl', function ($scope, $routeParams) {
  $scope.result =  Number($routeParams.firstNum) - Number($routeParams.secondNum)
})

app.controller('MultiplyCtrl', function ($scope, $routeParams) {
  $scope.result =  Number($routeParams.firstNum) * Number($routeParams.secondNum)
})

app.controller('DivideCtrl', function ($scope, $routeParams) {
  $scope.result =  Number($routeParams.firstNum) / Number($routeParams.secondNum)
})
