angular.module('alzheimer-app')
.controller('testCtrl', function($scope, $stateParams, Common) {
	console.log("testCtrl is loaded !");
	console.log($stateParams.message);
	$scope.testCtrl = {
		goTo : function(state){
			Common.goTo(state)
		}
	};
	$scope.$on('$ionicView.enter', function() {
		
	});

})
