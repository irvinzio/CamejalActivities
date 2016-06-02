(function(){
    'use strict';
    app.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
        .when('/funcionariosConvenios', {
          templateUrl: '/templates/funcionariosConvenios/list.html',
          controller: 'funcionariosConveniosCtrl as vm',
        })
      }]);
    
    app.controller('funcionariosConveniosCtrl',funcionariosConvenios);

    funcionariosConvenios.$inject=['$scope', '$rootScope', 'FuncionariosService','FuncionariosConveniosService','ConveniosService','$timeout','JsPopup'];
    //funcionarioInfo.$inject=['$scope', '$rootScope','$routeParams', 'FuncionariosService','CargosService'];

    function funcionariosConvenios($scope, $rootScope,FuncionariosService,FuncionariosConveniosService,ConveniosService,$timeout,JsPopup){
        var vm = this;
        vm.addTitle="Agregar convenio a funcionario";
        vm.editTitle="Editar convenio a funcionario";
        vm.formPath="templates/funcionariosConvenios/form.html";
        vm.deleteTitle="Desea eliminar el funcionario?";
        vm.formData = {};
        vm.funcionariosConvenios = [];
        //vm.selectedCargo={id: 0,tipo: 'Cargos'};

        FuncionariosConveniosService.getFuncionariosConvenios().then(function(response) {
            vm.funcionariosConvenios = response;
            console.log(response);
        });
        ConveniosService.getConvenios().then(function(response) {
            vm.convenios = response;     
        });
        FuncionariosService.getFuncionarios().then(function(response) {
            vm.funcionarios = response;
            
        });
        vm.delete= function(id){
            FuncionariosService.removeFuncionario(id).then(function(response) {
                FuncionariosService.getFuncionarios().then(function(response) {
                    vm.funcionariosConvenios = response;
                });
            }, function(err) {
                //$('.errorMsg').modal('show');
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
            vm.formData.nombres=data.nombres;
            vm.formData.apellido_materno=data.apellido_materno;
            vm.formData.apellido_paterno=data.apellido_paterno;
            vm.formData.cargo_id=data.cargo_id;
        };
        vm.edit= function(){
            vm.formData.cargo_id=vm.formData.cargo_id.id;
            FuncionariosService.updateFuncionario(vm.formData).then(function(response) {
                FuncionariosService.getFuncionarios().then(function(response) {
                    vm.funcionariosConvenios = response;
                    
                });
                vm.formData={};
            }, function(err) {
                //$('.errorMsg').modal('show');
                alert("Hubo un error al realizar la transaccion");
            });
            $('.editModal').modal('hide');
        }
        vm.create= function(){
            FuncionariosConveniosService.addFuncionarioConvenios(vm.formData).then(function(response) {
                FuncionariosConveniosService.getFuncionariosConvenios().then(function(response) {
                    vm.funcionariosConvenios = response;
                });
                vm.clearForm();
            }, function(err) {
                //$('.errorMsg').modal('show');
                alert("Hubo un error al realizar la transaccion");
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