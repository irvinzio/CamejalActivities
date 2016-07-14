app.service('InstitucionesService', function($http, $q) {
  return {
    'getInstituciones': function() {
      var defer = $q.defer();
      $http.get('/api/Instituciones').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
      
    },
     'getInstitucion': function(id) {
      var defer = $q.defer();
      $http.get('/api/Instituciones/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addInstitucion': function(data) {
      var defer = $q.defer();
      $http.post('/api/Instituciones', data).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeInstitucion': function(id) {
      var defer = $q.defer();
      $http.delete('/api/Instituciones/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'updateInstitucion': function(data) {
      var defer = $q.defer();
      $http.put('/api/Instituciones/'+data.id,data).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
}});