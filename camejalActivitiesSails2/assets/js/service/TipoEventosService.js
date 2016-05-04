app.service('TipoEventosService', function($http, $q) {
  return {
    'getTipoEventos': function() {
      var defer = $q.defer();
      $http.get('/api/tipoEvento').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
      
    },
     'getTipoEvento': function(id) {
      var defer = $q.defer();
      $http.get('/api/tipoEvento/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addTipoEvento': function(data) {
      var defer = $q.defer();
      $http.post('/api/tipoEvento', data).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeTipoEvento': function(id) {
      var defer = $q.defer();
      $http.delete('/api/tipoEvento/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'updateTipoEvento': function(data) {
      var defer = $q.defer();
      $http.put('/api/tipoEvento/'+data.id,data).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
}});