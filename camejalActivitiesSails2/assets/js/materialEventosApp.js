(function(){
    'use strict';
    app.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
        .when('/materialEventos', {
          templateUrl: '/templates/materialEventos/list.html',
          controller: 'materialEventoCtrl as vm',
        })
      }]);
    
    app.controller('materialEventoCtrl',materialEvento);

    materialEvento.$inject=['$scope', '$rootScope','MaterialEventosService','EventosService','MaterialDidacticoService','$timeout','JsPopup','$compile'];

    function materialEvento($scope, $rootScope,MaterialEventosService,EventosService,MaterialDidacticoService,$timeout,JsPopup,$compile){
        var vm = this;
        vm.addTitle="Agregar material para evento";
        vm.editTitle="Editar material para evento";
        vm.formPath="templates/materialEventos/form.html";
        vm.deleteTitle="Desea eliminar el material del evento?";
        vm.formData = {};
        vm.materialEvento = [];
        vm.formData.materiales = [{name: 'opt1'}];
        console.log("entro");

        MaterialEventosService.getMaterialEventos().then(function(response) {
            vm.materialEvento = response;
            
        });
        EventosService.getEventos().then(function(response) {
            vm.eventos = response; 
        });
        MaterialDidacticoService.getMaterialDidacticos().then(function(response) {
            vm.materialDidactico = response;
        });    
        vm.delete= function(id){
            MaterialEventosService.removeMaterialEvento(id).then(function(response) {
                MaterialEventosService.getMaterialEventos().then(function(response) {
                    vm.materialEvento = response;
                });
            }, function(err) {
                vm.error("Hubo un error al eliminar elmaterial para evento");
            });
        }
        MaterialDidacticoService.getMaterialDidacticos().then(function(response) {
            vm.materialDidactico = response;
        });
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
            vm.formData.cantidad=data.cantidad;
            vm.formData.material_didactico_id=data.material_didactico_id;
            vm.formData.evento_id=data.evento_id;
        };
        vm.edit= function(){
            vm.formData.material_didactico_id=vm.formData.material_didactico_id.id;
            vm.formData.evento_id=vm.formData.evento_id.id;
            MaterialEventosService.updateMaterialEvento(vm.formData).then(function(response) {
                MaterialEventosService.getMaterialEventos().then(function(response) {
                    vm.materialEvento = response;
                });
                vm.clearForm();
                vm.success("Se edito el material para evento correctamente");
            }, function(err) {
                console.log(err);
                vm.error("Hubo un error al editar elmaterial para evento");
            });
            $('.editModal').modal('hide');
        }
        vm.create= function(){
            console.log(vm.formData);
            //vm.formData.material_didactico_id=vm.formData.material_didactico_id.id;
            vm.formData.materiales.forEach(
                    function(material,index){
                        material.evento_id=vm.formData.evento_id.id;
                        material.material_didactico_id=material.material_didactico_id.id;
                        console.log(material);
                         MaterialEventosService.addMaterialEvento(material).then(function(response) {
                            MaterialEventosService.getMaterialEventos().then(function(response) {
                                vm.materialEvento = response;
                            });
                            vm.clearForm();
                            vm.success("Se edito elmaterial para evento correctamente");
                        }, function(err) {
                            console.log(error);
                            vm.error("Hubo un error al crear elmaterial para evento");
                        });
                    }
                );  
            $('.addModal').modal('hide');
            vm.formData.materiales = [{name: 'opt1'}];
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

        vm.predicate = 'tipo';
        vm.reverse = true;
        vm.order = function(predicate) {
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
            $scope.predicate = predicate;
        }
        vm.createField = function(){
            console.log("compiladno html 2");
            var html='<hr>\
              <select class="form-control pre-selected-options materialDidacticoList" name="materialDidactico" ng-click="vm.loadMaterials()" ng-options="md as md.tipo for md in vm.materialDidactico track by md.id" ng-model="vm.formData.material_didactico_id" required>\
                          <option style="display:none" value="">Elige un material</option>\
                      </select>\
                      <input class="form-control" type="number" name="autoridad" ng-model="vm.formData.cantidad" required placeholder="Cantidad" required>\
              ';
            var compiledHtml = $compile(html)(scope);
            $(".materialDidacticoList").append(compiledHtml);
        }
        vm.loadMaterials = function(){;
            vm.materialDidactico=vm.materialDidactico;
        }
        vm.addField = function() {
            var newItemNo = vm.formData.materiales.length+1;
            vm.formData.materiales.push({'name':'opt'+newItemNo});
        };

        vm.removeField = function() {
            var lastItem = vm.formData.materiales.length-1;
            vm.formData.materiales.splice(lastItem);
        };
    }    
})();