var app = angular.module('mensassc');

app.controller("Login", function ($rootScope, $scope, $state) {
    $scope.Accedi = function(){
        /*
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                // Verifica login

                if (this.response.indexOf("Gestisci prenotazioni") > -1)
                    console.log("LOGIN EFFETTUATO CON SUCCESSO");
                else
                    document.getElementById("errore").style.display="block";
            }
        };
        xhttp.open("POST", "http://ws1.unict.it/mensassc/Account/LogOn", false);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("UserName=" + $scope.UserName + "&Password=" + $scope.Password);
        */
        $rootScope.loginFlag = true;
        $state.go("prenotazioni");
    };
});
