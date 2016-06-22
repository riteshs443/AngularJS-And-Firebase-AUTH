'use strict';
angular
  .module('mmaapp', [
    'firebase',
    'angular-md5',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl',
      });

    $urlRouterProvider.otherwise('/');
  })
  .constant('FirebaseUrl', 'https://ashummaapp.firebaseio.com/');
