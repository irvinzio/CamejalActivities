(function(){
    'use strict';
    app.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
        .when('/tipoEventos', {
          templateUrl: '/templates/tipoEventos/list.html',
          controller: 'tipoEventoCtrl as vm',
        })
      }]);
    
    app.controller('tipoEventoCtrl',tipoEventos);

    tipoEventos.$inject=['$scope', '$rootScope','TipoEventosService','$timeout'];

    function tipoEventos($scope, $rootScope,TipoEventosService,$timeout){
        var vm = this;
        vm.addTitle="Agregar Tipo de Evento";
        vm.editTitle="Editar Tipo de Evento";
        vm.formPath="templates/tipoEventos/form.html";
        vm.formData = {};
        vm.tipoEventos = [];

        TipoEventosService.getTipoEventos().then(function(response) {
            vm.tipoEventos = response;
            
        });
            
        vm.delete= function(index,id){
            TipoEventosService.removeTipoEvento(id).then(function(response) {
                TipoEventosService.getTipoEventos().then(function(response) {
                    vm.tipoEventos = response;
                });
                vm.success("Se elimino la evento correctamente");
            }, function(err) {
                vm.error("Hubo un error al eliminar la evento");
            });
        }
        vm.updateData= function (data){
                vm.formData.id=data.id;
                vm.formData.tipo=data.tipo;
                $('.editModal').modal('show');
        };
        vm.edit= function(){
            TipoEventosService.updateTipoEvento(vm.formData).then(function(response) {
                TipoEventosService.getTipoEventos().then(function(response) {
                    vm.tipoEventos = response;
                });
                vm.clearForm();
                vm.success("Se edito la evento correctamente");
            }, function(err) {
                vm.error("Hubo un error al editar la evento");
            });
            $('.editModal').modal('hide');
        }
        vm.create= function(){
            console.log("data before ="+vm.formData);
            TipoEventosService.addTipoEvento(vm.formData).then(function(response) {
                //vm.clearForm();
                TipoEventosService.getTipoEventos().then(function(response) {
                    vm.tipoEventos = response; 
                });
                vm.success("Se creo ela evento correctamente");
            }, function(err) {
                vm.error("Hubo un error al crear la evento");
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