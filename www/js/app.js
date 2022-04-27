// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'alzheimer-app' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('alzheimer-app', ['ionic','ngCordova','pascalprecht.translate'])
.value('APP_CONFIG', {
  TIMEOUT : 45000,
  VERSION : "1.0.0",
  TOAST : {
    DURATION : 2000,
    POSITION : "center"
  }
})
.run(function($ionicPlatform, $ionicPopup, $state, Memory, $ionicHistory, $translate) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    window.addEventListener('native.keyboardshow', function(){
      document.body.classList.add('keyboard-open');
    });

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }

    if(window.cordova) {
      // do your stuff
    }

    Memory.set("language","en");

    $ionicPlatform.registerBackButtonAction(function (event) {

      switch ($state.current.name) {
        case 'home':
          $ionicPopup.confirm({
            title: $translate.instant('COMMON.EXIT'),
            cssClass: "az-alert",
            template: $translate.instant('COMMON.EXIT_INFO'),
            cancelText: $translate.instant('COMMON.NO'),
            cancelType: 'button-positive',
            okText: $translate.instant('COMMON.YES'),
          }).then(function(res) {
              if(res) {
                navigator.app.exitApp();
              }
          });
        break;
  
        case 'contact-us':
          $state.go('home');
        break;

        default:
          $ionicHistory.goBack();
          
      }
  
    }, 100);

  });
})
