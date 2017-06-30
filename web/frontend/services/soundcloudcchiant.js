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

}]);