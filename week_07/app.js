// Declare the AngularJS module
var app = angular.module('helloWorldApp', []);

// Create a controller
app.controller('HelloWorldController', function($scope) {
  // Initial data
  $scope.message = "Hello, World! This is AngularJS!";
  $scope.userName = "";
  
  // List of friends
  $scope.friends = ['John', 'Jane', 'Mary'];

  // Function to add a new friend
  $scope.addFriend = function() {
    var newFriend = prompt("Enter the name of a new friend:");
    if (newFriend) {
      $scope.friends.push(newFriend);
    }
  };
});
