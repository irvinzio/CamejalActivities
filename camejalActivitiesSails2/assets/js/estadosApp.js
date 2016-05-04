(function(){
    'use strict';
    app.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
        .when('/estados', {
          templateUrl: '/templates/estados/list.html',
          controller: 'estadosCtrl as vm',
        })
      }]);
    
    app.controller('estadosCtrl',estados);

    estados.$inject=['$scope', '$rootScope','EstadosService','$timeout'];

    function estados($scope, $rootScope,EstadosService,$timeout){
        var vm = this;
        vm.addTitle="Agregar Estado";
        vm.editTitle="Editar Estado";
        vm.formPath="templates/estados/form.html";
        vm.formData = {};
        vm.estados = [];

        EstadosService.getEstados().then(function(response) {
            vm.estados = response;
            
        });
            
        vm.delete= function(id){
            EstadosService.removeEstado(id).then(function(response) {
                EstadosService.getEstados().then(function(response) {
                    vm.estados = response;
                });
                vm.success("Se elimino el estado correctamente");
            }, function(err) {
                vm.error("Hubo un error al eliminar el estado");
            });
        }
        vm.updateData= function (data){
                vm.formData.id=data.id;
                vm.formData.nombre=data.nombre;
                $('.editModal').modal('show');
        };
        vm.edit= function(){
            EstadosService.updateEstado(vm.formData).then(function(response) {
                EstadosService.getEstados().then(function(response) {
                    vm.estados = response;
                });
                vm.clearForm();
                vm.success("Se edito el estado correctamente");
            }, function(err) {
                vm.error("Hubo un error al editar el estado");
            });
            $('.editModal').modal('hide');
        }
        vm.create= function(){
            console.log("before = "+JSON.stringify(vm.formData));
            EstadosService.addEstado(vm.formData).then(function(response) {
                console.log("after = "+JSON.stringify(vm.formData));
                EstadosService.getEstados().then(function(response) {
                    vm.estados = response;
                    
                });
                vm.clearForm();
                vm.success("Se creo el estado correctamente");
            }, function(err) {
                vm.error("Hubo un error al crear el estado");
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