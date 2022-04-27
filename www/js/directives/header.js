angular.module('alzheimer-app')

.directive('header', function($ionicSideMenuDelegate, $state, $rootScope, Memory, $ionicPopup, $ionicHistory, $translate) {
    return {
      restrict: 'E',
      templateUrl : 'templates/includes/header.html',
      scope: {
        label: '@',
        imgSrc: '@',
        noImg: '@',
        icon: '@',
        cssClass: '@',
        cssClassIcon : '@'
      },
      link: function(scope, elem, attrs) {

        scope.openSidemenu = function() {
          if ($rootScope.language == "en") {
            $ionicSideMenuDelegate.toggleLeft();
          } else {
            $ionicSideMenuDelegate.toggleRight();
          }
        };
        
        scope.goBack = function() {
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
        }

      }
    };
});