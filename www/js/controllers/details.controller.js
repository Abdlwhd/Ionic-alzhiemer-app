angular.module('alzheimer-app')
.controller('DetailsCtrl', function($scope, LocalMemory) {
    $scope.detailsCtrl = {};
    $scope.$on('$ionicView.enter', function() {
        $scope.detailsCtrl.item = LocalMemory.data.item;
    });
    
});