/*jslint browser: true, white: true, plusplus: true*/
/*global angular, console, alert*/

(function () {
  'use strict';

  var app = angular.module('mensassc');

  app.config(function ($stateProvider, $urlRouterProvider) {

    /* routing */

    // default route
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('login', {
      url: '/',
      controller: 'Login',
      templateUrl: 'login.html'
    })
      .state('prenotazioni', {
      url: '/prenotazioni',
      controller: 'Prenotazioni',
      templateUrl: 'prenotazioni.html'
    })
      .state('gestisciprenotazioni', {
      url: '/gestisciprenotazioni',
      controller: 'Gestisciprenotazioni',
      templateUrl: 'gestisciprenotazioni.html'
   });

  });

}());
