angular.module('gestor.controllers', [])

.controller('MainCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state){
	
	alert("Im in main")
	console.log("im in main");
	
}])
.controller('ApointmentCtrl', ['$scope', '$http', '$stateParams', 'fsData', '$localStorage', function ($scope, $http, $stateParams, fsData, $localStorage){
	
	console.log("im in apointment");
	
	
	
}]);
