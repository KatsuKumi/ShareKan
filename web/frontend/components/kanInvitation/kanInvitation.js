
'use strict';

COMPNT
  .component("kanInvitation", {

    templateUrl: '/components/kanInvitation/kanInvitation.html',

    bindings: {

      users: '<',
      newUser: '<'
    },

    controller: ['kanInvitationService', '$log', 'userService', function (kanInvitationService, $state, $log, userService) {
      this.$onInit = () => {
        console.log(this.users);
      }
      this.sendInvit = (newUser) => {
        this.successtext = "Email Sent !";
        kanInvitationService.postInvitation(newUser).then((items) => {
        $state.go('kanLists');
        }).catch((err) => { });
      }
    }]
  });