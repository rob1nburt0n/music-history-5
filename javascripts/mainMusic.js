requirejs(
  ["dom-access", "populate-songs", "get-more-songs"], 
  function(access, populate, getMore) {
    
    populate.querySongs();
    songs = populate.getSongs();

    for (var i = 0; i <songs.length; i++) {
      var songName = songs[i].name;
      var songArtist = songs[i].artist;
      var songAlbum = songs[i].album;
      var songsText = '<div class="song-name"><h3>' + songName + "</h3><p>" + songArtist 
                        + " | " + songAlbum + "</p>" + "<button id='deleteButton'>Delete</button>" + "</div>";
      $("#more").before(songsText);
      console.log(songsText);
   }
 
  access.getMoreButton().click(function(){
    getMore.querySongs();
    songs = getMore.getSongs();

  for (var i = 0; i <songs.length; i++) {
    var songName = songs[i].name;
    var songArtist = songs[i].artist;
    var songAlbum = songs[i].album;
    var songsText = '<div class="song-name"><h3>' + songName + "</h3><p>" + songArtist 
                       + " | " + songAlbum + "</p>" + "<button id ='deleteButton'>Delete</button>" + "</div>";
    $("#more").before(songsText);
    console.log(songsText);

  }

  });
    $( document ).on( "click", "#deleteButton", function() {
    $(this).parent().remove();
  })
});


/*requirejs(
  [“dom-access", "populate-songs", "get-more-songs"], 
  function(domAccess, pop, get_more) {

    pop.querySongs(function(data) {
      console.log("data", data);
    });
    get_more.querySongs(function(data) {
      console.log("data", data);
    });
  }
);*/
