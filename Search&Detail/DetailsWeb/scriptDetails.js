loadFilm(419704);

function loadFilm(id){
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200){
            const json = xhr.response;
            showFilm(json);
        }
    };
    xhr.open('GET', 'https://api.themoviedb.org/3/movie/'+id+'?api_key=b3ec3ec9e3fcfbc105a84967e68629cf&language=en-US');
    xhr.send();
}

function loadPersonal(id){
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200){
            const json = xhr.response;
            showPersonal(json, id);
        }
    };
    xhr.open('GET', 'https://api.themoviedb.org/3/movie/'+id+'/credits?api_key=b3ec3ec9e3fcfbc105a84967e68629cf');
    xhr.send();
}

function showFilm(json){
    var body = document.getElementById("bodyDetails");
    var film = json;
    body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original"+film.backdrop_path+")";
    body.innerHTML += `
        <div class="container">
            <div class="image">
                <img width="300" height=""
                     src="https://image.tmdb.org/t/p/w500${film.poster_path}"
                     alt="El Padrino">
            </div>
            <div class="content">
                <div class="title"><a>${json.title}</a> (${film.release_date.substr(0, 4)})</div>
                <div class="content-details"> 
                    <div class="description"><a>Director</a>
                        <div id="director-${film.id}" class="description-content"></div>
                    </div>
                    <div class="description"><a>Cast</a>
                        <div id="cast-${film.id}" class="description-content"></div>
                    </div>
                    <div class="description"><a>Overview</a>
                        <div class="description-content"><a>${film.overview}</a></div>
                    </div>
                </div> 
            </div>
        </div>`;
        loadPersonal(film.id);
}

function showPersonal(json, id) {
    var cast = json.cast.length;
    divDirector = document.getElementById("director-"+id);
    divCast = document.getElementById("cast-"+id);
    for (let j = 0; j < json.crew.length; j++){
        var crew = json.crew[j];
        if (crew.job === 'Director'){
            divDirector.innerHTML += `<a href="">${crew.name} </a>`
        }
    }
    if (cast > 10){
        cast = 10;
    }
    for (let i = 0; i < cast; i++){
        var actors = json.cast[i];
        divCast.innerHTML += `<a href="">${actors.name}</a>,`;
    }
}