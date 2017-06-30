
'use strict';

COMPNT
  .component("kanInvitation", {

    templateUrl: '/components/kanInvitation/kanInvitation.html',

    bindings: {

      users: '<',
      newUser: '<'
    },

    controller: ['kanInvitationService', '$log', 'userService', function (kanInvitationService, $log, userService) {
      this.$onInit = () => {
        console.log(this.users); 
      }
      this.sendInvit = (newUser) => {
        userService.getCurrentUser().then((items) => {
        newUser["userid"] = items.id
        }).catch((err) => { });
          return kanInvitationService.postInvitation(newUser);
        }
    }]
  });