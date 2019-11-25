function loadItems(){
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

const json = {

    "page": 1,

    "total_results": 10000,

    "total_pages": 500,

    "results": [

    {

        "popularity": 352.867,

        "vote_count": 5688,

        "video": false,

        "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",

        "id": 475557,

        "adult": false,

        "backdrop_path": "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",

        "original_language": "en",

        "original_title": "Joker",

        "genre_ids": [

            80,

            18,

            53

        ],

        "title": "Joker",

        "vote_average": 8.4,

        "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",

        "release_date": "2019-10-02"

    },

    {

        "popularity": 277.172,

        "vote_count": 42,

        "video": false,

        "poster_path": "/qdfARIhgpgZOBh3vfNhWS4hmSo3.jpg",

        "id": 330457,

        "adult": false,

        "backdrop_path": "/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg",

        "original_language": "en",

        "original_title": "Frozen II",

        "genre_ids": [

            12,

            16,

            35,

            14,

            10402,

            10751

        ],

        "title": "Frozen II",

        "vote_average": 5.1,

        "overview": "Elsa, Anna, Kristoff and Olaf are going far in the forest to know the truth about an ancient mystery of their kingdom.",

        "release_date": "2019-11-20"

    },

    {

        "popularity": 221.789,

        "vote_count": 608,

        "video": false,

        "poster_path": "/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",

        "id": 290859,

        "adult": false,

        "backdrop_path": "/a6cDxdwaQIFjSkXf7uskg78ZyTq.jpg",

        "original_language": "en",

        "original_title": "Terminator: Dark Fate",

        "genre_ids": [

            28,

            878

        ],

        "title": "Terminator: Dark Fate",

        "vote_average": 6.4,

        "overview": "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",

        "release_date": "2019-10-23"

    },

    {

        "popularity": 207.098,

        "vote_count": 5060,

        "video": false,

        "poster_path": "/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",

        "id": 429617,

        "adult": false,

        "backdrop_path": "/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",

        "original_language": "en",

        "original_title": "Spider-Man: Far from Home",

        "genre_ids": [

            28,

            12,

            878

        ],

        "title": "Spider-Man: Far from Home",

        "vote_average": 7.6,

        "overview": "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",

        "release_date": "2019-06-28"

    },

    {

        "popularity": 194.319,

        "vote_count": 3592,

        "video": false,

        "poster_path": "/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",

        "id": 420818,

        "adult": false,

        "backdrop_path": "/nRXO2SnOA75OsWhNhXstHB8ZmI3.jpg",

        "original_language": "en",

        "original_title": "The Lion King",

        "genre_ids": [

            12,

            16,

            18

        ],

        "title": "The Lion King",

        "vote_average": 7.1,

        "overview": "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",

        "release_date": "2019-07-12"

    },

    {

        "popularity": 169.408,

        "vote_count": 578,

        "video": false,

        "poster_path": "/fapXd3v9qTcNBTm39ZC4KUVQDNf.jpg",

        "id": 423204,

        "adult": false,

        "backdrop_path": "/k2WyDw2NTUIWnuEs5gT7wgrCQg6.jpg",

        "original_language": "en",

        "original_title": "Angel Has Fallen",

        "genre_ids": [

            28

        ],

        "title": "Angel Has Fallen",

        "vote_average": 5.8,

        "overview": "After the events in the previous film, Secret Service agent Mike Banning finds himself framed for an assassination attempt on the President. Pursued by his own agency and the FBI, Banning races to clear his name and uncover the real terrorist threat which has set its sights on Air Force One.",

        "release_date": "2019-08-21"

    },

    {

        "popularity": 159.919,

        "vote_count": 65,

        "video": false,

        "poster_path": "/36YiDLw3IWkQyhfJnCjG2GCNgg9.jpg",

        "id": 458897,

        "adult": false,

        "backdrop_path": "/P7QwQE8HJaB5bIIACyRdXVV7gO.jpg",

        "original_language": "en",

        "original_title": "Charlie's Angels",

        "genre_ids": [

            28,

            12,

            35

        ],

        "title": "Charlie's Angels",

        "vote_average": 6.9,

        "overview": "When a systems engineer blows the whistle on a dangerous technology, Charlie's Angels from across the globe are called into action, putting their lives on the line to protect society.",

        "release_date": "2019-11-14"

    },

    {

        "popularity": 155.556,

        "vote_count": 591,

        "video": false,

        "poster_path": "/uTALxjQU8e1lhmNjP9nnJ3t2pRU.jpg",

        "id": 453405,

        "adult": false,

        "backdrop_path": "/c3F4P2oauA7IQmy4hM0OmRt2W7d.jpg",

        "original_language": "en",

        "original_title": "Gemini Man",

        "genre_ids": [

            28,

            53

        ],

        "title": "Gemini Man",

        "vote_average": 5.6,

        "overview": "Henry Brogen, an aging assassin tries to get out of the business but finds himself in the ultimate battle: fighting his own clone who is 25 years younger than him and at the peak of his abilities.",

        "release_date": "2019-10-02"

    },

    {

        "popularity": 136.105,

        "vote_count": 87,

        "video": false,

        "poster_path": "/4E2lyUGLEr3yH4q6kJxPkQUhX7n.jpg",

        "id": 568012,

        "adult": false,

        "backdrop_path": "/iGnCzXEx0cFlUbpyAMeHwHWhPhx.jpg",

        "original_language": "ja",

        "original_title": "ワンピーススタンピード",

        "genre_ids": [

            28,

            12,

            16

        ],

        "title": "One Piece: Stampede",

        "vote_average": 7.3,

        "overview": "One Piece: Stampede is a stand-alone film that celebrates the anime's 20th Anniversary and takes place outside the canon of the \"One Piece\" TV series. Monkey D. Luffy and his Straw Hat pirate crew are invited to a massive Pirate Festival that brings many of the most iconic characters from throughout the franchise to participate in competition with the Straw Hats to find Roger's treasure. It also pits the Straw Hats against a new enemy named Bullet, a former member of Roger's crew.",

        "release_date": "2019-08-09"

    },

    {

        "popularity": 124.503,

        "vote_count": 48,

        "video": false,

        "poster_path": "/MBiKqTsouYqAACLYNDadsjhhC0.jpg",

        "id": 486589,

        "adult": false,

        "backdrop_path": "/bga3i5jcejBekr2FCGJga1fYCh.jpg",

        "original_language": "en",

        "original_title": "Red Shoes and the Seven Dwarfs",

        "genre_ids": [

            16,

            10749

        ],

        "title": "Red Shoes and the Seven Dwarfs",

        "vote_average": 6,

        "overview": "Princes who have been turned into Dwarfs seek the red shoes of a lady in order to break the spell, although it will not be easy.",

        "release_date": "2019-07-25"

    },

    {

        "popularity": 118.121,

        "vote_count": 2,

        "video": false,

        "poster_path": "/4I0CQfnMy6sRR7QhgqsXR16TmIs.jpg",

        "id": 645541,

        "adult": false,

        "backdrop_path": "/sxPycUAaLJJGq2lhhgzR96ePaO0.jpg",

        "original_language": "en",

        "original_title": "Ellipse",

        "genre_ids": [

            878

        ],

        "title": "Ellipse",

        "vote_average": 4,

        "overview": "A man and his dog are stranded on a volatile, oval-shaped planet and are forced to adapt and escape before time destroys them both.",

        "release_date": "2019-11-05"

    },

    {

        "popularity": 110.374,

        "vote_count": 1936,

        "video": false,

        "poster_path": "/kvpNZAQow5es1tSY6XW2jAZuPPG.jpg",

        "id": 384018,

        "adult": false,

        "backdrop_path": "/qAhedRxRYWZAgZ8O8pHIl6QHdD7.jpg",

        "original_language": "en",

        "original_title": "Fast & Furious Presents: Hobbs & Shaw",

        "genre_ids": [

            28,

            12,

            35

        ],

        "title": "Fast & Furious Presents: Hobbs & Shaw",

        "vote_average": 6.6,

        "overview": "Ever since US Diplomatic Security Service Agent Hobbs and lawless outcast Shaw first faced off, they just have swapped smacks and bad words. But when cyber-genetically enhanced anarchist Brixton's ruthless actions threaten the future of humanity, both join forces to defeat him. (A spin-off of “The Fate of the Furious,” focusing on Johnson's Luke Hobbs and Statham's Deckard Shaw.)",

        "release_date": "2019-08-01"

    },

    {

        "popularity": 110.183,

        "vote_count": 203,

        "video": false,

        "poster_path": "/6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg",

        "id": 359724,

        "adult": false,

        "backdrop_path": "/n3UanIvmnBlH531pykuzNs4LbH6.jpg",

        "original_language": "en",

        "original_title": "Ford v Ferrari",

        "genre_ids": [

            28,

            18,

            36

        ],

        "title": "Ford v Ferrari",

        "vote_average": 8,

        "overview": "American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.",

        "release_date": "2019-10-10"

    },

    {

        "popularity": 109.701,

        "vote_count": 0,

        "video": false,

        "poster_path": "/vn94LlNrbUWIZZyAdmvUepFBeaY.jpg",

        "id": 449924,

        "adult": false,

        "backdrop_path": "/ekP6EVxL81lZ4ivcqPsoZ72rY0h.jpg",

        "original_language": "cn",

        "original_title": "葉問4",

        "genre_ids": [

            28,

            18,

            36

        ],

        "title": "Ip Man 4: The Finale",

        "vote_average": 0,

        "overview": "Ip Man 4 is an upcoming Hong Kong biographical martial arts film directed by Wilson Yip and produced by Raymond Wong. It is the fourth in the Ip Man film series based on the life of the Wing Chun grandmaster of the same name and features Donnie Yen reprising the role. The film began production in April 2018 and ended in July the same year.",

        "release_date": "2019-12-20"

    },

    {

        "popularity": 92.356,

        "vote_count": 4129,

        "video": false,

        "poster_path": "/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",

        "id": 420817,

        "adult": false,

        "backdrop_path": "/rVqY0Bo4Npf6EIONUROxjYAJfmD.jpg",

        "original_language": "en",

        "original_title": "Aladdin",

        "genre_ids": [

            12,

            35,

            14,

            10749,

            10751

        ],

        "title": "Aladdin",

        "vote_average": 7.1,

        "overview": "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",

        "release_date": "2019-05-22"

    },

    {

        "popularity": 85.749,

        "vote_count": 128,

        "video": false,

        "poster_path": "/q125RHUDgR4gjwh1QkfYuJLYkL.jpg",

        "id": 508965,

        "adult": false,

        "backdrop_path": "/mlxKite1x1PgmIhJgAxNS9eHmH8.jpg",

        "original_language": "en",

        "original_title": "Klaus",

        "genre_ids": [

            12,

            16,

            35,

            10751

        ],

        "title": "Klaus",

        "vote_average": 8.7,

        "overview": "When Jesper distinguishes himself as the Postal Academy's worst student, he is sent to Smeerensburg, a small village located on a icy island above the Arctic Circle, where grumpy inhabitants barely exchange words, let alone letters. Jesper is about to give up and abandon his duty as a postman when he meets local teacher Alva and Klaus, a mysterious carpenter who lives alone in a cabin full of handmade toys.",

        "release_date": "2019-11-08"

    },

    {

        "popularity": 84.61,

        "vote_count": 905,

        "video": false,

        "poster_path": "/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg",

        "id": 420809,

        "adult": false,

        "backdrop_path": "/skvI4rYFrKXS73BJxWGH54Omlvv.jpg",

        "original_language": "en",

        "original_title": "Maleficent: Mistress of Evil",

        "genre_ids": [

            12,

            14,

            10751

        ],

        "title": "Maleficent: Mistress of Evil",

        "vote_average": 7.2,

        "overview": "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",

        "release_date": "2019-10-16"

    },

    {

        "popularity": 84.267,

        "vote_count": 15821,

        "video": false,

        "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",

        "id": 299536,

        "adult": false,

        "backdrop_path": "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",

        "original_language": "en",

        "original_title": "Avengers: Infinity War",

        "genre_ids": [

            28,

            12,

            878

        ],

        "title": "Avengers: Infinity War",

        "vote_average": 8.3,

        "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",

        "release_date": "2018-04-25"

    },

    {

        "popularity": 82.837,

        "vote_count": 1995,

        "video": false,

        "poster_path": "/zfE0R94v1E8cuKAerbskfD3VfUt.jpg",

        "id": 474350,

        "adult": false,

        "backdrop_path": "/8moTOzunF7p40oR5XhlDvJckOSW.jpg",

        "original_language": "en",

        "original_title": "It Chapter Two",

        "genre_ids": [

            27

        ],

        "title": "It Chapter Two",

        "vote_average": 6.9,

        "overview": "27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",

        "release_date": "2019-09-04"

    },

    {

        "popularity": 80.039,

        "vote_count": 8357,

        "video": false,

        "poster_path": "/jpfkzbIXgKZqCZAkEkFH2VYF63s.jpg",

        "id": 920,

        "adult": false,

        "backdrop_path": "/a1MlbLBk5Sy6YvMbSuKfwGlDVlb.jpg",

        "original_language": "en",

        "original_title": "Cars",

        "genre_ids": [

            12,

            16,

            35,

            10751

        ],

        "title": "Cars",

        "vote_average": 6.7,

        "overview": "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",

        "release_date": "2006-06-08"

    }

]

};


