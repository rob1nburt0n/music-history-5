define(function() {
  var songs = [];

 return {
  querySongs: function() {
    $.ajax({
      url: "songsTwo.json",
      async: false
    }).done(function(data) {
      songs = data.songs;
    });    
  },
     getSongs: function () {
       return songs;
    }
  }
});



/*
Steve's code

define(function() {
  return {
    querySongs: function(callback) {
      $.ajax({
        url: "./javascripts/more-songs.json"
      }).done(function(data) {
        callback.call(this, data.songs);
      });
    }
  };
});*/