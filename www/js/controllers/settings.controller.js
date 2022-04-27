angular.module('alzheimer-app')
.controller('settingsCtrl', function($scope, $stateParams, Common) {
	console.log("settingsCtrl is loaded !");
	console.log($stateParams.message);
	$scope.settingsCtrl = {
		goTo : function(state){
			Common.goTo(state)
		}
	};
	$scope.$on('$ionicView.enter', function() {
		
	});

})
