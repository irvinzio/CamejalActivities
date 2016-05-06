    (function(){
    'use strict';
    app.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
        .when('/eventos', {
          templateUrl: '/templates/eventos/list.html',
          controller: 'eventosCtrl as vm',
        })
      }]);
    
    app.controller('eventosCtrl',eventos);

    eventos.$inject=['$scope', '$rootScope', 'EventosService','InstitucionesService','$timeout'];
    //cargoInfo.$inject=['$scope', '$rootScope','$routeParams', 'EventosService','InstitucionesService'];

    function eventos($scope, $rootScope,EventosService,InstitucionesService,$timeout){
        var vm = this;
        vm.formData = {};
        vm.eventos = [];
        vm.addTitle="Agregar Evento";
        vm.editTitle="Editar Evento";
        vm.editTitle="Desea eliminar el evento?";
        vm.formPath="templates/eventos/form.html";

        EventosService.getEventos().then(function(response) {
            vm.eventos = response;
            
        });
        InstitucionesService.getInstituciones().then(function(response) {
            vm.instituciones = response;
            
        });
        
        vm.delete= function(index,id){
            EventosService.removeEvento(id).then(function(response) {
                console.log(response);
                vm.eventos.splice(index, 1);
                vm.success("Se elimino el evento correctamente");
            }, function(err) {
                vm.error("Hubo un error al editar el evento");
            });
        }
        vm.updateData= function (data){
                vm.fillData(data);
                $('.editModal').modal('show');
        };
        vm.edit= function(){
            vm.formData.institucion_id=vm.formData.institucion_id.id;
            EventosService.updateEvento(vm.formData).then(function(response) {
                vm.clearForm();
                EventosService.getEventos().then(function(response) {
                    vm.eventos = response;
                });
                vm.success("Se edito el evento correctamente");
            }, function(err) {
                vm.error("Hubo un error al editar el evento");
            });
            $('.editModal').modal('hide');
        }
        vm.create= function(){
            EventosService.addEvento(vm.formData).then(function(response) {
                vm.clearForm();
                EventosService.getEventos().then(function(response) {
                    vm.eventos = response;
                });
                vm.success("Se creo el evento correctamente");
            }, function(err) {
                vm.error("Hubo un error al crear el evento");
            });
            $('.addModal').modal('hide');
        }
         vm.fillData = function(data){
            vm.formData.id=data.id;
            vm.formData.nombres=data.nombres;
            vm.formData.apellido_materno=data.apellido_materno;
            vm.formData.apellido_paterno=data.apellido_paterno;
            vm.formData.institucion_id=data.institucion_id;
        };
        vm.confirmationModal= function (index,data){
            vm.fillData(data);
            $('.comfirmationModal').modal('show');
        };
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
    }    
})();