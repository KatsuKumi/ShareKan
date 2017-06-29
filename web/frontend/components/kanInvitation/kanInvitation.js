'use strict';

COMPNT
  .component("kanList", {

    templateUrl: '/components/kanInvitation/kanInvitation.html',

    controller: ['kanInvitationService', '$log', function (kanInvitationService, $log) {
      this.$onInit = () => {
        this.getAllKanInvitation();
      }

      
    }]
  });