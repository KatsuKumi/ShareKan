'use strict';

COMPNT
  .component("kanList", {

    templateUrl: '/components/kanlist/kanList.html',

    controller: ['kanListService', '$log', function (kanListService, $log) {
      this.$onInit = () => {
        this.getAllKanLists();
      }

      this.getAllKanLists = () => {

        this.kanLists = [];

        kanListService.getKanListP().then((items) => {
          this.kanListArray = (items);
          for (let i = 0; i < this.kanListArray.length; i++) {
            for (let j = 0; j < this.kanListArray[i].shares.length; j++) {
              this.kanLists.push(this.kanListArray[i].shares[j]);
              console.log(this.kanLists);
            }
          }
        }).catch((err) => { });
      }
    }]
  });