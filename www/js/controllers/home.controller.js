angular.module('alzheimer-app')
.controller('HomeCtrl', function($scope, $interval, $state, $stateParams, Common, LocalMemory) {
	console.log("HomeCtrl is loaded !");
	
	$scope.homeCtrl = {
		goTo : function(state){
			Common.goTo(state)
		}
	};

	$scope.$on('$ionicView.enter', function() {
		$scope.homeCtrl.inputMessage = "";
		//$scope.homeCtrl.messageForm.$setPristine();
		$scope.homeCtrl.welcomeMessage = $stateParams.message;
		console.log("$ionicView.enter is fired !");
	});
	// var progressBarInterval = $interval(function(){
	// 	console.log("this function is running");
	// 	if($scope.progressValue === 100){
	// 		$interval.cancel(progressBarInterval);
	// 		console.log("this function stopped running !");
	// 	} else {
	// 		$scope.progressValue++;
	// 	}
		
	// },100)
	$scope.updateMessage = function(inputMessage, messageForm){
		console.log(messageForm.messageInput);
		if(messageForm.$valid){
			$scope.homeCtrl.welcomeMessage = inputMessage;
			LocalMemory.updateLocalMemory('message', inputMessage);
		} else {
			console.log("invalid form");
		}
		
	}


})
