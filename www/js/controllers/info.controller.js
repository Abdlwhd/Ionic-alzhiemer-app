angular.module('alzheimer-app')
.controller('InfoCtrl', function($scope, $http, $state,LocalMemory, $rootScope) {

    $scope.infoCtrl = {
        items : [],
        change : function(param) {
            console.log("changed value is :",param);
        }
    };

    /* lifecycle event */
    $scope.$on('$ionicView.enter', function() {
        console.log("$ionicView.enter always gets triggered , no matter cache is true or false in states.js");
        // always call on opening this page
        getInfo();
    })
    

    $scope.infoCtrl.printValue = function(){
        console.log("value on blur is : ", $scope.infoCtrl.search);
    }

    function getInfo(){
        console.log("info");

        var jsonPath = $rootScope.language === 'en' ? "json/info-en.json" : "json/info-ar.json";
            
        $http.get(jsonPath).success(function(response){
            $scope.infoCtrl.items = response;
            console.log("response : ", $scope.infoCtrl.items);
        });
        
    }

    $scope.infoCtrl.showDetails = function(item){
        LocalMemory.updateLocalMemory('item', item);
        $state.go('details');
    }
    
});