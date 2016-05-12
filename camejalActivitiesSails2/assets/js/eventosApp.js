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

    eventos.$inject=['$scope', '$rootScope','FuncionariosService','EventosService','InstitucionesService','CiudadesService','EstadosService','TipoEventosService','ParticipacionService','$timeout','JsPopup'];
    //cargoInfo.$inject=['$scope', '$rootScope','$routeParams', 'EventosService','InstitucionesService'];

    function eventos($scope, $rootScope,FuncionariosService,EventosService,InstitucionesService,CiudadesService,EstadosService,TipoEventosService,ParticipacionService,$timeout,JsPopup){
        var vm = this;
        vm.formData = {};
        vm.eventos = [];
        vm.addTitle="Agregar Evento";
        vm.editTitle="Editar Evento";
        vm.editTitle="Desea eliminar el evento?";
        vm.formPath="templates/eventos/form.html";

        FuncionariosService.getFuncionarios().then(function(response) {
            vm.funcionarios = response;
            
        });
        EventosService.getEventos().then(function(response) {
            vm.eventos = response; 
            console.log(response); 
        });
        InstitucionesService.getInstituciones().then(function(response) {
            vm.instituciones = response;
            
        });
        ParticipacionService.getParticipaciones().then(function(response) {
            vm.participaciones = response;
        });
        TipoEventosService.getTipoEventos().then(function(response) {
            vm.tipoEventos = response;    
        });
        CiudadesService.getCiudades().then(function(response) {
            vm.CiudadesService = response;  
        });
        EstadosService.getEstados().then(function(response) {
            vm.estados = response;  
        });
        vm.delete= function(id){
            EventosService.removeEvento(id).then(function(response) {
                EventosService.getEventos().then(function(response) {
                    vm.eventos = response; 
                    console.log(response); 
                });
            }, function(err) {
                vm.error("Hubo un error al editar el evento");
            });
        }
        vm.updateData= function (data){
            console.log(data);
            vm.fillData(data);
            $('.editModal').modal('show');
        };
        vm.confirmationModal= function (data){
            vm.fillData(data);
            (JsPopup.confirmationJs())?vm.delete(vm.formData.id):vm.clearForm();

        };
        vm.fillData = function(data){
            vm.formData.id=data.id;
            vm.formData.nombre=data.nombre;
            vm.formData.tema=data.tema;
            vm.formData.fecha=data.fecha.slice(0, 10);
            vm.formData.institucion_id=data.institucion_id;
            vm.formData.ciudad_id=data.ciudad_id;
            vm.formData.funcionario_id=data.funcionario_id;
            vm.formData.participacion_id=data.participacion_id;
            vm.formData.tipo_evento_id=data.tipo_evento_id;
            vm.formData.numero_asistentes=data.numero_asistentes;
        };
        vm.edit= function(){
            //vm.formData.institucion_id=vm.formData.institucion_id.id;
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
            console.log(vm.formData);
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
        vm.updateCiudades = function(){
            console.log(vm.formData.estado_id); 
            CiudadesService.getCiudadByEstado(vm.formData.estado_id.id).then(function(response) {
                vm.ciudades = response;  
                console.log(response);
            });           
        }
    }    
})();