angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv, $state){
    var country = $state.params.country;
    
    
    var packageInfo = mainSrv.packageInfo;
    
    if($state.params.country){
      $scope.packages = packageInfo.filter(function(val,idx){
            return val.country === country;
        });
    }
    else{
      $scope.packages = packageInfo;
    }
    // $scope.packages = mainSrv.packageInfo;
    });
