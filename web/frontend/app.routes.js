'use strict';

WEA.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('home', {
            url: '/',
            component: 'home',
            resolve: {}
        })
        .state({
            name: 'questions',
            url: '/questions',
            component: 'questionsList',
            params: {
                queryParam: null
            },
            resolve: {
                search: function ($stateParams) {
                    return $stateParams.queryParam;
                }
            }
        })

        .state({
            name: 'ressources',
            url: '/ressources/:tagId/:tagName',
            component: 'ressourcesList',
            resolve: {
                tagFilter: function ($stateParams) {
                    return {
                        tagId: $stateParams.tagId,
                        tagName: $stateParams.tagName
                    };
                }

            }
        })

        .state({
            name: 'ressourcePost',
            url: '/ressourcePost/:tagId/:tagName',
            component: 'ressourcePost',
            authenticate: true,
            resolve: {
                tagFilter: function ($stateParams) {
                    return {
                        tagId: $stateParams.tagId,
                        tagName: $stateParams.tagName
                    };
                }
            }
        })

        .state({
            name: 'users',
            url: '/users',
            component: 'usersList',
            resolve: {
                users: function ($rootScope, UsersService) {
                    return UsersService.getUsers();
                }
            }
        })

        .state({
            name: 'tags',
            url: '/questions/:tagId/:tagName',
            component: 'questionsList',
            resolve: {
                tagFilter: function ($stateParams) {
                    return {
                        tagId: $stateParams.tagId,
                        tagName: $stateParams.tagName
                    };
                }

            }
        })

        .state({
            name: 'person',
            url: '/users/{personId}',
            component: 'userProfile',
            resolve: {
                person: function ($rootScope, UsersService, $transition$) {
                    return UsersService.getPerson($transition$.params().personId);
                }
            }
        })

        .state({
            name: 'profil',
            url: '/profil',
            component: 'profil',
            resolve: {}
        })

        .state({
            name: 'questionPost',
            url: '/post',
            component: 'questionPost',
            authenticate: true,
            resolve: {}
        })

        .state({
            name: 'nuage',
            url: '/nuage',
            component: 'nuage',
            resolve: {}
        })

        .state({
            name: 'questionSpec',
            url: '/questions/:idQuestion',
            component: 'questionFull',
            params: {
                answer: null,
                edition: null,
                postAnswer: null,
                postComment: null
            },
            resolve: {
                question: function ($stateParams, QuestionsService) {
                    console.log($stateParams)
                    return QuestionsService.getSpecificQuestion($stateParams.idQuestion);
                },
                edition: function ($stateParams) {
                    return $stateParams.edition;
                },
                postAnswer: function ($stateParams) {
                    return $stateParams.postAnswer;
                },
                answer: function ($stateParams, QuestionsService) {
                    if ($stateParams.answer) {
                        return QuestionsService.getSpecificAnswer($stateParams.answer);
                    }
                },
                postComment: function ($stateParams) {
                    return $stateParams.postComment;
                },
            }
        })
   

        .state({
            name: 'addUser',
            url: '/addUser',
            component: 'userCreate',
            resolve: {}
        })

        .state({
            name: 'logUser',
            url: '/logUser',
            component: 'userLogin',
            resolve: {}
        })

        .state({
            name: 'questionSpec.postAnswer',
            url: '/newAnswer',
            component: 'answerPost',
            authenticate: true,
            resolve: {}
        })

        .state({
            name: 'editPost',
            url: '/edit/{postId}',
            component: 'editPost',
            resolve: {
                post: function ($rootScope, QuestionsService, $transition$) {
                    return QuestionsService.getSpecificQuestion($transition$.params().postId);
                }
            }
        })

        .state({
            name: 'tips',
            url: '/tips',
            component: 'tips',
            resolve: {}
        })

        .state({
            name: 'tips.postTip',
            url: '/post',
            component: 'postTip',
            authenticate: true,
            resolve: {}
        })
        .state({
            name: 'jobs',
            url: '/jobs',
            component: 'jobsList',
            resolve: {}
        })

        .state({
            name: 'jobPost',
            url: '/jobs/post',
            component: 'jobPost',
            resolve: {}
        })

        .state('login', {
            url: '/login',
            component: 'login',
            resolve: {
                redirect: function ($state) {
                    return $state.transition._targetState._params.redirect;
                }
            }
        });

    $urlRouterProvider.otherwise('/');

});
