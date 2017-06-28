'use strict';

COMPNT
  .component("kanLists", {

    templateUrl: '/components/kanlists/kanLists.html',

    controller: ['kanListService', '$log', function (kanListService, $log) {

      this.$onInit = () => {
        this.getAllKanLists();
        this.pageChangeHandler = (num) => {
        }
      }

      this.getAllKanLists = () => {
        kanListService.getKanList().then((items) => {
          this.kanLists = items;
        }).catch((err) => { });
      }
    }]
  });