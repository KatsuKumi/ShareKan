'use strict';

COMPNT
  .component("myKanList", {

    templateUrl: '/components/myKanList/myKanList.html',

    controller: ['kanListService', '$log', function (kanListService, $log) {

      this.$onInit = () => {
        this.getMyKanList();
        this.pageChangeHandler = (num) => {
        }
      }

      this.getMyKanList = () => {

        this.kanLists = [];

        kanListService.getMyKanList().then((items) => {
          this.kanListArray = (items);
          console.log(this.kanListArray);
          for (let i = 0; i < this.kanListArray.length; i++) {
            for (let j = 0; j < this.kanListArray[i].shares.length; j++) {
              this.kanLists.push(this.kanListArray[i].shares[j]);
            }
          }
        }).catch((err) => { });
      }
    }]
  });