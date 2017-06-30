'use strict';

SERVICES.service('loginService', ['$http', '$log', '$q', function ($http, $log, $q) {

  this.getKanList = () => {
    return $q((resolve, reject) => {
      $http.get("http://localhost:8888/web/app_dev.php/api/playlist/get/all").then((response) => {
        resolve(response.data);
      })
        .catch((err) => {
          reject(err);
        });
    });
  }

 

}]);