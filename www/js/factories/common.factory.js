angular.module('alzheimer-app')
.factory('Common', function($state, $ionicLoading, APP_CONFIG) {

	return {
		goTo : function(state){
			console.log("goTo function is called !")
			$state.go(state);
		},
		showLoader:function() {
			$ionicLoading.show({
				template: '<ion-spinner class="az-loader" icon="bubbles"/></ion-spinner>',
				duration: APP_CONFIG.TIMEOUT
		 	})
		},
		hideLoader:function() {
	    	$ionicLoading.hide();
		},
		toast:function(message, duration) {
			if (window.cordova) {
			  	return window.plugins.toast.showWithOptions({
			    	message: message,
			    	duration: duration ? duration : APP_CONFIG.TOAST.DURATION, // 2000 ms
			    	position: APP_CONFIG.TOAST.POSITION,
			    	styling: {
			      		opacity: 0.9,
			      		backgroundColor: '#414143',
			      		textColor: '#FFFFFF', 
			      		textAlign :"center",
			      		fontSize : "14px",
			      		cornerRadius: (ionic.Platform.isIOS() || ionic.Platform.isIPad()) ? 20 : 70, // minimum is 0 (square). iOS default 20, Android default 100
			      		horizontalPadding: (ionic.Platform.isIOS() || ionic.Platform.isIPad()) ? 16 : 40, // iOS default 16, Android default 50
			      		verticalPadding: (ionic.Platform.isIOS() || ionic.Platform.isIPad()) ? 12 : 25 // iOS default 12, Android default 30
			    	}
			  	});
			} else {
				console.log(message);
			}
		},
	}
})