angular.module('alzheimer-app')

.directive('focusMe', function($timeout) {
  return {
    link: function(scope, element, attrs) {

      $timeout(function() {
      	console.log("here")
        element[0].focus(); 
      },500);
    }
  };
})
.directive('limitChar', function() {
    'use strict';
    return {
        restrict: 'A',
        scope: {
            limit: '=limit',
            ngModel: '=ngModel'
        },
        link: function(scope) {
            scope.$watch('ngModel', function(newValue, oldValue) {
                console.log("newValue",newValue, oldValue)
                if(newValue){
                    console.log("newValue.toString().length",newValue.toString().length) 
                }
                if(oldValue){
                    console.log("oldValue.toString().length",oldValue.toString().length) 

                }
               
                if (newValue) {
                    var length = newValue.toString().length;
                    console.log(length,scope.ngModel)
                    if (length > scope.limit) {
                        scope.ngModel = oldValue;
                        console.log(scope.ngModel)
                    }
                }
            });
        }
    };
})
.directive('iframeOnload', function(){
    return {
        scope: {
            callBack: '&iframeOnload'
        },
        link: function(scope, element, attrs){
            element.on('load', function(){
                return scope.callBack();
            })
        }
    }
})