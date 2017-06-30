'use strict';

COMPNT
  .component("kanLists", {

    templateUrl: '/components/kanlists/kanLists.html',

    controller: ['kanListService', '$log', '$sce', 'soundcloudcchiant', 'userService', function (kanListService, $log, $sce,soundcloudcchiant, userService ) {

      this.$onInit = () => {
        this.getAllKanLists();
        userService.getCurrentUser().then((items) => {
          this.currentUser = (items);
        }).catch((err) => { });
        this.pageChangeHandler = (num) => {
        }
      }

      this.getAllKanLists = () => {
        kanListService.getKanList().then((items) => {
          this.kanLists = (items);
          this.currentKanLists = items[0];
          console.log(this.kanLists);
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
        this.deezerurl = $sce.trustAsResourceUrl("https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id="+ id +"&app_id=230222");
      }
      
      this.sdplayer = (url) => {
      
        this.ytburl = "";
        this.deezerurl = "";
        soundcloudcchiant.getSoundcloudId(url).then((items) => {
          this.soundcloudurl = $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+ items +"&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
      }).catch((err) => { });
        
      }
    }]
  });