app.service('ParticipacionService', function($http, $q) {
  return {
    'getParticipaciones': function() {
      var defer = $q.defer();
      $http.get('/api/tipoParticipacion').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
      
    },
     'getParticipacion': function(id) {
      var defer = $q.defer();
      $http.get('/api/tipoParticipacion/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addParticipacion': function(data) {
      var defer = $q.defer();
      $http.post('/api/tipoParticipacion', data).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeParticipacion': function(id) {
      var defer = $q.defer();
      $http.delete('/api/tipoParticipacion/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'updateParticipacion': function(data) {
      var defer = $q.defer();
      $http.put('/api/tipoParticipacion/'+data.id,data).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
}});