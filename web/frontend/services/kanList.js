'use strict';

SERVICES.service('kanListService', ['$http', '$log', '$q', function ($http, $log, $q) {

<<<<<<< HEAD
    // this.getKanList = () => {

    //     var defer = $q.defer();

    //     $http.get(KL).then((response) => {
    //         defer.resolve(response.data);
    //     }).catch((err) => {
    //         $log.debug(`Error: ${err}`);
    //         defer.reject(err);
    //     });

    //     return defer.promise;
    // };

    this.getKanList = () => {
=======
  this.getKanList = () => {
>>>>>>> 8e5fdc080c988d2ac2f39274baa8258d09d38277
    return $q((resolve, reject) => {
      $http.get("http://localhost:8888/web/app_dev.php/api/playlist/get/all").then((response) => {
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