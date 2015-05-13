angular.module('gestor.controllers', [])
.controller('IntroCtrl', ['$scope', '$http', '$state', '$ionicSlideBoxDelegate', function ($scope, $http, $state, $ionicSlideBoxDelegate){
	

	console.log("im in intro");
	
	 // Called to navigate to the main app
	  $scope.startApp = function() {
	    $state.go('main');
	  };
	  $scope.next = function() {
	    $ionicSlideBoxDelegate.next();
	    
	  };
	  $scope.previous = function() {
	    $ionicSlideBoxDelegate.previous();
	  };

	  // Called each time the slide changes
	  $scope.slideChanged = function(index) {
	    $scope.slideIndex = index;
	  };
	
	
}])
.controller('MainCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state){
	
	alert("Im in main")
	console.log("im in main");
	
}])
.controller('ApointmentCtrl', ['$scope', '$http', '$stateParams', 'agencyData', function ($scope, $http, $stateParams, agencyData){
	
	console.log("im in apointment");
	
	
	
}]);
