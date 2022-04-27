angular.module('alzheimer-app')
.controller('aboutUsCtrl', function($scope, $stateParams, Common) {
	console.log("aboutUsCtrl is loaded !");
	console.log($stateParams.message);
	$scope.aboutUsCtrl = {
		goTo : function(state){
			Common.goTo(state)
		}
	};
	$scope.$on('$ionicView.enter', function() {
		
	});

})
