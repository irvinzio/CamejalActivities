app.service('CargosService', function($http, $q) {
  return {
    'getCargos': function() {
      var defer = $q.defer();
      $http.get('/api/Cargos').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
      
    },
     'getCargo': function(id) {
      var defer = $q.defer();
      $http.get('/api/Cargos/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addCargo': function(data) {
      console.log("trying to create cargo");
      console.log(data);
      var defer = $q.defer();
      $http.post('/api/Cargos', data).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeCargo': function(id) {
      var defer = $q.defer();
      $http.delete('/api/Cargos/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'updateCargo': function(data) {
		console.log("trying to update cargo");
		console.log(data);
      var defer = $q.defer();
      $http.put('/api/Cargos/'+data.id,data).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
}});