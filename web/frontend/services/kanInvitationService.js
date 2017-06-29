'use strict';



SERVICES.service('kanInvitationService', ['$http', '$log', '$q', function ($http, $log, $q) {

    this.getKanInvitationList = () => {

        var defer = $q.defer();

        $http.get("http://localhost/ShareKan/web/app_dev.php/api/playlist/get/all").then((response) => {
            defer.resolve(response.data);
        }).catch((err) => {
            $log.debug(`Error: ${err}`);
            defer.reject(err);
        });

        return defer.promise;
    };

    this.getKanAcceptedInvitation = (id) => {
    return $q((resolve, reject) => {
      $http.get("http://localhost/ShareKan/web/app_dev.php/api/playlist/get/all").then((response) => {
        resolve(response.data);
      })
        .catch((err) => {
          reject(err);
        });
    });
  }

}]);