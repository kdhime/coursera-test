(function () {
  'use strict';

  angular.module('LunchApp',[])
  .controller('LunchCheckController',LunchCheckController).filter('emptyFilter', function() {
    return function(array) {
      console.log(array);
      var filteredArray = array.split(",");
        angular.forEach(array, function(item) {
          if (item) filteredArray.push(item);
        });
      return filteredArray.toString();
    };
  });

   LunchCheckController.$inject=['$scope','$filter'];
   function LunchCheckController($scope,$filter)
   {
     $scope.numberOfItems="";
     $scope.checkForItems=function()
     {
      var name=$scope.numberOfItems;
       var elem=name.split(",");
       if (elem=='') {
         $scope.message='Please enter the data first';
       }
       else if(elem.length<=3 && elem.length!=0)
       {
       $scope.message='Enjoy!';
       }
       else if (elem.length>=3) {
         $scope.message='Too much!';
       }
     };

    // $scope.removedItems=emptyFilter($scope.numberOfItems);
     $scope.removeBlankElem=function()
     {
       var removeBlankElemFun=$filter('emptyFilter');
       $scope.elemRemoval=removeBlankElemFun($scope.name);
           }
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
