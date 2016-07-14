this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/alerts.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="alert alert-danger alert-dismissible animate-show errorMsg hide" ng-hide="vm.success" role="alert">\r\n\t<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\r\n  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>\r\n  <span class="sr-only">Error:</span>\r\n  Hubo un pedo haciendo lo que querias hacer!!\r\n</div>\r\n<div class="alert alert-success alert-dismissible animate-show successMsg hide" ng-show="vm.success" role="alert">\r\n\t<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\r\n  <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>\r\n  <span class="sr-only"></span>\r\n  Todo salio chingon , como querias!!\r\n</div>\r\n\r\n<style type="text/css">\r\n.hide{\r\n    display: none\r\n}\r\n</style>';

}
return __p
};

this["JST"]["assets/templates/cargos/edit.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- Small modal\r\n<a href="#/funcionarios/new" title="eliminar"></a>\r\n -->\r\n<div class="modal fade editModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">\r\n  <div class="modal-dialog modal-sm">\r\n    <div class="modal-content">\r\n      <div class="modal-header">\r\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\r\n        <h4 class="modal-title" id="myModalLabel">{{vm.editTitle}}</h4>\r\n      </div>\r\n        <div class="modal-body text-center">\r\n          <div ng-include src="vm.formPath"></div>   \r\n        </div>\r\n        <div class="modal-footer">\r\n          <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>\r\n          <button type="button" class="btn btn-primary" ng-click="vm.edit()" ng-disabled="myForm.$invalid" >Guardar</button>\r\n        </div> \r\n      </div>\r\n  </div>\r\n</div>';

}
return __p
};

this["JST"]["assets/templates/cargos/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form name="myForm">\r\n      <div class="control-group" ng-class="{error: myForm.name.$invalid && !myForm.name.$pristine}">\r\n        <input class="form-control" type="text" name="tipo" ng-model="vm.formData.tipo" required placeholder="nombre cargo">\r\n        <span ng-show="myForm.name.$error.required && !myForm.name.$pristine" class="help-inline">\r\n            Required {{myForm.name.$pristine}}</span>\r\n      </div>        \r\n</form>';

}
return __p
};

this["JST"]["assets/templates/cargos/list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n<div class="panel panel-default" ng-controller="cargosCtrl">\r\n  <div ng-include="\'templates/alerts.html\'"></div>\r\n  <!-- Default panel contents -->\r\n  <div class="panel-heading">Cargos \r\n        <button type="button" class="btn btn-primary text-rigth" data-toggle="modal" data-target=".addModal"><span class="glyphicon glyphicon-plus" aria-hidden="true"></button>\r\n    </div>\r\n\r\n  <!-- Table -->\r\n  <table class="table table-striped">\r\n       \t<thead>\r\n            <tr>\r\n                <th><a href="" ng-click="vm.order(\'tipo\')" >Cargo</a></th>\r\n                <th></th>\t\r\n                <th></th>  \r\n            </tr>\r\n            <tr >\r\n                <td><input class="form-control"ng-model="search" type="text" placeholder="Filter by" ></td>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr ng-repeat="cargo in vm.cargos | orderBy:predicate:reverse | filter:search">\r\n                <td>{{cargo.tipo}}</td>\r\n                <td><a href="#cargos" ng-click="vm.confirmationModal(cargo)" title="eliminar"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a></a></td>\r\n                <td><a href="#cargos" ng-click="vm.updateData(cargo)" title="editar"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></a>\r\n        </p></span></td>\r\n            </tr>\t\t\t\t\r\n        </tbody>\r\n   </table>\r\n   <div ng-include="\'templates/cargos/new.html\'"></div> \r\n    <div ng-include="\'templates/cargos/edit.html\'"></div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["assets/templates/cargos/new.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- Small modal\r\n<a href="#/funcionarios/new" title="eliminar"></a>\r\n -->\r\n<div class="modal fade addModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">\r\n  <div class="modal-dialog modal-sm">\r\n    <div class="modal-content">\r\n      <div class="modal-header">\r\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\r\n        <h4 class="modal-title" id="myModalLabel">{{vm.addTitle}}</h4>\r\n      </div>\r\n        <div class="modal-body text-center">\r\n          <div ng-include src="vm.formPath"></div>   \r\n        </div>\r\n        <div class="modal-footer">\r\n          <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>\r\n          <button type="button" class="btn btn-primary" ng-click="vm.create()" ng-disabled="myForm.$invalid" >Guardar</button>\r\n          <!--<tt>option = {{funcionario.formData}}</tt><br/>-->\r\n        </div> \r\n      </div>\r\n  </div>\r\n</div>';

}
return __p
};

this["JST"]["assets/templates/cargos/show.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '  <div class="jumbotron" ng-app="app" ng-controller="funcionarioInfoCtrl">\r\n        <p>{{funcionario.nombres}}</p>\r\n        <p>{{funcionario.apellido_materno}}</p>\r\n        <p>{{funcionario.apellido_paterno}}</p>\r\n        <p>{{funcionario.cargo_id.tipo}}</p>\r\n    </div>\t\t';

}
return __p
};

this["JST"]["assets/templates/ciudades/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form name="myForm">\r\n\t<div class="control-group" ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">\r\n\t\t<select class="form-control" name="estado" ng-options="estado as estado.nombre for estado in vm.estados track by estado.id"\r\n\t\t                      ng-model="vm.formData.estado_id" required>\r\n\t\t                      <option style="display:none" value="">Elige un estado</option>\r\n\t\t</select>\r\n\t\t<span ng-show="myForm.site.$error.required && !myForm.site.$pristine" class="help-inline">\r\n\t\t    Required  {{myForm.name.$pristine}}</span>\r\n\t</div>\r\n\t<div class="control-group" ng-class="{error: myForm.name.$invalid && !myForm.name.$pristine}">\r\n\t\t<input class="form-control" type="text" name="nombre" ng-model="vm.formData.nombre" required placeholder="nombre institucion">\r\n\t\t<span ng-show="myForm.name.$error.required && !myForm.name.$pristine" class="help-inline">\r\n\t\t    Required {{myForm.name.$pristine}}</span>\r\n\t</div>        \r\n</form>';

}
return __p
};

