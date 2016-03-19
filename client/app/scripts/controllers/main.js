angular.module('app').controller('MainController', ['$scope', '$http', '$log', function ($scope, $http, $log) {

  $scope.title = 'Choose your answer';
  $scope.database = {};
  $scope.notification = {};
  $scope.error = false;

  $log.info($scope.notification);

  // Get the answers object from server
  var getChoices = function () {
    $http({
      method: 'GET',
      url: 'http://localhost:8080/choices'
    }).then(function successCallback (response) {
      $scope.database = response.data;
      $scope.notification = {type: 'success', message: 'You got the object !'};
      $scope.error = false;
    }, function errorCallback (response) {
      $log.info('Error: ', response);
      $scope.notification = {type: 'error', message: 'You didn\'t get the object !'};
      $scope.error = true;
    });
  };

  $scope.sendAnswer = function (answer) {
    $http({
      method: 'POST',
      url: 'http://localhost:8080/answer',
      data: { version: $scope.database.version, choice: answer }
    }).then(function successCallback (response) {
      if (!response.answer) {
        $scope.notification = {type: 'error', message: 'Too bad it wasn\'t the good answer !'};
        $scope.error = true;
      } else {
        $scope.notification = {type: 'success', message: 'Too bad it wasn\'t the good answer !'};
        $scope.error = false;
      }
      $scope.database = response.data;
    }, function errorCallback (response) {
      $log.info('Error: ', response);
      $scope.notification = {type: 'error', message: 'You didn\'t send your answer !'};
      $scope.error = true;
    });
  };

  getChoices();
}]);
