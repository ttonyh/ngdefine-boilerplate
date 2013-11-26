define(['angular', 'directives/changeColor'], function(ng){
	
	console.info("Loaded controller...");

	var module = ng.module("appAdmin");
	
	module.controller('ctrlTop', ['$scope', function($scope){
		
		$scope.message = "It Works!";
		
	}]);

});

