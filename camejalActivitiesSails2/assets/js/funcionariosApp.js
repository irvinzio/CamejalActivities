(function(){
    'use strict';
    app.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
        .when('/funcionarios', {
          templateUrl: '/templates/funcionarios/list.html',
          controller: 'funcionariosCtrl as vm',
        })
      }]);
    
    app.controller('funcionariosCtrl',funcionarios);

    funcionarios.$inject=['$scope', '$rootScope', 'FuncionariosService','CargosService'];
    //funcionarioInfo.$inject=['$scope', '$rootScope','$routeParams', 'FuncionariosService','CargosService'];

    function funcionarios($scope, $rootScope,FuncionariosService,CargosService){
        var vm = this;
        vm.formData = {};
        vm.funcionarios = [];
        vm.selectedCargo={id: 0,tipo: 'Cargos'};

        FuncionariosService.getFuncionarios().then(function(response) {
            vm.funcionarios = response;
            
        });
        CargosService.getCargos().then(function(response) {
            vm.cargos = response;
            
        });
        
        vm.delete= function(index,id){
            FuncionariosService.removeFuncionario(id).then(function(response) {
                console.log(response);
                vm.funcionarios.splice(index, 1);
            }, function(err) {
                //$('.errorMsg').modal('show');
                alert("Hubo un error al realizar la transaccion");
            });
        }
        vm.updateData= function (data){
            console.log(data);
                vm.formData.id=data.id;
                vm.formData.nombres=data.nombres;
                vm.formData.apellido_materno=data.apellido_materno;
                vm.formData.apellido_paterno=data.apellido_paterno;
                vm.formData.cargo_id=data.cargo_id;
                $('.editFuncionario').modal('show');
        };
        vm.edit= function(){
            console.log("esta editando");
            vm.formData.cargo_id=vm.formData.cargo_id.id;
            FuncionariosService.updateFuncionario(vm.formData).then(function(response) {
                FuncionariosService.getFuncionarios().then(function(response) {
                    vm.funcionarios = response;
                    
                });
                vm.formData={};
            }, function(err) {
                //$('.errorMsg').modal('show');
                alert("Hubo un error al realizar la transaccion");
            });
            $('.editFuncionario').modal('show');
        }
        vm.create= function(){
            FuncionariosService.addFuncionario(vm.formData).then(function(response) {
                FuncionariosService.getFuncionarios().then(function(response) {
                    vm.funcionarios = response;
                    
                });
                vm.formData={};
            }, function(err) {
                //$('.errorMsg').modal('show');
                alert("Hubo un error al realizar la transaccion");
            });
            $('.addFuncionario').modal('hide');
        }
    }    
})();