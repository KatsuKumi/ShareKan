'use strict';

SERVICES.service('loginService', ['$http', '$log', '$q', function ($http, $log, $q) {

  this.postLogUser = (logUser) => {
    return $q((resolve, reject) => {
      $http.post("http://localhost:8888/web/app_dev.php/api/login_check" , logUser ).then((response) => {
        resolve(response.data);
      })
        .catch((err) => {
          reject(err);
        });
    });
  }

 

}]);