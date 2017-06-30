

'use strict';

SERVICES.service('kanInvitationService', ['$http', '$log', '$q', function ($http, $log, $q) {

    this.getKanInvitationList = () => {

        var defer = $q.defer();

        $http.get("http://localhost:3000/users").then((response) => {
       // $http.get("http://localhost:8888/web/app_dev.php/api/user/invite").then((response) => {
            defer.resolve(response.data);
            console.log(response.data);
        }).catch((err) => {
            $log.debug(`Error: ${err}`);
            defer.reject(err);
        });
        return defer.promise;
    };
  
    this.getKanAcceptedInvitation = (email) => {
    return $q((resolve, reject) => {
      $http.get("http://localhost:3000/users?email=" + email).then((response) => {
      //$http.get("http://localhost:8888/web/app_dev.php/api/user/invite").then((response) => {
        resolve(response.data);
      })
        .catch((err) => {
          reject(err);
        });
    });
  }

  this.postInvitation = (newUser) => {
     console.log(newUser);
    return $q((resolve, reject) => {
      $http.post("http://localhost:8888/web/app_dev.php/api/user/invite" , newUser).then((response) => {
      //$http.get("http://localhost:8888/web/app_dev.php/api/user/invite").then((response) => {

        resolve(response.data);
      })
        .catch((err) => {
          reject(err);
        });
    });
  }

}]);