app.service('EventosService', function($http, $q) {
  return {
    'getEventos': function() {
      /*
      return $http.get('/api/eventos').then(
        function(resp){
            resp.data;
      });
      */
      var defer = $q.defer();
      $http.get('/api/eventos').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
      
    },
     'getEvento': function(id) {
      var defer = $q.defer();
      $http.get('/api/eventos/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addEvento': function(data) {
      var defer = $q.defer();
      $http.post('/api/eventos', data).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        console.log(err);
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeEvento': function(id) {
      var defer = $q.defer();
      $http.delete('/api/eventos/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'updateEvento': function(data) {
      var defer = $q.defer();
      $http.put('/api/eventos/'+data.id,data).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
}});