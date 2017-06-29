'use strict';

const KL = "http://localhost:3000/questions";

SERVICES.service('kanListService', ['$http', '$log', '$q', function ($http, $log, $q) {

    this.getKanList = () => {

        var defer = $q.defer();

        $http.get(KL).then((response) => {
            defer.resolve(response.data);
        }).catch((err) => {
            $log.debug(`Error: ${err}`);
            defer.reject(err);
        });

        return defer.promise;
    };

    this.getKanListP = () => {
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