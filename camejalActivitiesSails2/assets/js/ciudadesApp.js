(function(){
    'use strict';
    app.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
        .when('/ciudades', {
          templateUrl: '/templates/ciudades/list.html',
          controller: 'ciudadesCtrl as vm',
        })
      }]);
    
    app.controller('ciudadesCtrl',ciudades);

    ciudades.$inject=['$scope', '$rootScope','CiudadesService','EstadosService','$timeout'];

    function ciudades($scope, $rootScope,CiudadesService,EstadosService,$timeout){
        var vm = this;
        vm.addTitle="Agregar Ciudad";
        vm.editTitle="Editar Ciudad";
        vm.formPath="templates/ciudades/form.html";
        vm.formData = {};
        vm.ciudades = [];
        vm.estados = [];

        CiudadesService.getCiudades().then(function(response) {
            vm.ciudades = response;
            
        });

        EstadosService.getEstados().then(function(response) {
            vm.estados = response;
            
        });
            
        vm.delete= function(index,id){
            CiudadesService.removeCiudad(id).then(function(response) {
                CiudadesService.getCiudades().then(function(response) {
                    vm.ciudades = response;
                });
                vm.success("Se elimino la ciudad correctamente");
            }, function(err) {
                vm.error("Hubo un error al eliminar la ciudad");
            });
        }
        vm.updateData= function (data){
                vm.formData.id=data.id;
                vm.formData.nombre=data.nombre;
                vm.formData.estado_id=data.estado_id;
                $('.editModal').modal('show');
        };
        vm.edit= function(){
            console.log(vm.formData);
            vm.formData.estado_id=vm.formData.estado_id.id;
            CiudadesService.updateCiudad(vm.formData).then(function(response) {
                CiudadesService.getCiudades().then(function(response) {
                    vm.ciudades = response;
                });
                vm.clearForm();
                vm.success("Se edito la ciudad correctamente");
            }, function(err) {
                vm.error("Hubo un error al editar la ciudad");
            });
            $('.editModal').modal('hide');
        }
        vm.create= function(){
            CiudadesService.addCiudad(vm.formData).then(function(response) {
                CiudadesService.getCiudades().then(function(response) {
                    vm.ciudades = response;
                    
                });
                vm.clearForm();
                vm.success("Se creo la ciudad correctamente");
            }, function(err) {
                vm.error("Hubo un error al crear la ciudad");
            });
            $('.addModal').modal('hide');
        }
        vm.clearForm= function(){
            vm.formData={};
        };
         vm.error= function(msg){
            vm.errorMsg=msg;
            vm.err=true; 
            $timeout(function(){ vm.err=!vm.err; }, 3000);
        };
         vm.success= function(msg){
            vm.successMsg=msg;
             vm.ok=true; 
             $timeout(function(){ 
                vm.ok=!vm.ok; }, 3000);
        };
            
        $scope.predicate = 'nombre';
        $scope.reverse = true;
        vm.order = function(predicate) {
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
            $scope.predicate = predicate;
        };
    }    
})();