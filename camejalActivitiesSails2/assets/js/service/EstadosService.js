app.service('EstadosService', function($http, $q) {
  return {
    'getEstados': function() {
      var defer = $q.defer();
      $http.get('/api/Estados').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
      
    },
     'getEstado': function(id) {
      var defer = $q.defer();
      $http.get('/api/Estados/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addEstado': function(data) {
      var defer = $q.defer();
      $http.post('/api/Estados', data).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        console.log(err);
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeEstado': function(id) {
      var defer = $q.defer();
      $http.delete('/api/Estados/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'updateEstado': function(data) {
      var defer = $q.defer();
      $http.put('/api/Estados/'+data.id,data).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
}});