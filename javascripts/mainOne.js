$(document).ready(function() {

  $.ajax({
  	url: "songs.json"
  }) .done(function(data) {
    // console.log(data);
    //this transfers to browser
     var contentEl = $("#songs");
    

  for (var i = 0; i <data.songs.length; i++) {
    var songName = data.songs[i].name;
    var songArtist = data.songs[i].artist;
    var songAlbum = data.songs[i].album;
    var songsText = '<div class="song-name"><h3>' + songName + "</h3><p>" + songArtist 
                        + " | " + songAlbum + "</p>" + "<button id='deleteButton'>Delete</button>" + "</div>";
    $("#more").before(songsText);
    console.log(songsText);
   }
 })

$("#more").click(function() {
  $(this).slideDown();



  $.ajax({
    url: "songsTwo.json"
  }).done(function(data) {
    var contentEl = $("#songs");
    

  for (var i = 0; i <data.songs.length; i++) {
    var songName = data.songs[i].name;
    var songArtist = data.songs[i].artist;
    var songAlbum = data.songs[i].album;
    var songsText = '<div class="song-name"><h3>' + songName + "</h3><p>" + songArtist 
                       + " | " + songAlbum + "</p>" + "<button id ='deleteButton'>Delete</button>" + "</div>";
    $("#more").before(songsText);
    console.log(songsText);

  }

  })


});

// $( document ).on( "click", "#deleteButton", function() {
//     $(this).parent().remove();
// });

});


/*  Changing to use JSON

var songs = [];

songs[0] = "Legs > by Z*ZTop on the album Eliminator";
songs[1] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[2] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[3] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[4] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
*/



/* 
removals: *, @, (, !
replacement: remove > and replace with -
this_song_original_text.replace("*","");

wants this format in main content area
{Song name} by {Artist} on the album {Album}

http://www.javascriptkit.com/javatutors/dom2.shtml  (see reference)
1. create the TextNode
var txt = document.createTextNode(" This text was added to the DIV.");
2. find an element in the DOM, and add the textNode as a child of that.
document.getElementById('myDiv').appendChild(txt);
https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

txt = document.createElement("p");
txt.innertHTML = "here's my string";
var h = document.createElement("H1")                // Create a <h1> element
var t = document.createTextNode("Hello World");     // Create a text node
h.appendChild(t);  


THIS CREATES AND ADDS SONG PARAGRAPH TO THE .sidebar__right
var paragraph = document.createElement("p");
var theTextNode = document.createTextNode("this is a song name");
paragraph.appendChild(theTextNode);
document.getElementsByClassName("sidebar__right")[0].appendChild(paragraph)


// if you want to  add to the body: document.body.appendChild(paragraph);
// if you want to add to the first (zero-th entry) returned with class
// "sidebar__right" (note the zero below)
document.getElementsByClassName("sidebar__right")[0].appendChild(paragraph)
getElementsByClassName returns an array, the appendChild mehtod is 
only available on elements (e.g. [0]) not on the actual array.

jQuery waiting for document to load $(document).ready...

PART 3
The entire container for the even songs (plus its details) should have a background color of Sea Shell (SeaShell or #FFF5EE)
The entire container for the odd songs (plus its details) should have a background color of Mint Cream (MintCream or #F5FFFA)
The first song container should have bold text.
*/



/*songs.unshift("Springstein - by Eric Church on the album Chief");

songs.push("I Love Rock 'n' Roll - by Joan Jett on the album I Love Rock 'n' Roll");

var element = document.getElementById("indent");
var output = "";
// Clean up the songs with this loop
for (var i = 0; i < songs.length; i++) {
	var this_song_original_text = songs[i];
	// console.log(this_song_original_text);
	var new_song_text = this_song_original_text.replace("*","").replace("@","").replace("(","").replace("!","").replace(">","-");
    // console.log(new_song_text);
    new_song_text = ("<p>" + new_song_text + "</p>")
    
    output = output + new_song_text;
    // console.log("output: " + output);
    // output = ("<p>" + "<H3>" + output + "</H3>" + "</p>");
}



element.innerHTML = output;   */

//adding clean songs to the DOM

// for (var i = 0; i <songs.length; i++) {
// 	// var paragraph = document.createElement("p");
// 	var theTextNode = document.createTextNode(songs[i]);
// 	paragraph.appendChild(theTextNode);
// 	// debugger;
// 	document.getElementsByClassName("sidebar__right")[0].appendChild(paragraph);
// }
