'use strict';
angular.module('blogApp')
  .controller('ListCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.posts = '';
    $http.get('/api/posts').then(response => {
      $scope.posts = response.data;
    });
  }])
  .controller('DetailCtrl', ['$scope', '$http', '$routeParams', 'Auth', function ($scope, $http, $routeParams, Auth) {
    $scope.post = '';
    $scope.isLoggedIn = Auth.isLoggedIn;
    $http.get('/api/posts/' + $routeParams.id).then(response => {
      $scope.post = response.data;
    });
  }]);
