'use strict';

angular.module('blogApp', [
  'blogApp.auth',
  'blogApp.admin',
  'blogApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'validation.match'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/posts'
      });

    $locationProvider.html5Mode(true);
  });
