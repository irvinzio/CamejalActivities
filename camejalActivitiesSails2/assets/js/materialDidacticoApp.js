(function(){
    'use strict';
    app.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
        .when('/materialDidactico', {
          templateUrl: '/templates/materialDidactico/list.html',
          controller: 'materialDidacticoCtrl as vm',
        })
      }]);
    
    app.controller('materialDidacticoCtrl',materialDidactico);

    materialDidactico.$inject=['$scope', '$rootScope','MaterialDidacticoService','$timeout'];

    function materialDidactico($scope, $rootScope,MaterialDidacticoService,$timeout){
        var vm = this;
        vm.addTitle="Agregar MaterialDidactico";
        vm.editTitle="Editar MaterialDidactico";
        vm.formPath="templates/materialDidactico/form.html";
        vm.formData = {};
        vm.materialDidactico = [];

        MaterialDidacticoService.getMaterialDidacticos().then(function(response) {
            vm.materialDidactico = response;
            
        });
            
        vm.delete= function(index,id){
            MaterialDidacticoService.removeMaterialDidactico(id).then(function(response) {
                MaterialDidacticoService.getMaterialDidacticos().then(function(response) {
                    vm.materialDidactico = response;
                });
            }, function(err) {
                vm.error("Hubo un error al eliminar el material didactico");
            });
        }
        vm.updateData= function (data){
                vm.formData.id=data.id;
                vm.formData.tipo=data.tipo;
                $('.editModal').modal('show');
        };
        vm.edit= function(){
            MaterialDidacticoService.updateMaterialDidactico(vm.formData).then(function(response) {
                MaterialDidacticoService.getMaterialDidacticos().then(function(response) {
                    vm.materialDidactico = response;
                });
                vm.clearForm();
                vm.success("Se edito el material didactico correctamente");
            }, function(err) {
                vm.error("Hubo un error al editar el material didactico");
            });
            $('.editModal').modal('hide');
        }
        vm.create= function(){
            console.log(vm.formData);
            MaterialDidacticoService.addMaterialDidactico(vm.formData).then(function(response) {
                MaterialDidacticoService.getMaterialDidacticos().then(function(response) {
                    vm.materialDidactico = response;
                    
                });
                vm.clearForm();
                vm.success("Se edito el material didactico correctamente");
            }, function(err) {
                vm.error("Hubo un error al crear el material didactico");
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

        $scope.predicate = 'tipo';
        $scope.reverse = true;
        vm.order = function(predicate) {
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
            $scope.predicate = predicate;
          };
    }    
})();