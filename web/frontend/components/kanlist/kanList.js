'use strict';

COMPNT
  .component("kanList", {

    templateUrl: '/components/kanlist/kanList.html',

    bindings: {
      kanList: '<'
    },

    controller: ['kanListService', '$log', function (kanListService, $log) {

    }]
  });