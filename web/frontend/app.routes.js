'use strict';

SHARE.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

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
            name: 'kanInvitation',
            url: '/kanInvitation',
            component: 'kanInvitation',
            resolve : {
                users : function(kanInvitationService) {
                    return kanInvitationService.getKanInvitationList();
                }
            }
        });

    $urlRouterProvider.otherwise('/kanList');

});
