var improv=angular.module('improv',['ngRoute']);

improv.config(function($routeProvider){
	routeProvider
		.when('/',{
			templateUrl: 'js/views/home.html',
			controller: 'homeCtrl'

		}) //end of home

		.when('/news',{
			templateUrl:'js/views/news.html',
			controller: 'newsCtrl'
		}) //end of news

		.when('/videos',{
			templateUrl:'js/views/video.html',
			controller:'videosCtrl'
		})

});