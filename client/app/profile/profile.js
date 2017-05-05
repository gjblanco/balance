angular.module('profile', [])

.controller('profileController', ['$scope', 'Prof', '$location', function($scope, Prof, $location) {
	$scope.username = $location.path().split('/')[2];

	Prof.getProfileInfo($scope.username).then(function(info) {
		$scope.info = info[0];
	});

  Prof.getFood($scope.username).then(function(info) {
    $scope.foods = food;
  });

  Prof.getDrink($scope.username).then(function(info) {
    $scope.drinks = drink;
  });

	$scope.tabs = Prof.tabView();


  $scope.tabView = (item) => $scope.tabs = Prof.tabView(item);
}]);