'use strict';

COMPNT
  .component("kanInvitation", {

    templateUrl: '/components/kanInvitation/kanInvitation.html',

    bindings: {
      kanInvited:'<'
    },

    controller: ['kanInvitationService', '$log', function (kanInvitationService, $log) {
      this.$onInit = () => {
        kanInvitationService.getKanInvitationList();
      }

      
    }]
  });