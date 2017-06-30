'use strict';

SHARE.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider


        .state({
            name: 'login',
            url: '/login',
            component: 'login',
        })

        .state({
            name: 'kanList',
            url: '/kanList',
            component: 'kanList',
            // resolve: {
            //     kanList: function (kanListService) {
            //         kanListService.getKanListP();

            //     }
            // }
        })

        .state({
            name: 'kanLists',
            url: '/kanLists',
            component: 'kanLists',
        })

        .state({
            name: 'kanProfile',
            url: '/kanProfile',
            component: 'kanProfile',
        })

        .state({
            name: 'home',
            url: '/home',
            component: 'home',
        })


        .state({
            name: 'kanInvitation',
            url: '/kanInvitation',
            component: 'kanInvitation',
            resolve: {
                kanInvited: function (kanInvitationService) {
                    kanInvitationService.getKanInvitationList();
                }
            }
        })

    $urlRouterProvider.otherwise('/home');

});
