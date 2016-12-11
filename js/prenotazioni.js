var app = angular.module('mensassc');

app.controller("Prenotazioni", function ($rootScope, $scope, $state) {
    $scope.Accedi = function(){
        $rootScope.prenotazioniFlag = true;
        $state.go("prenotazioni");
    };
});
