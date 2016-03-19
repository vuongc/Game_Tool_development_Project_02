angular.module('app').controller('MainController', ['$scope', '$http', '$log', function ($scope, $http, $log) {

  $scope.title = 'Choose your answer';
  $scope.database = {};
  $scope.choices = [];



  // Get the answers object from server
  var getChoices = function () {
    $http({
      method: 'GET',
      url: 'http://localhost:8080/choices'
    }).then(function successCallback (response) {
      $scope.database = response.data;
      $scope.choices = response.data.choices;
    }, function errorCallback (response) {
      $log.info('Error: ', response);
    });
  };

  getChoices();
}]);
