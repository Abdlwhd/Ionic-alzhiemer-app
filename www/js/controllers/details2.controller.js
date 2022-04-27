angular.module('alzheimer-app')
.controller('Details2Ctrl', function($scope, LocalMemory,$sce) {
    $scope.details2Ctrl = {};
    $scope.$on('$ionicView.enter', function() {
        $scope.details2Ctrl.item = LocalMemory.data.item;
        $sceProvider.enabled(false);
    });

    $scope.trustSrcurl = function(data) {
    return $sce.trustAsResourceUrl(data)
    }
   
});
/*.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['**']);
  })*/
/*.config(function($sceProvider) {
    $sceProvider.enabled(false);
  });*/
/*angular.module('alzheimer-app').config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['**']);
  });*/