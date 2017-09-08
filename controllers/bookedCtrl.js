angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrv){
    var id = parseInt($stateParams.id)
    
      var packageInfo = mainSrv.packageInfo
      
      for (var i = 0; i < packageInfo.length; i++) {
        if (packageInfo[i].id === id) {
          $scope.foundCity = packageInfo[i].city
          $scope.foundCountry = packageInfo[i].country
        }
      }


    // $scope.package = mainSrv.packageInfo.find(function(cur) {
    //     return cur.city == $stateParams.city;
    //   });
    //   $scope.myStyle = {
    //     background: "url(" + $scope.package.image + ")",
    //     "background-size": "cover",
    //     "background-position": "center center"
    //   };
})