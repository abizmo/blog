'use strict';

describe('Component: PostsComponent', function () {

  // load the controller's module
  beforeEach(module('blogApp'));

  var PostsComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PostsComponent = $componentController('PostsComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
