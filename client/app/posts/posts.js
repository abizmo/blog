'use strict';

angular.module('blogApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/posts', {
        templateUrl: 'app/posts/posts.html',
        controller: 'ListCtrl'
      })
      .when('/posts/new', {
        templateUrl: 'app/posts/new/new.html',
        controller: 'NewCtrl',
        controllerAs: 'vm'
      })
      .when('/posts/:id', {
        templateUrl: 'app/posts/detail.html',
        controller: 'DetailCtrl'
      });
  });
