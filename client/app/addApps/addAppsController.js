angular.module('at.addApps', [])

.controller('AddAppsController', function ($scope, Application) {

  $scope.data = {};

  $scope.submitForm = () => {
    Application.postData($scope.data)
      .then((resp) => {
        console.log(resp);
      });
  };
});