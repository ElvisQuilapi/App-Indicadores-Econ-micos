angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
    $scope.name = 'Indicadores Económicos';

    $http.get('http://www.mindicador.cl/api').success(function(data) {
        $scope.dailyIndicators = data;
    }).error(function() {
        console.log('Error al consumir API');
    });
});
