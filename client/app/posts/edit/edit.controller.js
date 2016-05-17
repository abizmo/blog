'use strict';

class EditCtrl {
  //start-non-standard
  post = {};
  errors = {};
  submitted = false;
  //end-non-standard

  constructor($http, Auth, $location, $routeParams) {
    this.$http = $http;
    this.Auth = Auth;
    this.$location = $location;
    this.$routeParams = $routeParams;
    this.post = {};
    this.$http.get('/api/posts/' + this.$routeParams.id).then(response => {
      this.post = response.data;
    });
  }

  editPost(form) {
    this.submitted = true;

    if (form.$valid) {
      this.$http.put('/api/posts/' + this.$routeParams.id, {
        title: this.post.title,
        body: this.post.body
      })
        .then(response => {
          // Post created, redirect to posts/:id
          this.$location.path('/posts/' + response.data._id);
        })
        .catch(err => {
          err = err.data;
          this.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
        });
    }
  }
}

angular.module('blogApp')
  .controller('EditCtrl', EditCtrl);
