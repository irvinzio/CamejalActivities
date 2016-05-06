(function(){
    'use strict';
    app.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
        .when('/convenios', {
          templateUrl: '/templates/convenios/list.html',
          controller: 'conveniosCtrl as vm',
        })
      }]);
    
    app.controller('conveniosCtrl',convenios);

    convenios.$inject=['$scope', '$rootScope', 'ConveniosService','InstitucionesService','$timeout'];
    //cargoInfo.$inject=['$scope', '$rootScope','$routeParams', 'ConveniosService','InstitucionesService'];

    function convenios($scope, $rootScope,ConveniosService,InstitucionesService,$timeout){
        var vm = this;
        vm.formData = {};
        vm.convenios = [];
        vm.addTitle="Agregar Convenio";
        vm.editTitle="Editar Convenio";
        vm.deleteTitle="Desea eliminar el convenio?";
        vm.formPath="templates/convenios/form.html";

        ConveniosService.getConvenios().then(function(response) {
            vm.convenios = response;
            console.log(vm.convenios);
            
        });
        InstitucionesService.getInstituciones().then(function(response) {
            vm.instituciones = response;
            
        });
        
        vm.delete= function(){
            ConveniosService.removeConvenio(vm.formData.id).then(function(response) {
                console.log(response);
                vm.convenios.splice(vm.formData.index, 1);
                vm.success("Se elimino el convenio correctamente");
            }, function(err) {
                vm.error("Hubo un error al editar el convenio");
            });
        }
        vm.updateData= function (data){
                vm.fillData(data);
                $('.editModal').modal('show');
        };
        vm.edit= function(){
            //vm.formData.institucion_id=vm.formData.institucion_id.id;
            console.log(vm.formData);
            ConveniosService.updateConvenio(vm.formData).then(function(response) {
                vm.clearForm();
                ConveniosService.getConvenios().then(function(response) {
                    vm.convenios = response;
                });
                vm.success("Se edito el convenio correctamente");
            }, function(err) {
                vm.error("Hubo un error al editar el convenio");
            });
            $('.editModal').modal('hide');
        }
        vm.create= function(){
            console.log(vm.formData);
            //vm.formData.institucion_id=vm.formData.institucion_id.id;
            console.log("esta creando el puto registro");
            console.log(vm.formData);
            ConveniosService.addConvenio(vm.formData).then(function(response) {
                vm.clearForm();
                ConveniosService.getConvenios().then(function(response) {
                    vm.convenios = response;
                });
                vm.success("Se creo el convenio correctamente");
            }, function(err) {
                vm.error("Hubo un error al crear el convenio");
            });
            $('.addModal').modal('hide');
        }
         vm.fillData = function(data){
            console.log(data);
            vm.formData.id=data.id;
            vm.formData.nombre=data.nombre;
            vm.formData.autoridad=data.autoridad;
            vm.formData.fecha=data.fecha.slice(0, 10);
            vm.formData.institucion_id=data.institucion_id;
        };
        vm.confirmationModal= function (index,data){
            vm.formData.index=index;
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