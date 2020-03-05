
var myTemplate=require("./header.hbs")
var css =require("./header.css") 
var data = {
  urls: [
    {
      movieTitle: "Ender's Game",
      movieDirector: "Gavin Hood",
      movieImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/movie-endersgame.jpg"
    }, {
      movieTitle: "The Fifth Estate",
      movieDirector: "Bill Condon",
      movieImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/movie-thefifthestate.jpg"
    }, {
      movieTitle: "Escape Plan",
      movieDirector: "Mikael Håfström",
      movieImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/movie-escapeplan.jpg"
    }
  ]
};


var i;
for (i = 0; i < data.urls.length; i++) {
var html = myTemplate(data.urls[i]);
$(".dropdown-content").append(html)

} 







