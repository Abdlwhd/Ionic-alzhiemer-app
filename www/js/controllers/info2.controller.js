angular.module('alzheimer-app')
.controller('Info2Ctrl', function($scope, $http, $state,LocalMemory, $rootScope) {

    $scope.info2Ctrl = {
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
    

    $scope.info2Ctrl.printValue = function(){
        console.log("value on blur is : ", $scope.info2Ctrl.search);
    }

    function getInfo(){
        console.log("info2");

        var jsonPath = $rootScope.language === 'en' ? "json/info2-en.json" : "json/info2-ar.json";
            
        $http.get(jsonPath).success(function(response){
            $scope.info2Ctrl.items = response;
            console.log("response : ", $scope.info2Ctrl.items);
        });
        
    }

    $scope.info2Ctrl.showDetails = function(item){
        LocalMemory.updateLocalMemory('item', item);
        $state.go('details2');
    }
    
});