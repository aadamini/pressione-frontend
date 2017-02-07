   
app.controller('PressioneController',['$http','$scope', function($http,$scope) {
    var vm = this;
    vm.init = function(){
    vm.test = $scope.test;
    
    $http.get("http://localhost/pa/elenco.php")
           .then(function(responce) {
              console.log(responce.data);
           });
        
    };
    
    vm.init();
}]);

app.factory('PressioneService',['$http','$scope', function($http,$scope) {
   
}]);