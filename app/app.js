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
        url: '/main',
        templateUrl: 'views/home.html',
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl',
      });

    $urlRouterProvider.otherwise('/main');
  })
  .constant('FirebaseUrl', 'https://ashummaapp.firebaseio.com/');
