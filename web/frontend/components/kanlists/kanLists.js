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
          this.kanListArray = (items);
          this.kanLists = [];
          for (let i = 0; i < this.kanListArray.length; i++) {
            this.kanLists.push(this.kanListArray[i].urls[0]);
            console.log(this.kanLists);
          }
        }).catch((err) => { });
      }

      // this.saveKan = () => {
      //   kanListService.saveKan().then(() => {
      //     $state.go('kanLists');
      //   }).catch((err) => { });
      // };

    }]
  });