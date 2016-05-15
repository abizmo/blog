'use strict';

class NewCtrl {
  //start-non-standard
  post = {};
  errors = {};
  submitted = false;
  //end-non-standard

  constructor($http, Auth, $location) {
    this.$http = $http;
    this.Auth = Auth;
    this.$location = $location;
  }

  addPost(form) {
    this.submitted = true;

    if (form.$valid) {
      this.$http.post('/api/posts/', {
        title: this.post.title,
        body: this.post.body,
        author: this.Auth.getCurrentUser()._id
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
  .controller('NewCtrl', NewCtrl);
