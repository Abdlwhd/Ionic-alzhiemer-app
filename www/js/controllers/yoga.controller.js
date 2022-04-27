angular.module('alzheimer-app')
.controller('YogaCtrl', function($scope, $http, $state,LocalMemory, $rootScope) {

    $scope.yogaCtrl = {
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
    

    $scope.yogaCtrl.printValue = function(){
        console.log("value on blur is : ", $scope.yogaCtrl.search);
    }

    function getInfo(){
        console.log("yoga");

        var jsonPath = $rootScope.language === 'en' ? "json/yoga-en.json" : "json/yoga-ar.json";
            
        $http.get(jsonPath).success(function(response){
            $scope.yogaCtrl.items = response;
            console.log("response : ", $scope.yogaCtrl.items);
        });
        
    }

    $scope.yogaCtrl.showDetails = function(item){
        LocalMemory.updateLocalMemory('item', item);
        $state.go('details2');
    }
    
});