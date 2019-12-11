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

function show(json){
    var body = document.body;
    body.innerHTML += '<div class="panel"><ul id="top-movies">';
    var list = document.querySelector("ul");
    for(let i = 0; i < json.results.length; i++) {
        var film = json.results[i];
        list.innerHTML += `
        <li id="${film.id}" class="movie-card">
            <div class="position">${i + 1}</div>
                 <div class="mc-poster">
                   <a href="https://www.filmaffinity.com/es/film809297.html">
                    <img width="100" height=""
                        src="https://image.tmdb.org/t/p/w500${film.poster_path}"
                        alt="El Padrino">
                   </a>
                 </div>
                 <div  class="movie-data">
                       <div class="mc-info-container">
                           <div class="mc-title">
                               <a href="https://www.filmaffinity.com/es/film809297.html" title="El padrino">
                                    ${film.title}
                               </a>
                               (1972)
                               <img src="https://www.filmaffinity.com/imgs/countries/US.jpg" alt="Estados Unidos">
                           </div>
                           <div id="mc-director" class="mc-director">
                                 
                           </div>
                           <div id="mc-cast" class="mc-cast">
                               
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
    div = document.getElementById("mc-cast");
    div2 = document.getElementById("mc-director");
    div.setAttribute("id", id);
    div2.setAttribute("id", id);
    for (let i = 0; i < 10; i++){
        var actors = json.cast[i];
        div.innerHTML += `<a href="">${actors.name}</a>,`;
    }
    for (let j = 0; j < json.crew.length; j++){
        var crew = json.crew[j];
        if (crew.job === 'Director'){
            div2.innerHTML += `<a href="">${crew.name} </a>`
        }
    }
}