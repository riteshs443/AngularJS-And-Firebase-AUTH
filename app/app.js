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
        controller: 'AdminAuth as register',
        templateUrl: 'views/register.html'
      });

    $urlRouterProvider.otherwise('/');
  })
  .constant('FirebaseUrl', 'https://ashummaapp.firebaseio.com/');
