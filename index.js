let box = document.getElementById('box')
let poster = document.getElementById('poster')
let movieInput = document.getElementById('movie')

function getFetch() {
     let movie = document.getElementById('movie').value

     if (movie === '') {
          box.innerHTML = " "
          poster.innerHTML = ""

     }

     let apikey = 'abd13736'
     const movieUrl = `http://www.omdbapi.com/?apikey=${apikey}&t=${movie}`;

     fetch(movieUrl)
          .then((res) => res.json())
          .then((data) => {
               if (data.Response === 'True') {
                    movieData(data);
               } else {
                    box.innerHTML = " "
                    poster.innerHTML = " "
               }
          })
          .catch((error) => {
               console.log(error)
               box.innerHTML = ""
               poster.innerHTML = " "
          })
}

function movieData(movie) {
     poster.innerHTML = `<img src="${movie.Poster}" class="movieImg" alt="${movie.Title}">`;
     box.innerHTML = `<h2 class="title">${movie.Title}</h2>
    <p class="year"><strong>Year: </strong> ${movie.Year}</p>
    <p class="genre"><strong>Genre: </strong> ${movie.Genre}</p>
    <p class="director"><strong>Director: </strong> ${movie.Director}</p>
    <p class="actors"><strong>Actors: </strong> ${movie.Actors}</p>
    <p class="rating"><strong>IMDb Rating: </strong> ${movie.imdbRating}</p>
    <p class="rated"><strong>Rated: </strong> ${movie.Rated}</p>
    <p class="boxoffice"><strong>Boxoffice: </strong> ${movie.Boxoffice}</p>`;
}

let call;

function debouncing(callfunction, delay) {
     if (call) {
          clearTimeout(call)
     }
     call = setTimeout(() => {
          callfunction()
     }, delay)
}

movieInput.addEventListener('input', () => {
     debouncing(getFetch, 800)
})
