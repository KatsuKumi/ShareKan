'use strict';

SERVICES.service('kanListService', ['$http', '$log', '$q', '$cookies', function ($http, $log, $q, $cookies) {

  this.getKanList = () => {
    return $q((resolve, reject) => {
        var config = {headers:  {
            'Authorization': 'Bearer '+ $cookies.get('token')
            }
        };
      $http.get("http://localhost:8888/web/app_dev.php/api/playlist/get/all", config).then((response) => {
        resolve(response.data);
      })
        .catch((err) => {
          reject(err);
        });
    });
  }

  // this.getMyKanList = () => {
  //   return $q((resolve, reject) => {
  //     $http.get("http://localhost:8888/web/app_dev.php/api/playlist/get/all").then((response) => {
  //       resolve(response.data);
  //     })
  //       .catch((err) => {
  //         reject(err);
  //       });
  //   });
  // }

  this.saveKan = function (kanLeSurvivant) {
            var deferred = $q.defer();
            var config = {headers:  {
            'Authorization': 'Bearer '+ $cookies.get('token')
            }
        };
            $http.post("http://localhost:8888/web/app_dev.php/api/playlist/add", kanLeSurvivant, config).then((response) => {
                deferred.resolve(response.data);
            }).catch((error) => {
                deferred.reject(error);
                $log.error(error);
            });
            return deferred.promise;
        };

}]);