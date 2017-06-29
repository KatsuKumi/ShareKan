'use strict';

SERVICES.service('kanListService', ['$http', '$log', '$q', function ($http, $log, $q) {

  this.getKanList = () => {
    return $q((resolve, reject) => {
      $http.get("http://localhost/ShareKan/web/app_dev.php/api/playlist/get/all").then((response) => {
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

  // this.saveKan = function (kanLeSurvivant) {
  //           var deferred = $q.defer();
  //           $http.post("http://localhost:8888/web/app_dev.php/api/playlist/add", kanLeSurvivant).then((response) => {
  //               deferred.resolve(response.data);
  //           }).catch((error) => {
  //               deferred.reject(error);
  //               $log.error(error);
  //           });
  //           return deferred.promise;
  //       };

}]);