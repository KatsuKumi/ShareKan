'use strict';

COMPNT
  .component("kanLists", {

    templateUrl: '/components/kanlists/kanLists.html',

    controller: ['kanListService', '$log', '$sce', 'soundcloudcchiant', function (kanListService, $log, $sce,soundcloudcchiant) {

      this.$onInit = () => {
        this.getAllKanLists();
        this.pageChangeHandler = (num) => {
        }
      }

      this.getAllKanLists = () => {

        this.kanLists = [];

        kanListService.getKanList().then((items) => {
<<<<<<< HEAD
          this.kanListArray = (items);
          for (let i = 0; i < this.kanListArray.length; i++) {
            for (let j = 0; j < this.kanListArray[i].shares.length; j++) {
              this.kanLists.push(this.kanListArray[i].shares[j]);
              console.log(this.kanLists);
            }
          }
=======
          this.kanLists = (items);
          console.log(this.kanLists);
>>>>>>> 8e5fdc080c988d2ac2f39274baa8258d09d38277
        }).catch((err) => { });
      }

      this.showTitles = ($kanList) => {
        this.currentplaylist = $kanList.nom;
        this.tagslist = $kanList.tags;
        this.currentKanLists = $kanList;
        console.log(this.currentKanLists);
      }

      this.ytplayer = (url) => {
        this.ytburl = url;
        this.deezerurl = "";
        this.soundcloudurl = "";
      }

      this.deezplayer = (url) => {
        this.soundcloudurl = "";
        this.ytburl = "";
        let id = url.split('http://www.deezer.com/track/')[1].split('?')[0];
        this.deezerurl = $sce.trustAsResourceUrl("https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id="+ id +"&app_id=230222");
      }
      
      this.sdplayer = (url) => {
      
        this.ytburl = "";
        this.deezerurl = "";
        soundcloudcchiant.getSoundcloudId(url).then((items) => {
          this.soundcloudurl = $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+ items +"&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
      }).catch((err) => { });
        
      }
      
      // this.saveKan = () => {
      //   kanListService.saveKan().then(() => {
      //     $state.go('kanLists');
      //   }).catch((err) => { });
      // };

    }]
  });