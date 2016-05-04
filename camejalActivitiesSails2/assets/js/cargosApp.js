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

    cargos.$inject=['$scope', '$rootScope','CargosService'];

    function cargos($scope, $rootScope,CargosService){
        var vm = this;
        vm.addTitle="Agregar Cargo";
        vm.editTitle="Editar Cargo";
        vm.formPath="templates/cargos/form.html";
        vm.formData = {};
        vm.cargos = [];

        CargosService.getCargos().then(function(response) {
            vm.cargos = response;
            
        });
            
        vm.delete= function(index,id){
            console.log(index);
            console.log(id);
            CargosService.removeCargo(id).then(function(response) {
                CargosService.getCargos().then(function(response) {
                    vm.cargos = response;
                });
            }, function(err) {
                //$('.errorMsg').modal('show');
                alert("Hubo un error al realizar la transaccion");
            });
        }
        vm.updateData= function (data){
                vm.formData.id=data.id;
                vm.formData.tipo=data.tipo;
                $('.editModal').modal('show');
        };
        vm.edit= function(){
            CargosService.updateCargo(vm.formData).then(function(response) {
				console.log("is updating the data");
                CargosService.getCargos().then(function(response) {
                    vm.cargos = response;
                });
                vm.formData={};
            }, function(err) {
                //$('.errorMsg').modal('show');
                alert("Hubo un error al realizar la transaccion");
            });
            $('.editModal').modal('hide');
        }
        vm.create= function(){
            CargosService.addCargo(vm.formData).then(function(response) {
                CargosService.getCargos().then(function(response) {
                    vm.cargos = response;
                    
                });
                vm.formData={};
            }, function(err) {
                //$('.errorMsg').modal('show');
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