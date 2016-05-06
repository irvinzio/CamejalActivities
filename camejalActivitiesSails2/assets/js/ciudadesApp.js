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

    ciudades.$inject=['$scope', '$rootScope','CiudadesService','EstadosService','$timeout','JsPopup'];

    function ciudades($scope, $rootScope,CiudadesService,EstadosService,$timeout,JsPopup){
        var vm = this;
        vm.addTitle="Agregar Ciudad";
        vm.editTitle="Editar Ciudad";
        vm.formPath="templates/ciudades/form.html";
        vm.confirmationTitle="Deses eliminar la cuidad";
        vm.formData = {};
        vm.ciudades = [];
        vm.estados = [];

        CiudadesService.getCiudades().then(function(response) {
            vm.ciudades = response;
            
        });

        EstadosService.getEstados().then(function(response) {
            vm.estados = response;
            
        });
            
        vm.delete= function(){
            CiudadesService.removeCiudad(vm.formData.id).then(function(response) {
                CiudadesService.getCiudades().then(function(response) {
                    vm.ciudades = response;
                });
                vm.success("Se elimino la ciudad correctamente");
            }, function(err) {
                vm.error("Hubo un error al eliminar la ciudad");
            });
        };
        vm.confirmationModal= function (data){
            console.log("entro al pinche modal");
            //vm.formData.index=index;
            console.log(data);
            vm.fillData(data);
            (JsPopup.confirmationJs())?vm.delete():vm.clearForm();

        };
        vm.updateData= function (data){
            vm.fillData(data);
            $('.editModal').modal('show');
        };       
        vm.fillData= function (data){
            console.log("cambia la pinche info");
                vm.formData.id=data.id;
                vm.formData.nombre=data.nombre;
                vm.formData.estado_id=data.estado_id;
        };
        vm.edit= function(){
            console.log(vm.formData);
            //vm.formData.estado_id=vm.formData.estado_id.id;
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
        };
        vm.create= function(){
            console.log(vm.formData);
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
            
        $scope.predicate = 'nombre';
        $scope.reverse = true;
        vm.order = function(predicate) {
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
            $scope.predicate = predicate;
        };
    }    
})();
