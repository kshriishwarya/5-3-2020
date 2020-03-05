var myTemplate = require("./banner.hbs");
var css2=require("./banner.css")
var data = {
    movies: [
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
  for (i = 0; i < data.movies.length; i++) {
    console.log(i)
    var html = myTemplate(data.movies[i]);
  $("#movies").append(html)
  
  }  