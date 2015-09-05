var app = angular.module('portfolioApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/bio', {
      templateUrl: 'partials/bio.html',
      controller: 'BioCtrl'
    })
    .when('/projects', {
      templateUrl: 'partials/projects.html',
      controller: 'ProjectsCtrl'
    })
    .when('/resume', {
      templateUrl: 'partials/resume.html',
      controller: 'ResumeCtrl'
    })
    .otherwise({redirectTo: '/'})
})