this["JST"]["assets/templates/ciudades/list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n<div class="panel panel-default" ng-controller="ciudadesCtrl">\r\n    <!--Alerts to display-->\r\n    <div ng-include="\'templates/alerts.html\'"></div> \r\n  <!-- Default panel contents -->\r\n  <div class="panel-heading">Ciudades \r\n        <button type="button" class="btn btn-primary text-rigth" data-toggle="modal" data-target=".addModal"><span class="glyphicon glyphicon-plus" aria-hidden="true"></button>\r\n    </div>\r\n\r\n  <!-- Table -->\r\n  <table class="table table-striped">\r\n        <thead>\r\n            <tr>\r\n                <th><a href="" ng-click="vm.order(\'nombre\')" >Ciudad</a></th>\r\n                <th><a href="" ng-click="vm.order(\'estado_id\')" >Estado</a></th>   \r\n                <th></th>  \r\n            </tr>\r\n            <tr >\r\n                <td><input class="form-control"ng-model="search.nombre" type="text" placeholder="Filter by" ></td>\r\n                <td><input class="form-control"ng-model="search.estado_id.nombre" type="text" placeholder="Filter by" ></td>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr ng-repeat="ciudad in vm.ciudades | orderBy:predicate:reverse | filter:search">\r\n                <td>{{ciudad.nombre}}</td>\r\n                <td>{{ciudad.estado_id.nombre}}</td>\r\n                <td><a href="#ciudades" ng-click="vm.confirmationModal(ciudad)" title="eliminar"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a></td>\r\n                <td><a href="#ciudades" ng-click="vm.updateData(ciudad)" title="editar"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></a></td>\r\n            </tr>               \r\n        </tbody>\r\n   </table>\r\n   <div ng-include="\'templates/newModal.html\'"></div> \r\n    <div ng-include="\'templates/editModal.html\'"></div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["assets/templates/commonModals.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- new modal\r\n -->\r\n<div class="modal fade addModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">\r\n  <div class="modal-dialog modal-sm">\r\n    <div class="modal-content">\r\n      <div class="modal-header">\r\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\r\n        <h4 class="modal-title" id="myModalLabel">{{vm.addTitle}}</h4>\r\n      </div>\r\n        <div class="modal-body text-center">\r\n          <div ng-include src="vm.formPath"></div>   \r\n        </div>\r\n        <div class="modal-footer">\r\n          <button type="button" class="btn btn-default" ng-click="vm.clearForm()" data-dismiss="modal">Cancelar</button>\r\n          <button type="button" class="btn btn-primary" ng-click="vm.create()" ng-disabled="myForm.$invalid" >Guardar</button>\r\n          <!--<tt>option = {{funcionario.formData}}</tt><br/>-->\r\n        </div> \r\n      </div>\r\n  </div>\r\n</div>\r\n<!-- confirmation  modal  \r\n -->\r\n<div class="modal fade confirmationModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">\r\n  <div class="modal-dialog modal-sm">\r\n    <div class="modal-content">\r\n      <div class="modal-header">\r\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\r\n        <h4 class="modal-title" id="myModalLabel">{{vm.confirmationTitle}}</h4>\r\n      </div>\r\n        <div class="modal-footer">\r\n          <button type="button" class="btn btn-default" ng-click="vm.clearForm()" data-dismiss="modal">Cancelar</button>\r\n          <button type="button" class="btn btn-primary" ng-click="vm.delete()" ng-disabled="myForm.$invalid" >Guardar</button>\r\n        </div> \r\n      </div>\r\n  </div>\r\n</div>\r\n<!-- edit  modal\r\n -->\r\n<div class="modal fade editModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">\r\n  <div class="modal-dialog modal-sm">\r\n    <div class="modal-content">\r\n      <div class="modal-header">\r\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\r\n        <h4 class="modal-title" id="myModalLabel">{{vm.editTitle}}</h4>\r\n      </div>\r\n        <div class="modal-body text-center">\r\n          <div ng-include src="vm.formPath"></div>   \r\n        </div>\r\n        <div class="modal-footer">\r\n          <button type="button" class="btn btn-default" ng-click="vm.clearForm()" data-dismiss="modal">Cancelar</button>\r\n          <button type="button" class="btn btn-primary" ng-click="vm.edit()" ng-disabled="myForm.$invalid" >Guardar</button>\r\n        </div> \r\n      </div>\r\n  </div>\r\n</div>\r\n<!--\r\n<div id="dialog-confirm" title="Desea eliminar el registro?">\r\n  <p><span class="ui-icon ui-icon-alert" style="float:left; margin:0 7px 20px 0;"></span>Este registro sera eliminado de forma permanente y no se podra recuperar. Esta seguro que desea eiminar el registro??</p>\r\n</div>\r\n-->\r\n';

}
return __p
};

