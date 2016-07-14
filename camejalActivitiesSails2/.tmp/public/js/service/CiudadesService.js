app.service('CiudadesService', function($http, $q) {
  return {
    'getCiudades': function() {
      var defer = $q.defer();
      $http.get('/api/Ciudades').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
      
    },
     'getCiudad': function(id) {
      var defer = $q.defer();
      $http.get('/api/Ciudades/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addCiudad': function(data) {
      var defer = $q.defer();
      $http.post('/api/Ciudades', data).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeCiudad': function(id) {
      var defer = $q.defer();
      $http.delete('/api/Ciudades/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },  
    'getCiudadByEstado':function(estado_id){
        var defer = $q.defer();
        $http.get('/api/Ciudades?estado_id='+estado_id).success(function(resp){
          defer.resolve(resp);
        }).error( function(err) {
          defer.reject(err);
        });
        return defer.promise;
      }
}});