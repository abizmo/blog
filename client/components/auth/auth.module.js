'use strict';

angular.module('blogApp.auth', [
  'blogApp.constants',
  'blogApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
