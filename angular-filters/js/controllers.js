app.controller('MainCtrl', function ($scope, $http) {
  $scope.result = 'test';
  $http.get('https://api.github.com/zen').then(function(data){
    $scope.zenData = data;
  });
  $http.get('itunes.json').then(function (data) {
    $scope.appleData = data;
  });
});

app.controller('MessagesCtrl', function ($scope, $http) {
  $http.get('https://shielded-peak-6345.herokuapp.com/messages').then(function (data) {
    $scope.railsData = data;
  });
  $scope.addMessage = function () {
    $http.post('https://shielded-peak-6345.herokuapp.com/messages', {
    name: $scope.messageName,
    content: $scope.messageContent
  }).then(function (response) {
      console.log(response);
    });
  }
})
