(function () {

  'use strict';

  angular.module('cyber', [
    //angular modules
    'ngAnimate',
    'ngResource',
    'ngMessages',

    //3rd party modules
    'ui-leaflet',
    'ui.router',
    'geolocation',
    'smoothScroll',
    'ui.bootstrap',

    //custom modules
    'cyber.config',
    'cyber.controllers',
    'cyber.services'
  ])

  .run(runBlock)

  .config(configBlock)

  runBlock.$inject = ['$rootScope', '$state', '$stateParams'];

  function runBlock ($rootScope, $state, $stateParams) {
    //placeholder
  }

  configBlock.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

  function configBlock ($stateProvider, $urlRouterProvider, $httpProvider) {
    //$httpProvider.interceptor.push('httpInterceptor');

    $urlRouterProvider
      //if invalid URL, navigate to '/'
      .otherwise('/');

    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: '../views/home.html',
        controller: 'HomeController',
        controllerAs: 'vm',
        resolve: {
        //   alertResource: 'AlertService',
        //   alerts: function(alertResource) {
        //     return alertResource.query().$promise;
        //   }
        }
      })

      .state('signup', {
        url: '/signup',
        templateUrl: '../views/signup.html',
        controller: 'SignupController',
        controllerAs: 'vm'
      })
  }

})();


