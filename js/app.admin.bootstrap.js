
var ctrl = 'controllers/ctrl';

require.config({
	baseUrl: '/js',
	paths: {
		ngDefine: 'lib/ngDefine',
		ngParse: 'lib/ngParse',
		jquery: 'lib/jquery.min',
		angular: 'lib/angular',
		appMain: 'modules/app.main',
		appGlobal: 'modules/app.global',
		controller: ctrl
	},
	shim: {
		'angular': {'exports': 'angular', deps: ['jquery']},
	},
	priority: ['angular']
});

// This is very IMPORTANT if using Angular v1.2+
window.name = "NG_DEFER_BOOTSTRAP!";

require([
	'ngDefine',
	'jquery',
	'angular'
], function(ngDefine, $, ng){
	require(['appMain'], function(appMain){
		angular.bootstrap(document, [appMain['name']]);
	});
});
