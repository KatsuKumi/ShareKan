'use strict';

SERVICES.service('userService', ['$http', '$log', '$q', '$cookies', function ($http, $log, $q, $cookies) {

  this.getCurrentUser = () => {
    return $q((resolve, reject) => {
        var config = {headers:  {
            'Authorization': 'Bearer '+ $cookies.get('token')
            }
        };
      $http.get("http://localhost:8888/web/app_dev.php/api/user/get/actual", config ).then((response) => {
        resolve(response.data);
      })
        .catch((err) => {
          reject(err);
        });
    });
  }

 

}]);