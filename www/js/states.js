angular.module('alzheimer-app')
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
	$ionicConfigProvider.views.forwardCache(true); 
	$ionicConfigProvider.views.transition('none');
	$ionicConfigProvider.views.swipeBackEnabled(false);

	console.log("State.js is loaded !");
  $stateProvider.state('home', {
    url: '/home',
    params : {'message' : 'Stay Home , Stay Safe !'},
    controller: 'HomeCtrl',
    templateUrl: 'templates/pages/home.html'
  })
  .state('contact-us', {
    url: '/contact-us',
    controller: 'contactUsCtrl',
    templateUrl: 'templates/pages/contact-us.html'
  })
  .state('settings', {
    url: '/settings',
    controller: 'settingsCtrl',
    templateUrl: 'templates/pages/settings.html'
  })
  .state('about-us', {
    url: '/about-us',
    controller: 'aboutUsCtrl',
    templateUrl: 'templates/pages/about-us.html'
  })
  .state('test', {
    url: '/test',
    controller: 'testCtrl',
    templateUrl: 'templates/pages/test.html'
  })
 .state('info2', {
    url: '/info2',
    controller: 'Info2Ctrl',
    templateUrl: 'templates/pages/info2.html'
  })
  .state('details', {
    url: '/details',
    cache : false, // need to remove HTML page from cache to stop music, this is not the only solution but is the simplest solution.
    controller: 'DetailsCtrl',
    templateUrl: 'templates/pages/details.html'
  })
  .state('details2', {
    url: '/details2',
    controller: 'Details2Ctrl',
    templateUrl: 'templates/pages/details2.html'
  })
  .state('music', {
    url: '/music',
    controller: 'MusicCtrl',
    templateUrl: 'templates/pages/music.html'
  })
  .state('yoga', {
    url: '/yoga',
    controller: 'YogaCtrl',
    templateUrl: 'templates/pages/yoga.html'
  })
  .state('exercise', {
    url: '/exercise',
    controller: 'InfoCtrl',
    templateUrl: 'templates/pages/info.html'
  })

$urlRouterProvider.when('', '/home');

});
