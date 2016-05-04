app.service('ConveniosService', function($http, $q) {
  return {
    'getConvenios': function() {
      /*
      return $http.get('/api/convenios').then(
        function(resp){
            resp.data;
      });
      */
      var defer = $q.defer();
      $http.get('/api/convenios').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
      
    },
     'getConvenio': function(id) {
      var defer = $q.defer();
      $http.get('/api/convenios/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addConvenio': function(data) {
      var defer = $q.defer();
      $http.post('/api/convenios', data).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        console.log(err);
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeConvenio': function(id) {
      var defer = $q.defer();
      $http.delete('/api/convenios/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'updateConvenio': function(data) {
      var defer = $q.defer();
      $http.put('/api/convenios/'+data.id,data).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
}});