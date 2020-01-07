loadItems();

function searcher() {
    var idInput = document.querySelector("input");
    var valueInput = idInput.value;
    var element = document.getElementById("panel-films");
    if (valueInput === ""){
        element.remove();
        loadItems();
    }
    else {
        element.remove();
        loadFilms(valueInput);
    }
    idInput.value = valueInput;
}

function loadItems(){
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200){
            const json = xhr.response;
            show(json);
        }
    };
    xhr.open('GET', 'https://api.themoviedb.org/3/movie/popular?api_key=b3ec3ec9e3fcfbc105a84967e68629cf&language=es-US&page=1');
    xhr.send();
}

function loadActors(id){
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200){
            const json = xhr.response;
            showActors(json, id);
        }
    };
    xhr.open('GET', 'https://api.themoviedb.org/3/movie/'+id+'/credits?api_key=b3ec3ec9e3fcfbc105a84967e68629cf');
    xhr.send();
}

function loadFilms(string){
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200){
            const json = xhr.response;
            show(json);
        }
    };
    xhr.open('GET', 'https://api.themoviedb.org/3/search/movie?api_key=b3ec3ec9e3fcfbc105a84967e68629cf&language=es-US&query='+string+'&page=1&include_adult=false');
    xhr.send();
}

function show(json){
    var body = document.body;
    div1 = document.createElement("div");
    div1.setAttribute("id", "panel-films");
    div1.setAttribute("class", "panel");
    body.appendChild(div1);
    ul = document.createElement("ul");
    ul.setAttribute("id", "top-movies");
    div1.appendChild(ul);
    var list = document.querySelector("ul");
    for(let i = 0; i < json.results.length; i++) {
        var film = json.results[i];
        list.innerHTML += `
        <li id="${film.id}" class="movie-card">
            <div class="position">${i + 1}</div>
                 <div class="mc-poster" >
                   <a href="../DetailsWeb/details.html">
                    <img id="${film.id}" width="100" height="" onclick="loadFilm(this.id)"
                        src="https://image.tmdb.org/t/p/w500${film.poster_path}">
                   </a>
                 </div>
                 <div  class="movie-data">
                       <div class="mc-info-container">
                           <div class="mc-title">
                               <a href="https://www.filmaffinity.com/es/film809297.html">
                                    ${film.title}
                               </a>
                               (${film.release_date.substr(0, 4)})                  
                           </div>
                           <div id="director${film.id}" class="mc-director">
                                 
                           </div>
                           <div id="cast${film.id}" class="mc-cast">
                               
                           </div>
                       </div>     
                       <div class="data">
                             <div class="avg-rating">${film.vote_average}</div>
                             <div class="rat-count">${film.vote_count} <i class="fas fa-user"></i></div>
                       </div>
                       </div>
                 </div>
        </li>`;
        loadActors(film.id);
    }
}

function showActors(json, id) {
    var cast = json.cast.length;
    divDirector = document.getElementById("director"+id);
    divCast = document.getElementById("cast"+id);
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