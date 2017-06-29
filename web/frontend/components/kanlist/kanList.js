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
<<<<<<< HEAD
=======
          this.kanLists = [];
>>>>>>> 8e5fdc080c988d2ac2f39274baa8258d09d38277
          this.kanListArray = (items);
          for (let i = 0; i < 5 ; i++) {
            this.kanLists.push(this.kanListArray[i].urls[0]);
          }
          console.log(this.kanLists);
        }).catch((err) => { });
      }
    }]
  });