this["JST"]["assets/templates/convenios/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form name="myForm">\r\n      <div class="control-group" ng-class="{error: myForm.name.$invalid && !myForm.name.$pristine}">\r\n        <input class="form-control" type="text" name="nombre" ng-model="vm.formData.nombre" required placeholder="Nombres">\r\n        <span ng-show="myForm.name.$error.required && !myForm.name.$pristine" class="help-inline">\r\n            Required {{myForm.name.$pristine}}</span>\r\n      </div>        \r\n      <div class="control-group" ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">\r\n        <input class="form-control datepicker" type="text" name="fecha" ng-model="vm.formData.fecha" required placeholder="Elige una fecha">\r\n        <span ng-show="myForm.site.$error.required && !myForm.site.$pristine" class="help-inline">\r\n            Required  {{myForm.name.$pristine}}</span>\r\n      </div>\r\n      <div class="control-group" ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">\r\n        <input class="form-control" type="text" name="autoridad" ng-model="vm.formData.autoridad" required placeholder="Autoridad">\r\n        <span ng-show="myForm.site.$error.required && !myForm.site.$pristine" class="help-inline">\r\n            Required  {{myForm.name.$pristine}}</span>\r\n      </div>\r\n      <div class="control-group" ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">\r\n        <select class="form-control" name="institucion" ng-options="institucion as institucion.nombre for institucion in vm.instituciones track by institucion.id"\r\n                              ng-model="vm.formData.institucion_id" required>\r\n                              <option style="display:none" value="">Elige una institucion</option>\r\n        </select>\r\n        <span ng-show="myForm.site.$error.required && !myForm.site.$pristine" class="help-inline">\r\n            Required  {{myForm.name.$pristine}}</span>\r\n      </div>\r\n</form>\r\n <script>\r\n  $(function() {\r\n    $( ".datepicker" ).datepicker({dateFormat: \'yy-mm-dd\'});\r\n  });\r\n  </script>';

}
return __p
};

this["JST"]["assets/templates/convenios/list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="panel panel-default" ng-controller="conveniosCtrl">\r\n  <!--Alerts to display-->\r\n    <div ng-include="\'templates/alerts.html\'"></div> \r\n  <!-- Default panel contents -->\r\n    <div class="panel-heading">\r\n        Convenios \r\n        <button type="button" class="btn btn-primary text-rigth" data-toggle="modal" data-target=".addModal"><span class="glyphicon glyphicon-plus" aria-hidden="true"></button>\r\n        <input class="form-control" ng-model="search" type="text" placeholder="Filtar" > \r\n    </div>\r\n    <div class="well col-md-6" ng-repeat="convenio in vm.convenios | filter:search">\r\n        <p class="text-right">\r\n            <a href="#convenios" ng-click="vm.confirmationModal(convenio)" title="eliminar"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a>\r\n            <a href="#convenios" ng-click="vm.updateData(convenio)" title="editar"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></a>\r\n        </p>\r\n        <p>\r\n            <strong>Nombres</strong> <span >{{convenio.nombre}}</span>\r\n        </p>\r\n        <p>\r\n            <strong>Fecha</strong> <span >{{convenio.fecha.slice(0, 10)}}</span>\r\n        </p>\r\n        <p>\r\n            <strong>Autoridad</strong> <span >{{convenio.autoridad}}</span>\r\n        </p>\r\n        <p>\r\n            <strong>Institucion</strong> <span >{{convenio.institucion_id.nombre}}</span>\r\n        </p>\r\n    </div>\r\n    <div ng-include="\'templates/commonModals.html\'"></div> \r\n</div> ';

}
return __p
};

this["JST"]["assets/templates/convenios/show.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-md-12" ng-repeat="funcionario in vm.funcionarios">\r\n    <p>\r\n        <strong>Nombres</strong> <span >{{vm.formData}}</span>\r\n    </p>\r\n    <p>\r\n        <strong>Apellido Materno</strong> <span >{{vm.formData.apellido_paterno}}</span>\r\n    </p>\r\n    <p>\r\n        <strong>Apellido Paterno</strong> <span >{{vm.formData.apellido_materno}}</span>\r\n    </p>\r\n    <p>\r\n        <strong>Cargo</strong> <span >{{vm.formData.cargo_id.tipo}}</span>\r\n    </p>\r\n</div>';

}
return __p
};

this["JST"]["assets/templates/editModal.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- Small modal\r\n<a href="#/funcionarios/new" title="eliminar"></a>\r\n -->\r\n<div class="modal fade editModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">\r\n  <div class="modal-dialog modal-sm">\r\n    <div class="modal-content">\r\n      <div class="modal-header">\r\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\r\n        <h4 class="modal-title" id="myModalLabel">{{vm.editTitle}}</h4>\r\n      </div>\r\n        <div class="modal-body text-center">\r\n          <div ng-include src="vm.formPath"></div>   \r\n        </div>\r\n        <div class="modal-footer">\r\n          <button type="button" class="btn btn-default" ng-click="vm.clearForm()" data-dismiss="modal">Cancelar</button>\r\n          <button type="button" class="btn btn-primary" ng-click="vm.edit()" ng-disabled="myForm.$invalid" >Guardar</button>\r\n        </div> \r\n      </div>\r\n  </div>\r\n</div>';

}
return __p
};

this["JST"]["assets/templates/estados/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form name="myForm">\r\n      <div class="control-group" ng-class="{error: myForm.name.$invalid && !myForm.name.$pristine}">\r\n        <input class="form-control" type="text" name="nombre" ng-model="vm.formData.nombre" required placeholder="nombre estado">\r\n        <span ng-show="myForm.name.$error.required && !myForm.name.$pristine" class="help-inline">\r\n            Required {{myForm.name.$pristine}}</span>\r\n      </div>        \r\n</form>';

}
return __p
};

this["JST"]["assets/templates/estados/list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n<div class="panel panel-default" ng-controller="estadosCtrl">\r\n    <!--Alerts to display-->\r\n    <div ng-include="\'templates/alerts.html\'"></div> \r\n  <!-- Default panel contents -->\r\n  <div class="panel-heading">Estados \r\n        <button type="button" class="btn btn-primary text-rigth" data-toggle="modal" data-target=".addModal"><span class="glyphicon glyphicon-plus" aria-hidden="true"></button>\r\n    </div>\r\n\r\n  <!-- Table -->\r\n  <table class="table table-striped">\r\n        <thead>\r\n            <tr>\r\n                <th><a href="" ng-click="vm.order(\'nombre\')" >Estados</a></th>\r\n                <th></th>   \r\n                <th></th>  \r\n            </tr>\r\n            <tr >\r\n                <td><input class="form-control"ng-model="search" type="text" placeholder="Filter by" ></td>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr ng-repeat="estado in vm.estados | orderBy:predicate:reverse | filter:search">\r\n                <td>{{estado.nombre}}</td>\r\n                <td><a href="#estados" ng-click="vm.confirmationModal(estado)" title="eliminar"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a></td>\r\n                <td><a href="#estados" ng-click="vm.updateData(estado)" title="editar"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></a></td>\r\n            </tr>               \r\n        </tbody>\r\n   </table>\r\n    <div ng-include="\'templates/commonModals.html\'"></div> \r\n</div>\r\n';

}
return __p
};

