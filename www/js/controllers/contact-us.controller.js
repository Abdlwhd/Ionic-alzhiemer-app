angular.module('alzheimer-app')
.controller('contactUsCtrl', function($scope, $stateParams, Common) {
	console.log("contactUsCtrl is loaded !");
	console.log($stateParams.message);
	$scope.contactUsCtrl = {
		goTo : function(state){
			Common.goTo(state)
		}
	};
	$scope.$on('$ionicView.enter', function() {
		
	});

})
