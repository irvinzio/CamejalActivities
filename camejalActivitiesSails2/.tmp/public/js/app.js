(function () {
    app = angular.module('app', ['ngRoute', 'ui.bootstrap']);

    app.service('JsPopup',function(){
        return  {
            confirmationJs: function(){
                            var r = confirm('Desea eliminar el registro?');
                            if (r == true)
                                return true;
                            else
                                return false;
                        },
            confirmationJquery:function() {
                            $( "#dialog-confirm" ).dialog({
                              resizable: false,
                              //height:140,
                              modal: true,
                              buttons: {
                                "Eliminar": function() {
                                  $( this ).dialog( "close" );
                                  return true;
                                },
                                "Cancelar": function() {
                                  $( this ).dialog( "close" );
                                  return false;
                                }
                              }
                            });
                          }
        }
    });
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