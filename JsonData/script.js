function loadItems(){
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200){
            const json = xhr.response;
            show(json);
        }
    };
    xhr.open('GET', 'items.json');
    xhr.send();
}

function show(json){
    var body = document.body;
    body.innerHTML += '<div class="panel"><ul id="top-movies">';
    var list = document.querySelector("ul");
    for(let i = 0; i < json.results.length; i++){
        var film = json.results[i];
        list.innerHTML += `
    <li class="movie-card">
        <div class="position">${i+1}</div>
             <div class="mc-poster">
               <a href="https://www.filmaffinity.com/es/film809297.html">
                <img width="100" height=""
                     src="https://image.tmdb.org/t/p/w500${film.poster_path}"
                    alt="El Padrino">
               </a>
               </div>
                   <div class="movie-data">
                   <div class="mc-info-container">
                   <div class="mc-title">
                   <a href="https://www.filmaffinity.com/es/film809297.html" title="El padrino">
                   ${film.title}
                   </a>
                   (1972)
                   <img src="https://www.filmaffinity.com/imgs/countries/US.jpg" alt="Estados Unidos">
                   </div>
                   <div class="mc-director">
                   <a href="" title="Francis Ford Coppola">Francis Ford Coppola</a>
                   </div>
                   <div class="mc-cast">
                   <a href="">Marlon Brando</a>,
                   <a href="">Al Pacino</a>,
                   <a href="">James Caan</a>,
                   <a href="">Robert Duvall</a>,
                   <a href="">Diane Keaton</a>,
                   <a href="">John Cazale</a>,
                   <a href="">Talia Shire</a>,
                   <a href="">Richard S. Castellano</a>,
                   ...
                </div>
            </div>
            <div class="data">
                <div class="avg-rating">${film.vote_average}</div>
            <div class="rat-count">${film.vote_count} <i class="fas fa-user"></i></div>
            </div>
        </div>
    </li>`;
    }
}



