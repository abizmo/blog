'use strict';

angular.module('blogApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/posts', {
        templateUrl: 'app/posts/posts.html',
        controller: 'ListCtrl'
      })
      .when('/posts/:id', {
        templateUrl: 'app/posts/detail.html',
        controller: 'DetailCtrl'
      });
  });
