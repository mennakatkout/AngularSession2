mainApp.controller('studentController', function($scope) {
	$scope.reset = function(){
	   $scope.firstName = "Menna";
	   $scope.lastName = "Hisham";
	   $scope.email = "melshazly.ext@orange.com";
	}

	$scope.reset();
});	