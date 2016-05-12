(function(){
    'use strict';
    app.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
        .when('/cargos', {
          templateUrl: '/templates/cargos/list.html',
          controller: 'cargosCtrl as vm',
        })
      }]);
    
    app.controller('cargosCtrl',cargos);

    cargos.$inject=['$scope', '$rootScope','CargosService','JsPopup'];

    function cargos($scope, $rootScope,CargosService,JsPopup){
        var vm = this;
        vm.addTitle="Agregar Cargo";
        vm.editTitle="Editar Cargo";
        vm.formPath="templates/cargos/form.html";
        vm.formData = {};
        vm.cargos = [];
        vm.success=false;

        CargosService.getCargos().then(function(response) {
            vm.cargos = response;
            
        });
            
        vm.delete= function(id){
            CargosService.removeCargo(id).then(function(response) {
                CargosService.getCargos().then(function(response) {
                    vm.cargos = response;
                    vm.success=true;
                });
            }, function(err) {
                vm.success=false;
                alert("Hubo un error al realizar la transaccion");
            });
        }
        vm.updateData= function (data){
                vm.fillData(data);
                $('.editModal').modal('show');
        };
        vm.confirmationModal= function (data){
            vm.fillData(data);
            (JsPopup.confirmationJs())?vm.delete(vm.formData.id):vm.clearForm();

        };
        vm.fillData = function(data){
             vm.formData.id=data.id;
                vm.formData.tipo=data.tipo;
        };
        vm.edit= function(){
            CargosService.updateCargo(vm.formData).then(function(response) {
                CargosService.getCargos().then(function(response) {
                    vm.cargos = response;
                    vm.success=true;
                });
                vm.formData={};
            }, function(err) {
                vm.success=false;
                alert("Hubo un error al realizar la transaccion");
            });
            $('.editModal').modal('hide');
        }
        vm.create= function(){
            CargosService.addCargo(vm.formData).then(function(response) {
                CargosService.getCargos().then(function(response) {
                    vm.cargos = response;
                    vm.success=true;
                });
                vm.formData={};
            }, function(err) {
                vm.success=false;
                alert("Hubo un error al realizar la transaccion");
            });
            $('.addModal').modal('hide');
        }
        
        $scope.predicate = 'tipo';
        $scope.reverse = true;
        vm.order = function(predicate) {
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
            $scope.predicate = predicate;
          };
    }    
})();