'use strict';

COMPNT
    .component("login", {

        templateUrl: '/components/login/login.html',

        bindings: {

        },

        controller: ['loginService', '$log','$cookies','$state' , function (loginService, $log, $cookies, $state) {

            this.$onInit = () => {
            
            }
            this.sendLogUser = (logUser) => {
                loginService.postLogUser(logUser).then((response) => {

                    console.log(response);
                    if (response.token){
                        $cookies.put('token', response.token);
                        $state.go('kanLists')
                    }
                });
            }
        }]
    });