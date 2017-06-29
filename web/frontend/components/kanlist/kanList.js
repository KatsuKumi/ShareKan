'use strict';

COMPNT
  .component("kanList", {

    templateUrl: '/components/kanlist/kanList.html',

    controller: ['kanListService', '$log', function (kanListService, $log) {
      this.$onInit = () => {
        this.getAllKanLists();
      }

      this.getAllKanLists = () => {


        kanListService.getKanList().then((items) => {
          this.kanLists = [];
          this.kanListArray = (items);
          for (let i = 0; i < 5 ; i++) {
            this.kanLists.push(this.kanListArray[i].urls[0]);
          }
          console.log(this.kanLists);
        }).catch((err) => { });
      }
    }]
  });