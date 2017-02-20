angular.module('minesweeperApp').directive('dropdown', function() {
	return {
		restrict: "EA",
    templateUrl: './js/directivers/directive.html',
		controller: function($scope){
      $scope.showBox = false;

      $scope.ifClick = function(){
        $scope.showBox = !$scope.showBox;
      }
    }
	}
});