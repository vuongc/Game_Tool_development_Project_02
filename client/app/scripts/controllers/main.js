angular.module('app').controller('MainController', ['$scope', '$http', '$log', function ($scope, $http, $log) {
  var _this = this;

  _this.title = 'Choose your answer';
  $scope.choices = [];

  var getChoices = function () {
    $http({
      method: 'GET',
      url: 'http://localhost:8080/choices'
    }).then(function successCallback (response) {
      $log.info('Success: ', response);
      $scope.choices = response.data.choices;
    }, function errorCallback (response) {
      $log.info('Error: ', response);
    });
  };

  getChoices();
}]);
