(function () {
  'use strict';

  angular.module('myFirstApp',[])
  .controller('MyFirstControllers',MyFirstControllert);

   MyFirstControllert.$inject=['$scope'];
   function MyFirstControllert($scope)
   {
     $scope.name="Hello World";
   }
})();

//
// .controller('MyFirstController',['$scope','$filter',function ($scope,$filter) {
//   $scope.name='Dhiraj Kene';
//   $scope.upper=function(){
//     var upCase=$filter('uppercase');
//     // $scope.name=upCase($scope.name);
//   };
// }]);
