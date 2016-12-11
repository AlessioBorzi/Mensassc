(function () {
  'use strict';

  var app = angular.module('mensassc', ['ui.router', 'ui.bootstrap']);

  app.run(function($rootScope) {
      $rootScope.loginFlag = false;
      $rootScope.prenotazioniFlag = true;
  });
}());
