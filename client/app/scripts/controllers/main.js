angular.module('app').controller('MainController', ['$scope', '$http', '$log', function ($scope, $http, $log) {

  $scope.title = 'Choose your answer';
  $scope.database = {};
  $scope.notification = {};
  $scope.notif = false;

  $log.info($scope.notification);

  // Get the answers object from server
  var getChoices = function () {
    $http({
      method: 'GET',
      url: 'http://localhost:8080/choices'
    }).then(function successCallback (response) {
      $scope.database = response.data;
      $scope.notification = {type: 'success', message: 'You can play !'};
      $scope.notif = true;
    }, function errorCallback (response) {
      $log.info('Error: ', response);
      $scope.notification = {type: 'error', message: 'You didn\'t get the object !'};
      $scope.notif = true;
    });
  };

  $scope.sendAnswer = function (answer) {
    $http({
      method: 'POST',
      url: 'http://localhost:8080/play',
      data: { version: $scope.database.version, choice: answer }
    }).then(function successCallback (response) {
      if (!response.data.answer) {
        $scope.notification = {type: 'error', message: 'Too bad it wasn\'t the good answer !'};
      } else {
        $scope.notification = {type: 'success', message: 'You win !'};
      }
      if (response.data.update) {
        $scope.database = response.data.update;
      }
      $scope.notif = true;
    }, function errorCallback (response) {
      $log.info('Error: ', response);
      $scope.notification = {type: 'error', message: 'You didn\'t send your answer !'};
      $scope.error = true;
    });
  };

  getChoices();
}]);
