app.service('MaterialEventosService', function($http, $q) {
  return {
    'getMaterialEventos': function() {
      var defer = $q.defer();
      $http.get('/api/MaterialEvento').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
      
    },
     'getMaterialEvento': function(id) {
      var defer = $q.defer();
      $http.get('/api/MaterialEvento/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addMaterialEvento': function(data) {
      var defer = $q.defer();
      $http.post('/api/MaterialEvento', data).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeMaterialEvento': function(id) {
      var defer = $q.defer();
      $http.delete('/api/MaterialEvento/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'updateMaterialEvento': function(data) {
      var defer = $q.defer();
      $http.put('/api/MaterialEvento/'+data.id,data).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
}});