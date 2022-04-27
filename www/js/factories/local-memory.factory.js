angular.module('alzheimer-app') 

 .factory('LocalMemory', function($state) {
   var data = {};
   var updateLocalMemory = function(attr, val) {
     data[attr] = val
   }

   return {
     data: data,
     updateLocalMemory: updateLocalMemory
   }

 })
