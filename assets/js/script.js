
var api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&";
var apiKey = "api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
var apiFetch = fetch(api+apiKey);
var baseImgURL = "https://image.tmdb.org/t/p/original";
var movies = document.querySelector('.movies');

//  Fetching Api
apiFetch.then(function(response) {
  return response.json();
})
.then(function (data) {
  var result = data.results;

  // Function for Each Movie card
  result.forEach(function (movie, ind) {
    var li = document.createElement('li');
    li.classList.add('movie');
    li.innerHTML = 
    `<figure class="movie-img">
        <img src="${baseImgURL + movie.backdrop_path}" alt="${movie.title}">
        <figcaption class="movie-info">
          <h3>${movie.title}</h3>
          <span class="${voteColor(movie.vote_average)}">${movie.vote_average}</span>
        </figcaption>
      </figure>
      <div class="overview">
        <h4>Overview</h4>
        <p>${movie.overview}</p>
      </div>`
      movies.append(li);
  });
})

// Function for Average vote color
function voteColor(vote) {
  if(vote >= 8) {
      return 'green';
    } else if(vote >= 5) {
      return 'orange';
    } else {
      return 'red';
  }
}

