var myApp = angular.module('myApp', [])

myApp.controller('MainCtrl', function ($scope, $location) {
  $scope.student_name = 'Mickey';
  $scope.fruits = ['apple', 'pear', 'peach', 'orange'];
})
