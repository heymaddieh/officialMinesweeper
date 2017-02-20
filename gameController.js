angular.module('minesweeperApp').controller('MyController', ['$scope', '$http', function ($scope, $http) {

 }]);



angular.module('minesweeperApp').directive('dropdown', function($document) {
	return {
		restrict: "EA",
    templateUrl: './directive.html',
		link: function(scope, elem, attr) {
			
			elem.bind('click', function() {
				elem.toggleClass('dropdown-active');
				elem.addClass('active-recent');
			});
			
			$document.bind('click', function() {
				if(!elem.hasClass('active-recent')) {
					elem.removeClass('dropdown-active');
				}
				elem.removeClass('active-recent');
			});
			
		}
	}
});