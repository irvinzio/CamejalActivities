app.service('MaterialDidacticoService', function($http, $q) {
  return {
    'getMaterialDidacticos': function() {
      var defer = $q.defer();
      $http.get('/api/MaterialDidactico').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
      
    },
     'getMaterialDidactico': function(id) {
      var defer = $q.defer();
      $http.get('/api/MaterialDidactico/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addMaterialDidactico': function(data) {
      var defer = $q.defer();
      $http.post('/api/MaterialDidactico', data).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeMaterialDidactico': function(id) {
      var defer = $q.defer();
      $http.delete('/api/MaterialDidactico/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'updateMaterialDidactico': function(data) {
      var defer = $q.defer();
      $http.put('/api/MaterialDidactico/'+data.id,data).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
}});