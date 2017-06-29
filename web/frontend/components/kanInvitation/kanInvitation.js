'use strict';

COMPNT
  .component("kanInvitation", {

    templateUrl: '/components/kanInvitation/kanInvitation.html',

    bindings: {

      users: '<'

    },

    controller: ['kanInvitationService', '$log', function (kanInvitationService, $log) {
      this.$onInit = () => {
        console.log(this.users);
        
      }


    }]
  });