this["JST"]["assets/templates/eventos/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form name="myForm">\r\n      <div class="control-group" ng-class="{error: myForm.name.$invalid && !myForm.name.$pristine}">\r\n        <input class="form-control" type="text" name="nombre" ng-model="vm.formData.nombre" required placeholder="Nombres">\r\n        <span ng-show="myForm.name.$error.required && !myForm.name.$pristine" class="help-inline">\r\n            Required {{myForm.name.$pristine}}</span>\r\n      </div>\r\n      <div class="control-group" ng-class="{error: myForm.name.$invalid && !myForm.name.$pristine}">\r\n        <input class="form-control" type="text" name="tema" ng-model="vm.formData.tema" required placeholder="Tema">\r\n        <span ng-show="myForm.name.$error.required && !myForm.name.$pristine" class="help-inline">\r\n            Required {{myForm.name.$pristine}}</span>\r\n      </div>        \r\n      <div class="control-group" ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">\r\n        <input class="form-control datepicker" type="text" name="fecha" ng-model="vm.formData.fecha" required placeholder="Elige una fecha">\r\n        <span ng-show="myForm.site.$error.required && !myForm.site.$pristine" class="help-inline">\r\n            Required  {{myForm.name.$pristine}}</span>\r\n      </div>\r\n      <div class="control-group" ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">\r\n        <input class="form-control" type="number" name="autoridad" ng-model="vm.formData.numero_asistentes" required placeholder="Numero de asistentes">\r\n        <span ng-show="myForm.site.$error.required && !myForm.site.$pristine" class="help-inline">\r\n            Required  {{myForm.name.$pristine}}</span>\r\n      </div>\r\n      <div class="control-group" ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">\r\n        <select class="form-control" name="institucion" ng-options="institucion as institucion.nombre for institucion in vm.instituciones track by institucion.id" ng-model="vm.formData.institucion_id" required>\r\n            <option style="display:none" value="">Elige una institucion</option>\r\n        </select>\r\n        <span ng-show="myForm.site.$error.required && !myForm.site.$pristine" class="help-inline">\r\n            Required  {{myForm.name.$pristine}}</span>\r\n      </div>\r\n      <div class="control-group" ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">\r\n        <select class="form-control" name="funcionario" ng-options="funcionario as funcionario.nombres for funcionario in vm.funcionarios track by funcionario.id" ng-model="vm.formData.funcionario_id" required>\r\n            <option style="display:none" value="">Elige un funcionario</option>\r\n        </select>\r\n        <span ng-show="myForm.site.$error.required && !myForm.site.$pristine" class="help-inline">\r\n            Required  {{myForm.name.$pristine}}</span>\r\n      </div>\r\n      <div class="control-group" ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">\r\n        <select class="form-control" name="participacion" ng-options="participacion as participacion.tipo for participacion in vm.participaciones track by participacion.id" ng-model="vm.formData.participacion_id" required>\r\n            <option style="display:none" value="">Elige tipo de participacion</option>\r\n        </select>\r\n        <span ng-show="myForm.site.$error.required && !myForm.site.$pristine" class="help-inline">\r\n            Required  {{myForm.name.$pristine}}</span>\r\n      </div>\r\n      <div class="control-group" ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">\r\n        <select class="form-control" name="tipo_evento" ng-options="tipoEvento as tipoEvento.tipo for tipoEvento in vm.tipoEventos track by tipoEvento.id" ng-model="vm.formData.tipo_evento_id" required>\r\n            <option style="display:none" value="">Elige un tipo de evento</option>\r\n        </select>\r\n        <span ng-show="myForm.site.$error.required && !myForm.site.$pristine" class="help-inline">\r\n            Required  {{myForm.name.$pristine}}</span>\r\n      </div>\r\n      <div class="control-group" ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">\r\n        <select class="form-control" name="estado" ng-options="estado as estado.nombre for estado in vm.estados track by estado.id" ng-model="vm.formData.estado_id" ng-change="vm.updateCiudades()" required>\r\n            <option style="display:none" value="">Elige un estado</option>\r\n        </select>\r\n        <span ng-show="myForm.site.$error.required && !myForm.site.$pristine" class="help-inline">\r\n            Required  {{myForm.name.$pristine}}</span>\r\n      </div>\r\n      <div class="control-group" ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">\r\n        <select class="form-control" name="ciudad" ng-options="ciudad as ciudad.nombre for ciudad in vm.ciudades track by ciudad.id" ng-model="vm.formData.ciudad_id" required>\r\n            <option style="display:none" value="">Elige un ciudad</option>\r\n        </select>\r\n        <span ng-show="myForm.site.$error.required && !myForm.site.$pristine" class="help-inline">\r\n            Required  {{myForm.name.$pristine}}</span>\r\n      </div>\r\n</form>\r\n <script>\r\n  $(function() {\r\n    $(".datepicker").datepicker({dateFormat: \'yy-mm-dd\'});\r\n  });\r\n  </script>';

}
return __p
};

this["JST"]["assets/templates/eventos/list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="panel panel-default" ng-controller="eventosCtrl">\r\n  <!--Alerts to display-->\r\n    <div ng-include="\'templates/alerts.html\'"></div> \r\n  <!-- Default panel contents -->\r\n    <div class="panel-heading">\r\n        Eventos \r\n        <button type="button" class="btn btn-primary text-rigth" data-toggle="modal" data-target=".addModal"><span class="glyphicon glyphicon-plus" aria-hidden="true"></button>\r\n        <input class="form-control" ng-model="search" type="text" placeholder="Filtar" > \r\n    </div>\r\n    <div class="well col-md-6" ng-repeat="evento in vm.eventos | filter:search">\r\n        <p class="text-right">\r\n            <a href="#eventos" ng-click="vm.confirmationModal(evento)" title="eliminar"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a>\r\n            <a href="#eventos" ng-click="vm.updateData(evento)" title="editar"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></a>\r\n        </p>\r\n        <p>\r\n            <strong>Nombres</strong> <span >{{evento.nombre}}</span>\r\n        </p>\r\n        <p>\r\n            <strong>Tema</strong> <span >{{evento.tema}}</span>\r\n        </p>\r\n        <p>\r\n            <strong>Fecha</strong> <span >{{evento.fecha.slice(0, 10)}}</span>\r\n        </p>\r\n        <p>\r\n            <strong>No. Asistentes</strong> <span >{{evento.numero_asistentes}}</span>\r\n        </p>\r\n        <p>\r\n            <strong>Institucion</strong> <span >{{evento.institucion_id.nombre}}</span>\r\n        </p>\r\n        <p>\r\n            <strong>Funcionario</strong> <span >{{evento.funcionario_id.nombres}}</span>\r\n        </p>\r\n        <p>\r\n            <strong>Participacion</strong> <span >{{evento.participacion_id.tipo}}</span>\r\n        </p>\r\n        <p>\r\n            <strong>Tipo de evento</strong> <span >{{evento.tipo_evento_id.tipo}}</span>\r\n        </p>\r\n        <p>\r\n            <strong>Ciudad</strong> <span >{{evento.ciudad_id.nombre}}</span>\r\n        </p>\r\n    </div>\r\n    <div ng-include="\'templates/newModal.html\'"></div> \r\n    <div ng-include="\'templates/editModal.html\'"></div> \r\n</div> ';

}
return __p
};

