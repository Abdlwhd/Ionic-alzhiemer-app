
angular.module('alzheimer-app')
.controller('MusicCtrl', function($scope, $http, LocalMemory, $state) {

    $scope.musicCtrl = {
        items : []
    };

    function getInfo(){
        console.log("info");
        $http.get("json/music.json").success(function(response){
            $scope.musicCtrl.tracks = response;
            console.log("response : ", $scope.musicCtrl.items);
        });
    }

    getInfo();

    $scope.musicCtrl.showDetails = function(item){
        LocalMemory.updateLocalMemory('item', item);
        console.log("item is  : ",item);
        $state.go('details');
    }
    
});

