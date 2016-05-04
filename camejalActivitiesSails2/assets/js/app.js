(function () {
    app = angular.module('app', ['ngRoute', 'ui.bootstrap']);
     /*
    .config(config);

    config.$inject = ['$routeProvider','$locationProvider'];
   
    function config($routeProvider,$locationProvider) {
        $locationProvider.html5Mode(false);
        console.log('entro a routes');
        $routeProvider
            .when('/funcionarios/:id', {
                templateUrl: 'templates/funcionarios/show.html',
                controller: 'funcionariosInfoCtrl',
                controllerAs: 'vm'
            })
            .when('/funcionarios/edit/:id', {
               templateUrl: '/templates/funcionarios/edit.html',
                controller: 'funcionariosController',
                controllerAs: 'vm'
            })
             .when('/funcionarios/new', {
               templateUrl: 'templates/funcionarios/new.html',
                controller: 'funcionariosController',
                controllerAs: 'vm'
            })
            .when('/funcionarios', {
                templateUrl: '/templates/funcionarios/list.html',
                controller: 'funcionariosListCtrl',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    } 
    */
    
})();