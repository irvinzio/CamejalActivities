app.service('FuncionariosService', function($http, $q) {
  return {
    'getFuncionarios': function() {
      /*
      return $http.get('/api/funcionarios').then(
        function(resp){
            resp.data;
      });
      */
      var defer = $q.defer();
      $http.get('/api/funcionarios').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
      
    },
     'getFuncionario': function(id) {
      var defer = $q.defer();
      $http.get('/api/funcionarios/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addFuncionario': function(data) {
      var defer = $q.defer();
      $http.post('/api/funcionarios', data).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeFuncionario': function(id) {
      var defer = $q.defer();
      $http.delete('/api/funcionarios/'+id).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'updateFuncionario': function(data) {
      var defer = $q.defer();
      $http.put('/api/funcionarios/'+data.id,data).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
}});