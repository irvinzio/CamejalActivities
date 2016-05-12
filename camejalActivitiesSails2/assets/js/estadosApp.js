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

    estados.$inject=['$scope', '$rootScope','EstadosService','$timeout','JsPopup'];

    function estados($scope, $rootScope,EstadosService,$timeout,JsPopup){
        var vm = this;
        vm.addTitle="Agregar Estado";
        vm.editTitle="Editar Estado";
        vm.deleteTitle="Deses eliminar el Estado";
        vm.formPath="templates/estados/form.html";
        vm.formData = {};
        vm.estados = [];

        EstadosService.getEstados().then(function(response) {
            vm.estados = response;  
        });
        vm.confirmationModal= function (data){
            vm.fillData(data);
            (JsPopup.confirmationJquery())?vm.delete():vm.clearForm();

        };    
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
        vm.confirmationModal= function (data){
            vm.fillData(data);
            (JsPopup.confirmationJs())?vm.delete(vm.formData.id):vm.clearForm();

        };      
        vm.fillData= function (data){
                vm.formData.id=data.id;
                vm.formData.nombre=data.nombre;
                vm.formData.estado_id=data.estado_id;
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
            EstadosService.addEstado(vm.formData).then(function(response) {
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