(function(){
    'use strict';
    app.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
        .when('/participaciones', {
          templateUrl: '/templates/participaciones/list.html',
          controller: 'participacionesCtrl as vm',
        })
      }]);
    
    app.controller('participacionesCtrl',participaciones);

    participaciones.$inject=['$scope', '$rootScope','ParticipacionService','$timeout','JsPopup'];

    function participaciones($scope, $rootScope,ParticipacionService,$timeout,JsPopup){
        var vm = this;
        vm.addTitle="Agregar Participacion";
        vm.editTitle="Editar Participacion";
        vm.formPath="templates/participaciones/form.html";
        vm.deleteTitle="Desea eliminar la participacion?";
        vm.formData = {};
        vm.participaciones = [];

        ParticipacionService.getParticipaciones().then(function(response) {
            vm.participaciones = response;
        });
            
        vm.delete= function(id){
            ParticipacionService.removeParticipacion(id).then(function(response) {
                ParticipacionService.getParticipaciones().then(function(response) {
                    vm.participaciones = response;
                });
            }, function(err) {
                vm.error("Hubo un error al eliminar la participacion");
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
            ParticipacionService.updateParticipacion(vm.formData).then(function(response) {
                ParticipacionService.getParticipaciones().then(function(response) {
                    vm.participaciones = response;
                });
                vm.clearForm();
                vm.success("Se edito la participacion correctamente");
            }, function(err) {
                vm.error("Hubo un error al editar la participacion");
            });
            $('.editModal').modal('hide');
        }
        vm.create= function(){
            ParticipacionService.addParticipacion(vm.formData).then(function(response) {
                ParticipacionService.getParticipaciones().then(function(response) {
                    vm.participaciones = response;
                    
                });
                vm.clearForm();
                vm.success("Se edito la participacion correctamente");
            }, function(err) {
                vm.error("Hubo un error al crear la participacion");
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