this["JST"]["assets/templates/funcionarios/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form name="myForm">\r\n      <div class="control-group" ng-class="{error: myForm.name.$invalid && !myForm.name.$pristine}">\r\n        <input class="form-control" type="text" name="nombres" ng-model="vm.formData.nombres" required placeholder="Nombres">\r\n        <span ng-show="myForm.name.$error.required && !myForm.name.$pristine" class="help-inline">\r\n            Required {{myForm.name.$pristine}}</span>\r\n      </div>        \r\n      <div class="control-group" ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">\r\n        <input class="form-control" type="text" name="apellido_materno" ng-model="vm.formData.apellido_materno" required placeholder="Apellido Materno">\r\n        <span ng-show="myForm.site.$error.required && !myForm.site.$pristine" class="help-inline">\r\n            Required  {{myForm.name.$pristine}}</span>\r\n      </div>\r\n      <div class="control-group" ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">\r\n        <input class="form-control" type="text" name="apellido_paterno" ng-model="vm.formData.apellido_paterno" required placeholder="Apellido Paterno">\r\n        <span ng-show="myForm.site.$error.required && !myForm.site.$pristine" class="help-inline">\r\n            Required  {{myForm.name.$pristine}}</span>\r\n      </div>\r\n      <div class="control-group" ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">\r\n        <select class="form-control" name="cargo" ng-options="cargo as cargo.tipo for cargo in vm.cargos track by cargo.id"\r\n                              ng-model="vm.formData.cargo_id" required>\r\n        </select>\r\n        <span ng-show="myForm.site.$error.required && !myForm.site.$pristine" class="help-inline">\r\n            Required  {{myForm.name.$pristine}}</span>\r\n      </div>\r\n</form>';

}
return __p
};

this["JST"]["assets/templates/funcionarios/list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!--\r\n<div class="panel panel-default" ng-controller="funcionariosListCtrl">\r\n  <!-- Default panel contents \r\n  <div class="panel-heading">Funcionarios <span class="glyphicon glyphicon-plus" aria-hidden="true"></div>\r\n\r\n  <!-- Table\r\n  <table class="table-responsive table-striped" style="vertical-align: middle;">\r\n       \t<thead>\r\n            <tr>\r\n                <th><a href="" ng-click="order(\'nombres\')" >Nombres <span class="mdi-navigation-unfold-more" ng-class="sortIcon(\'index\')" aria-hidden="true">\r\n                </a></th>\r\n                <th><a href="" ng-click="order(\'apellido_materno\')">Apellido Materno<span class="mdi-navigation-unfold-more" ng-class="sortIcon(\'user_name\')" aria-hidden="true">\r\n                </a></th>\r\n                <th><a href="" ng-click="order(\'apellido_materno\')">Apellido Paterno<span class="mdi-navigation-unfold-more" ng-class="sortIcon(\'release_name\')" aria-hidden="true">\r\n                </a></th>\r\n                <th><a href="" ng-click="order(\'cargo\')">Cargo<span class="mdi-navigation-unfold-more" ng-class="sortIcon(\'release_level\')" aria-hidden="true">\r\n                </a></th>\r\n                <th></th>\t\r\n                <th></th>  \r\n            </tr>\r\n            <tr >\r\n                <td><input ng-model="search" type="text" placeholder="Filter by" ></td>\r\n                <td><input ng-model="search" type="text" placeholder="Filter by" ></td>\r\n                <td><input ng-model="search" type="text" placeholder="Filter by" ></td>\r\n                <td><input ng-model="search" type="text" placeholder="Filter by" ></td>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr ng-repeat="funcionario in funcionarios | filter:search">\r\n                <td>{{funcionario.nombres}}</td>\r\n                <td>{{funcionario.apellido_materno}}</td>\r\n                <td>{{funcionario.apellido_paterno}}</td>\r\n                <td>{{funcionario.cargo_id.tipo}}</td>\r\n                <td><a ng-click=""><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a></td>\r\n                <td><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></td>\r\n            </tr>\t\t\t\t\r\n        </tbody>\r\n   </table>\r\n</div>\r\n-->\r\n<div class="panel panel-default" ng-controller="funcionariosCtrl">\r\n  <!-- Default panel contents -->\r\n    <div class="panel-heading">\r\n        Funcionarios \r\n        <button type="button" class="btn btn-primary text-rigth" data-toggle="modal" data-target=".addModal"><span class="glyphicon glyphicon-plus" aria-hidden="true"></button>\r\n        <input class="form-control" ng-model="search" type="text" placeholder="Filtar" > \r\n    </div>\r\n    <div class="well col-md-6" ng-repeat="funcionario in vm.funcionarios | filter:search">\r\n        <p class="text-right">\r\n            <a href="#funcionarios" ng-click="vm.confirmationModal(funcionario)" title="eliminar"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a>\r\n            <a href="#funcionarios" ng-click="vm.updateData(funcionario)" title="editar"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></a>\r\n        </p>\r\n        <p>\r\n            <strong>Nombres</strong> <span >{{funcionario.nombres}}</span>\r\n        </p>\r\n        <p>\r\n            <strong>Apellido Materno</strong> <span >{{funcionario.apellido_paterno}}</span>\r\n        </p>\r\n        <p>\r\n            <strong>Apellido Paterno</strong> <span >{{funcionario.apellido_materno}}</span>\r\n        </p>\r\n        <p>\r\n            <strong>Cargo</strong> <span >{{funcionario.cargo_id.tipo}}</span>\r\n        </p>\r\n    </div>\r\n    <div ng-include="\'templates/newModal.html\'"></div> \r\n    <div ng-include="\'templates/editModal.html\'"></div>\r\n</div> ';

}
return __p
};

this["JST"]["assets/templates/funcionariosConvenios/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form name="myForm">\r\n      <div class="control-group" ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">\r\n        <select class="form-control" name="funcionario" ng-options="funcionario as funcionario.nombres for funcionario in vm.funcionarios track by funcionario.id" ng-model="vm.formData.funcionario_id" required>\r\n            <option style="display:none" value="">Elige un funcionario</option>\r\n        </select>\r\n        <span ng-show="myForm.site.$error.required && !myForm.site.$pristine" class="help-inline">\r\n            Required  {{myForm.name.$pristine}}</span>\r\n      </div>\r\n      <div  class="control-group" ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">\r\n        <select multiple class="form-control pre-selected-options" name="convenios" ng-options="convenio as convenio.nombre for convenio in vm.convenios track by convenio.id" ng-model="vm.formData.convenio_id" required>\r\n            <option style="display:none" value="">Elige los convenios</option>\r\n        </select>\r\n        <span ng-show="myForm.site.$error.required && !myForm.site.$pristine" class="help-inline">\r\n            Required  {{myForm.name.$pristine}}</span>\r\n      </div>\r\n</form>\r\n<script>\r\n//$(\'.pre-selected-options\').multiSelect();\r\n</script>';

}
return __p
};

