'use strict';

COMPNT
    .component("kanProfile", {

        templateUrl: '/components/kanProfile/kanProfile.html',

        controller: ['kanListService', '$log', function (kanListService, $log) {

            this.$onInit = () => {
            }
        }]
    });