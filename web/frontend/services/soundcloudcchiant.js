'use strict';

SERVICES.service('soundcloudcchiant', ['$http', '$log', '$q', function ($http, $log, $q) {

  this.getSoundcloudId = (url) => {
    return $q((resolve, reject) => {
      $http.get("http://api.soundcloud.com/resolve.json?url="+ url +"/tracks&client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z&app_version=1498753949").then((response) => {
        resolve(response.data.id);
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