this["JST"]["assets/templates/funcionariosConvenios/list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="panel panel-default" ng-controller="funcionariosConveniosCtrl">\r\n  <!-- Default panel contents -->\r\n    <div class="panel-heading">\r\n        Convenios por funcionario  \r\n        <button type="button" class="btn btn-primary text-rigth" data-toggle="modal" data-target=".addModal"><span class="glyphicon glyphicon-plus" aria-hidden="true"></button>\r\n        <input class="form-control" ng-model="search" type="text" placeholder="Filtar" > \r\n    </div>\r\n    <div class="well col-md-6" ng-repeat="fc in vm.funcionariosConvenios | filter:search">\r\n        <p class="text-right">\r\n            <a href="#funcionarios" ng-click="vm.confirmationModal(fc)" title="eliminar"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a>\r\n            <a href="#funcionarios" ng-click="vm.updateData(fc)" title="editar"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></a>\r\n        </p>\r\n        <p>\r\n            <strong>funcionario</strong> <span >{{fc.funcionario_id.nombres}} {{fc.funcionario_id.apellido_materno}} {{fc.funcionario_id.apellido_paterno}} </span>\r\n        </p>\r\n        <p>\r\n            <ul ng-repeat="convenio in fc.convenio_id ">\r\n                <li>{{convenio.nombre}}</li>\r\n            </ul>\r\n        </p>\r\n    </div>\r\n    <div ng-include="\'templates/newModal.html\'"></div> \r\n    <div ng-include="\'templates/editModal.html\'"></div>\r\n</div> ';

}
return __p
};

this["JST"]["assets/templates/instituciones/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form name="myForm">\r\n      <div class="control-group" ng-class="{error: myForm.name.$invalid && !myForm.name.$pristine}">\r\n        <input class="form-control" type="text" name="nombre" ng-model="vm.formData.nombre" required placeholder="nombre institucion">\r\n        <span ng-show="myForm.name.$error.required && !myForm.name.$pristine" class="help-inline">\r\n            Required {{myForm.name.$pristine}}</span>\r\n      </div>        \r\n</form>';

}
return __p
};

this["JST"]["assets/templates/instituciones/list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n<div class="panel panel-default" ng-controller="institucionesCtrl">\r\n    <!--Alerts to display-->\r\n    <div ng-include="\'templates/alerts.html\'"></div> \r\n  <!-- Default panel contents -->\r\n  <div class="panel-heading">Instituciones \r\n        <button type="button" class="btn btn-primary text-rigth" data-toggle="modal" data-target=".addModal"><span class="glyphicon glyphicon-plus" aria-hidden="true"></button>\r\n    </div>\r\n\r\n  <!-- Table -->\r\n  <table class="table table-striped">\r\n        <thead>\r\n            <tr>\r\n                <th><a href="" ng-click="vm.order(\'nombre\')" >Instituciones</a></th>\r\n                <th></th>   \r\n                <th></th>  \r\n            </tr>\r\n            <tr >\r\n                <td><input class="form-control"ng-model="search" type="text" placeholder="Filter by" ></td>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr ng-repeat="institucion in vm.instituciones | orderBy:predicate:reverse | filter:search">\r\n                <td>{{institucion.nombre}}</td>\r\n                <td><a href="#instituciones" ng-click="vm.confirmationModal(institucion)" title="eliminar"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a></td>\r\n                <td><a href="#instituciones" ng-click="vm.updateData(institucion)" title="editar"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></a></td>\r\n            </tr>               \r\n        </tbody>\r\n   </table>\r\n   <div ng-include="\'templates/newModal.html\'"></div> \r\n    <div ng-include="\'templates/editModal.html\'"></div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["assets/templates/materialDidactico/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form name="myForm">\r\n      <div class="control-group" ng-class="{error: myForm.name.$invalid && !myForm.name.$pristine}">\r\n        <input class="form-control" type="text" name="tipo" ng-model="vm.formData.tipo" required placeholder="material didactico">\r\n        <span ng-show="myForm.name.$error.required && !myForm.name.$pristine" class="help-inline">\r\n            Required {{myForm.name.$pristine}}</span>\r\n      </div>        \r\n</form>';

}
return __p
};

this["JST"]["assets/templates/materialDidactico/list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n<div class="panel panel-default" ng-controller="materialDidacticoCtrl">\r\n  <!--Alerts to display-->\r\n    <div ng-include="\'templates/alerts.html\'"></div> \r\n  <!-- Default panel contents -->\r\n  <div class="panel-heading">Material Didactico \r\n        <button type="button" class="btn btn-primary text-rigth" data-toggle="modal" data-target=".addModal"><span class="glyphicon glyphicon-plus" aria-hidden="true"></button>\r\n    </div>\r\n  <!-- Table -->\r\n  <table class="table table-striped">\r\n       \t<thead>\r\n            <tr>\r\n                <th><a href="" ng-click="vm.order(\'tipo\')" >Material Didactico</a></th>\r\n                <th></th>\t\r\n                <th></th>  \r\n            </tr>\r\n            <tr >\r\n                <td><input class="form-control"ng-model="search" type="text" placeholder="Filter by" ></td>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr ng-repeat="material_didactico in vm.materialDidactico | orderBy:predicate:reverse | filter:search">\r\n                <td>{{material_didactico.tipo}}</td>\r\n                <td><a href="#materialDidactico" ng-click="vm.confirmationModal(material_didactico)" title="eliminar"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a></td>\r\n                <td><a href="#materialDidactico" ng-click="vm.updateData(material_didactico)" title="editar"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></a></td>\r\n            </tr>\t\t\t\t\r\n        </tbody>\r\n   </table>\r\n   <div ng-include="\'templates/newModal.html\'"></div> \r\n    <div ng-include="\'templates/editModal.html\'"></div>\r\n</div>\r\n\r\n';

}
return __p
};

