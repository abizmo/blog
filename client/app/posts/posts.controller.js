'use strict';
angular.module('blogApp')
  .controller('ListCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.posts = '';
    $http.get('/api/posts').then(response => {
      $scope.posts = response.data;
    });
  }])
  .controller('DetailCtrl', ['$scope', '$http', '$routeParams', 'Auth', '$location', function ($scope, $http, $routeParams, Auth, $location) {
    $scope.post = '';
    $scope.isLoggedIn = Auth.isLoggedIn;
    $http.get('/api/posts/' + $routeParams.id).then(response => {
      $scope.post = response.data;
    });
    $scope.isOwner = function () {
      return $scope.post.author._id == Auth.getCurrentUser()._id;
    };
    $scope.deletePost = function (post) {
      $http.delete('/api/posts/' + post._id);
      $location.path('/posts/');
    };
  }]);
