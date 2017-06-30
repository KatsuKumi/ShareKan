'use strict';

COMPNT
  .component("kanList", {

    templateUrl: '/components/kanlist/kanList.html',

    controller: ['kanListService', '$log', '$cookies', function (kanListService, $log, $cookies) {
      this.$onInit = () => {
      }


      this.savekanList = (newKanList) => {
 
        kanListService.saveKan(newKanList).then((items) => {
          
          $state.go('kanLists');
        }).catch((err) => {
        });
      };

    }]
  });