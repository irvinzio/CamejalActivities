app.service('UsuariosService', function($http, $q) {
  return {
    'getUsuarios': function() {
      var defer = $q.defer();
      $http.get('/api/usuarios').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
      
    },
     'getUsuario': function(id) {
      var defer = $q.defer();
      $http.get('/api/usuarios/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addUsuario': function(data) {
      var defer = $q.defer();
      $http.post('/api/usuarios', data).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeUsuario': function(id) {
      var defer = $q.defer();
      $http.delete('/api/usuarios/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'updateUsuario': function(data) {
      var defer = $q.defer();
      $http.put('/api/usuarios/'+data.id,data).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
}});