this["JST"]["assets/templates/materialEventos/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form name="myForm">\r\n      <div class="control-group" ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">\r\n        <select class="form-control" name="evento" ng-options="evento as evento.nombre for evento in vm.eventos track by evento.id" ng-model="vm.formData.evento_id" required>\r\n            <option style="display:none" value="">Elige un evento</option>\r\n        </select>\r\n        <span ng-show="myForm.site.$error.required && !myForm.site.$pristine" class="help-inline">\r\n            Required  {{myForm.name.$pristine}}</span>\r\n      </div>\r\n      <div class="col-md-12">\r\n        <button type="button" class="btn btn-primary" ng-click="vm.addField()" ><span class="glyphicon glyphicon-plus" aria-hidden="true"></button>  \r\n      </div>\r\n      <fieldset ng-repeat="materiales in vm.formData.materiales" class="col-md-12">\r\n        <div  class="control-group materialDidacticoList"  ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">\r\n            <select class="form-control pre-selected-options " name="materialDidactico"  ng-click="vm.loadMaterials()" ng-options="md as md.tipo for md in vm.materialDidactico track by md.id" ng-model="materiales.material_didactico_id" required>\r\n                <option style="display:none" value="">Elige un material</option>\r\n            </select>\r\n            <input class="form-control" type="number" name="autoridad" ng-model="materiales.cantidad" required placeholder="Cantidad" required>\r\n            <span ng-show="myForm.site.$error.required && !myForm.site.$pristine" class="help-inline">\r\n                Required  {{myForm.name.$pristine}}</span>\r\n        </fieldset>\r\n      </div>\r\n</form>';

}
return __p
};

this["JST"]["assets/templates/materialEventos/list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n<div class="panel panel-default" ng-controller="materialEventoCtrl">\r\n  <!--Alerts to display-->\r\n    <div ng-include="\'templates/alerts.html\'"></div> \r\n  <!-- Default panel contents -->\r\n  <div class="panel-heading">Material Didactico por Evento \r\n        <button type="button" class="btn btn-primary text-rigth" data-toggle="modal" data-target=".addModal"><span class="glyphicon glyphicon-plus" aria-hidden="true"></button>\r\n    </div>\r\n   <div class="well col-md-6" ng-repeat="material_evento in vm.materialEvento | orderBy:predicate:reverse | filter:search">\r\n        <p class="text-right">\r\n            <a href="#materialEventos" ng-click="vm.confirmationModal(material_evento)" title="eliminar"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a>\r\n            <a href="#materialEventos" ng-click="vm.updateData(material_evento)" title="editar"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></a>\r\n        </p>\r\n        <p>\r\n            <strong>Evento</strong> <span > {{material_evento.evento_id.nombre}}</span>\r\n        </p>\r\n        <p>\r\n          <li>{{material_evento.material_didactico_id.tipo}}  {{material_evento.cantidad}}</li>\r\n        </p>\r\n    </div>\r\n   <div ng-include="\'templates/newModal.html\'"></div> \r\n    <div ng-include="\'templates/editModal.html\'"></div>\r\n</div>';

}
return __p
};

this["JST"]["assets/templates/newModal.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- Small modal\r\n<a href="#/funcionarios/new" title="eliminar"></a>\r\n -->\r\n<div class="modal fade addModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">\r\n  <div class="modal-dialog modal-sm">\r\n    <div class="modal-content">\r\n      <div class="modal-header">\r\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\r\n        <h4 class="modal-title" id="myModalLabel">{{vm.addTitle}}</h4>\r\n      </div>\r\n        <div class="modal-body text-center">\r\n          <div ng-include src="vm.formPath"></div>   \r\n        </div>\r\n        <div class="modal-footer">\r\n          <button type="button" class="btn btn-default" ng-click="vm.clearForm()" data-dismiss="modal">Cancelar</button>\r\n          <button type="button" class="btn btn-primary" ng-click="vm.create()" ng-disabled="myForm.$invalid" >Guardar</button>\r\n          <!--<tt>option = {{funcionario.formData}}</tt><br/>-->\r\n        </div> \r\n      </div>\r\n  </div>\r\n</div>';

}
return __p
};

this["JST"]["assets/templates/participaciones/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form name="myForm">\r\n      <div class="control-group" ng-class="{error: myForm.name.$invalid && !myForm.name.$pristine}">\r\n        <input class="form-control" type="text" name="tipo" ng-model="vm.formData.tipo" required placeholder="nombre participacion">\r\n        <span ng-show="myForm.name.$error.required && !myForm.name.$pristine" class="help-inline">\r\n            Required {{myForm.name.$pristine}}</span>\r\n      </div>        \r\n</form>';

}
return __p
};

this["JST"]["assets/templates/participaciones/list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n<div class="panel panel-default" ng-controller="participacionesCtrl">\r\n  <!--Alerts to display-->\r\n    <div ng-include="\'templates/alerts.html\'"></div> \r\n  <!-- Default panel contents -->\r\n  <div class="panel-heading">Participaciones \r\n        <button type="button" class="btn btn-primary text-rigth" data-toggle="modal" data-target=".addModal"><span class="glyphicon glyphicon-plus" aria-hidden="true"></button>\r\n    </div>\r\n\r\n  <!-- Table -->\r\n  <table class="table table-striped">\r\n       \t<thead>\r\n            <tr>\r\n                <th><a href="" ng-click="vm.order(\'tipo\')" >Participacion</a></th>\r\n                <th></th>\t\r\n                <th></th>  \r\n            </tr>\r\n            <tr >\r\n                <td><input class="form-control"ng-model="search" type="text" placeholder="Filter by" ></td>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr ng-repeat="participacion in vm.participaciones | orderBy:predicate:reverse | filter:search">\r\n                <td>{{participacion.tipo}}</td>\r\n                <td><a href="#participaciones" ng-click="vm.confirmationModal(participacion)" title="eliminar"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a></td>\r\n                <td><a href="#participaciones" ng-click="vm.updateData(participacion)" title="editar"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></a></td>\r\n            </tr>\t\t\t\t\r\n        </tbody>\r\n   </table>\r\n    <div ng-include="\'templates/commonModals.html\'"></div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["assets/templates/tipoEventos/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form name="myForm">\r\n      <div class="control-group" ng-class="{error: myForm.name.$invalid && !myForm.name.$pristine}">\r\n        <input class="form-control" type="text" name="tipo" ng-model="vm.formData.tipo" required placeholder="Tipo de evento">\r\n        <span ng-show="myForm.name.$error.required && !myForm.name.$pristine" class="help-inline">\r\n            Required {{myForm.name.$pristine}}</span>\r\n      </div>        \r\n</form>';

}
return __p
};

