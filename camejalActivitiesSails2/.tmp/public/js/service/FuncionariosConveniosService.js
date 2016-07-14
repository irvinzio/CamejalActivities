app.service('FuncionariosConveniosService', function($http, $q) {
  return {
    'getFuncionariosConvenios': function() {
      var defer = $q.defer();
      $http.get('/api/funcionariosConvenios').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
      
    },
     'getFuncionarioConvenios': function(id) {
      var defer = $q.defer();
      $http.get('/api/funcionariosConvenios/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addFuncionarioConvenios': function(data) {
      var defer = $q.defer();
      $http.post('/api/funcionariosConvenios', data).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeFuncionarioConvenios': function(id) {
      var defer = $q.defer();
      $http.delete('/api/funcionariosConvenios/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'updateFuncionarioConvenios': function(data) {
      var defer = $q.defer();
      $http.put('/api/funcionariosConvenios/'+data.id,data).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
}});