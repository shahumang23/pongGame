angular.module('PongGameApp', [
  'PongGameApp.services',
  'PongGameApp.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/pongGame", {templateUrl: "sections/main.ng.html", controller: "pongGameController"}).
	otherwise({redirectTo: '/pongGame'});
}]);