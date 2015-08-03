define(function() {
  
 return {
  querySongs: function(getList) {
    $.ajax({
      url: "songs.json",
    }).done(function(data) {
      getList.call(this, data.songs)
     
  });
 }
};
});




/* Steve's code

define(function() {
  return {
    querySongs: function(callback) {
      $.ajax({
        url: "./javascripts/songs.json"
      }).done(function(data) {
        callback.call(this, data.songs);
      });
    }
  };
});*/