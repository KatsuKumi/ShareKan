
'use strict';

COMPNT
  .component("kanInvitation", {

    templateUrl: '/components/kanInvitation/kanInvitation.html',

    bindings: {

      users: '<',
      newUser: '<'
    },

    controller: ['kanInvitationService', '$log', function (kanInvitationService, $log) {
      this.$onInit = () => {
        console.log(this.users); 
      }
      this.sendInvit = (newUser) => {
          return kanInvitationService.postInvitation(newUser);
        }
    }]
  });