this["JST"]["assets/templates/tipoEventos/list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n<div class="panel panel-default" ng-controller="tipoEventoCtrl">\r\n  <!--Alerts to display-->\r\n  <div ng-include="\'templates/alerts.html\'"></div> \r\n  <!-- Default panel contents -->\r\n  <div class="panel-heading">Tipo de evento \r\n      <button type="button" class="btn btn-primary text-rigth" data-toggle="modal" data-target=".addModal"><span class="glyphicon glyphicon-plus" aria-hidden="true"></button>\r\n  </div>\r\n\r\n  <!-- Table -->\r\n  <table class="table table-striped">\r\n     \t<thead>\r\n          <tr>\r\n              <th><a href="" ng-click="vm.order(\'tipo\')" >Tipo evento</a></th>\r\n              <th></th>\t\r\n              <th></th>  \r\n          </tr>\r\n          <tr >\r\n              <td><input class="form-control"ng-model="search" type="text" placeholder="Filter by" ></td>\r\n          </tr>\r\n      </thead>\r\n      <tbody>\r\n          <tr ng-repeat="tipoEvento in vm.tipoEventos | orderBy:predicate:reverse | filter:search">\r\n              <td>{{tipoEvento.tipo}}</td>\r\n              <td><a href="#tipoEventos" ng-click="vm.confirmationModal(tipoEvento)" title="eliminar"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a></td>\r\n              <td><a href="#tipoEventos" ng-click="vm.updateData(tipoEvento)" title="editar"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></a></td>\r\n          </tr>\t\t\t\t\r\n      </tbody>\r\n  </table>\r\n  <div ng-include="\'templates/commonModals.html\'"></div> \r\n</div>\r\n';

}
return __p
};

this["JST"]["assets/templates/usuarios/form.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form name="myForm">\r\n      <div class="control-group" ng-class="{error: myForm.name.$invalid && !myForm.name.$pristine}">\r\n        <input class="form-control" type="text" name="nombres" ng-model="vm.formData.nombres" required placeholder="Nombres">\r\n        <span ng-show="myForm.name.$error.required && !myForm.name.$pristine" class="help-inline">\r\n            Required {{myForm.name.$pristine}}</span>\r\n      </div>        \r\n      <div class="control-group" ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">\r\n        <input class="form-control" type="text" name="apellido_materno" ng-model="vm.formData.apellido_materno" required placeholder="Apellido Materno">\r\n        <span ng-show="myForm.site.$error.required && !myForm.site.$pristine" class="help-inline">\r\n            Required  {{myForm.name.$pristine}}</span>\r\n      </div>\r\n      <div class="control-group" ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">\r\n        <input class="form-control" type="text" name="apellido_paterno" ng-model="vm.formData.apellido_paterno" required placeholder="Apellido Paterno">\r\n        <span ng-show="myForm.site.$error.required && !myForm.site.$pristine" class="help-inline">\r\n            Required  {{myForm.name.$pristine}}</span>\r\n      </div>\r\n      <div class="control-group" ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">\r\n        <input class="form-control" type="text" name="correo" ng-model="vm.formData.correo" required placeholder="Correo">\r\n        <span ng-show="myForm.site.$error.required && !myForm.site.$pristine" class="help-inline">\r\n            Required  {{myForm.name.$pristine}}</span>\r\n      </div>\r\n      <div class="control-group" ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">\r\n        <input class="form-control" type="password" name="password" ng-model="vm.formData.password" required placeholder="Contraseña">\r\n        <span ng-show="myForm.site.$error.required && !myForm.site.$pristine" class="help-inline">\r\n            Required  {{myForm.name.$pristine}}</span>\r\n      </div>\r\n       <div class="control-group" ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">\r\n        <input class="form-control" type="password" name="password2" ng-model="vm.formData.password2" required placeholder="Confirmar Contraseña">\r\n        <span ng-show="myForm.site.$error.required && !myForm.site.$pristine" class="help-inline">\r\n            Required  {{myForm.name.$pristine}}</span>\r\n      </div>\r\n      <div class="control-group" ng-class="{error: myForm.site.$invalid && !myForm.site.$pristine}">\r\n        <select class="form-control" name="rol" ng-options="r as rol.value for rol in vm.roles track by rol.id"\r\n                              ng-model="vm.formData.rol" required>\r\n        </select>\r\n        <span ng-show="myForm.site.$error.required && !myForm.site.$pristine" class="help-inline">\r\n            Required  {{myForm.name.$pristine}}</span>\r\n      </div>\r\n</form>';

}
return __p
};

this["JST"]["assets/templates/usuarios/list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="panel panel-default" ng-controller="usuariosCtrl">\r\n  <!-- Default panel contents -->\r\n    <div class="panel-heading">\r\n        Usuarios \r\n        <button type="button" class="btn btn-primary text-rigth" data-toggle="modal" data-target=".addModal"><span class="glyphicon glyphicon-plus" aria-hidden="true"></button>\r\n        <input class="form-control" ng-model="search" type="text" placeholder="Filtar" > \r\n    </div>\r\n    <div class="well col-md-6" ng-repeat="usuario in vm.usuarios | filter:search">\r\n        <p class="text-right">\r\n            <a href="#usuarios" ng-click="vm.confirmationModal(usuario)" title="eliminar"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a>\r\n            <a href="#usuarios" ng-click="vm.updateData(usuario)" title="editar"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></a>\r\n        </p>\r\n        <p>\r\n            <strong>Nombres</strong> <span >{{usuario.nombres}}</span>\r\n        </p>\r\n        <p>\r\n            <strong>Apellido Materno</strong> <span >{{usuario.apellido_paterno}}</span>\r\n        </p>\r\n        <p>\r\n            <strong>Apellido Paterno</strong> <span >{{usuario.apellido_materno}}</span>\r\n        </p>\r\n        <p>\r\n            <strong>Rol</strong> <span >{{vm.getRol(usuario.rol)}}</span>\r\n        </p>\r\n    </div>\r\n    <div ng-include="\'templates/newModal.html\'"></div> \r\n    <div ng-include="\'templates/editModal.html\'"></div>\r\n</div> ';

}
return __p
};