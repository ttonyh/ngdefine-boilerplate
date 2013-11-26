define(['angular'], function(ng){
	
	console.info("Loaded directives...");

	var module = ng.module("appGlobal");
	
	module.directive('changeColor', [function(){
		return {
			restrict: 'A',
			link: function(scope, element, attrs){
				var color = attrs.changeColor || 'red';
				
				element.css('color', color);
				
			}
		};
	}]);
	
});

