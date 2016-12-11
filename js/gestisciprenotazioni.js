var app = angular.module('mensassc');

app.controller("Gestisciprenotazioni", function ($rootScope, $scope, $state) {
    $scope.Accedi = function(){
        $rootScope.prenotazioniFlag = false;
        $state.go("gestisciprenotazioni");
    };
});
