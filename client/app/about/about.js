'use strict';

angular.module('blogApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        template: '<about></about>'
      });
  });
