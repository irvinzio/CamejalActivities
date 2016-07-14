(function(){
    'use strict';
    app.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
        .when('/instituciones', {
          templateUrl: '/templates/instituciones/list.html',
          controller: 'institucionesCtrl as vm',
        })
      }]);
    
    app.controller('institucionesCtrl',instituciones);

    instituciones.$inject=['$scope', '$rootScope','InstitucionesService','$timeout','JsPopup'];

    function instituciones($scope, $rootScope,InstitucionesService,$timeout,JsPopup){
        var vm = this;
        vm.addTitle="Agregar Institucion";
        vm.editTitle="Editar Institucion";
        vm.formPath="templates/instituciones/form.html";
        vm.deleteTitle="Desea eliminar la institucion?";
        vm.formData = {};
        vm.instituciones = [];

        InstitucionesService.getInstituciones().then(function(response) {
            vm.instituciones = response;
            
        });
            
        vm.delete= function(id){
            InstitucionesService.removeInstitucion(id).then(function(response) {
                InstitucionesService.getInstituciones().then(function(response) {
                    vm.instituciones = response;
                });
                vm.success("Se elimino la institucion correctamente");
            }, function(err) {
                vm.error("Hubo un error al eliminar la institucion");
            });
        }
        vm.updateData= function (data){
            vm.fillData(data);
            $('.editModal').modal('show');
        };
        vm.confirmationModal= function (data){
            console.log(data);
            vm.fillData(data);
            (JsPopup.confirmationJs())?vm.delete(vm.formData.id):vm.clearForm();

        };
         vm.fillData = function(data){
            vm.formData.id=data.id;
            vm.formData.nombre=data.nombre;
        };
        vm.edit= function(){
            InstitucionesService.updateInstitucion(vm.formData).then(function(response) {
                InstitucionesService.getInstituciones().then(function(response) {
                    vm.instituciones = response;
                });
                vm.clearForm();
                vm.success("Se edito la institucion correctamente");
            }, function(err) {
                vm.error("Hubo un error al editar la institucion");
            });
            $('.editModal').modal('hide');
        }
        vm.create= function(){
            InstitucionesService.addInstitucion(vm.formData).then(function(response) {
                InstitucionesService.getInstituciones().then(function(response) {
                    vm.instituciones = response;
                    
                });
                vm.clearForm();
                vm.success("Se creo la institucion correctamente");
            }, function(err) {
                vm.error("Hubo un error al crear la institucion");
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