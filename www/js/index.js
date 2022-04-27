angular.module('alzheimer-app')
.controller('IndexCtrl', function($scope, $timeout, $rootScope, $document, $sce, $ionicSideMenuDelegate, LocalMemory, Language, $translate, $state) {
	console.log("IndexCtrl is loaded !");
	
	$scope.indexCtrl = {
		indexMessage : "This is parent message"
	};

	var language = Language.use();
	$rootScope.language = language;
	  
	$scope.indexCtrl.switchLanguage = function(lang){

		if(!lang) {
			language = (language == 'en') ? 'ar' : 'en';
		} else {
			language = lang;
		}
		
		Language.use(language);
		$rootScope.language = Language.use();
		// call style change
		arabicStyleChange();
	}
	// local function
	function arabicStyleChange() {
		if ($rootScope.language == "en") {
			angular.element($document[0].getElementsByClassName('az-body')[0]).removeClass('arabic');
		} else {
			angular.element($document[0].getElementsByClassName('az-body')[0]).addClass('arabic');
		}
	}
	// call initially
	arabicStyleChange();

	$scope.indexCtrl.openSidemenu = function() {

		if ($rootScope.language == "en") {
			$ionicSideMenuDelegate.toggleLeft();
		} else {
			$ionicSideMenuDelegate.toggleRight();
		}

	};

	$scope.indexCtrl.openPage = function(url){
		$ionicPlatform.ready(function() {  
		  var target = '_blank';
		  var options = "location=no,hidden=yes,hardwareback=no,zoom=no";
		  var inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);
	
		  inAppBrowserRef.addEventListener('loadstart', loadstartCallback);
		  inAppBrowserRef.addEventListener('loadstop', loadstopCallback);
		  inAppBrowserRef.addEventListener('loadloaderror', loaderrorCallback);
		  inAppBrowserRef.addEventListener('exit', exitCallback);
		  
		  function loadstartCallback(event) {
			console.log('Loading started: '  + event.url);
			// you may close the ref 
			if (event.url.match("mobile/close")) {
				// do your stuff
				inAppBrowserRef.close();
			}
		  }
	
		  function loadstopCallback(event) {
			console.log('Loading finished: ' + event.url);
			inAppBrowserRef.show();
			Utils.hideLoader();
		  }
	
		  function loaderrorCallback(error) {
			console.log('Loading error: ' + error.message);
		  }
	
		  function exitCallback() {
			console.log('Browser is closed...');
		  }
		});
	  }

	// to accept inline style 
	$scope.indexCtrl.trustAsHtml = function(string){
		return $sce.trustAsHtml(string);
	}

	$scope.indexCtrl.collapse = function(prefix, id, cssClass){

		var collapseClass = cssClass ? cssClass : "az-collapse"
		var elem = angular.element($document[0].getElementById(prefix+'-'+id));
		var chevron = angular.element($document[0].getElementById(prefix+'-chevron-'+id));
		if(elem.hasClass(collapseClass)) {
			elem.removeClass(collapseClass);
			chevron.removeClass('ion-chevron-down');
			chevron.addClass('ion-chevron-up');
		} else {
			elem.addClass(collapseClass);
			chevron.removeClass('ion-chevron-up');
			chevron.addClass('ion-chevron-down');
		}
		
	}
	
	$scope.indexCtrl.openall = function() {
		var elems = Array.prototype.slice.call( document.getElementsByClassName("az-collapse") )
		var chevrons = Array.prototype.slice.call( document.getElementsByClassName("ion-chevron-down") );
		var arrlength = elems.length;
		for (var index = 0; index < arrlength; index++) {
			angular.element(elems[index]).removeClass('az-collapse')
			angular.element(chevrons[index]).removeClass('ion-chevron-down');
			angular.element(chevrons[index]).addClass('ion-chevron-up');
		};
	}

	$scope.indexCtrl.scrollIntoView = function(id) {
		
		$timeout(function() {
		  var elem = $document[0].getElementById(id);
		  elem.scrollIntoView();
		},50);
		
	}

	// for form validations toast info
	$scope.indexCtrl.showInfo = function(msg) {
		console.log("msg : ",msg);
		Utils.toast($translate.instant(msg));
	}

	$scope.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) {
		// storing previousState in localMemory for future use
		LocalMemory.updateLocalMemory('previousState',from.name);
	});

	$scope.indexCtrl.go = function(state){
		$state.go(state);
	}

});
