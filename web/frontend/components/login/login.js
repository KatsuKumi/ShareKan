'use strict';

COMPNT
    .component("login", {

        templateUrl: '/components/login/login.html',

        controller: ['kanListService', '$log', function (loginService, $log) {

            this.$onInit = () => {
            }
        }]
    });