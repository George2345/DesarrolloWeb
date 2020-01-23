loadItems();

function likeButton(id) {
    var button = document.getElementById(id);
    var textButton = button.value;
    if (textButton === 'Like'){
        button.setAttribute("background-color", "red");
        button.value = 'Dislike'
    }
    else {
        button.setAttribute("background-color", "white");
        button.value = 'Like'
    }
}

function loadItems() {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200){
            const json = xhr.response;
            showJson(json);
        }
    };
    xhr.open('GET', 'https://randomuser.me/api/?results=3');
    xhr.send();
}

function showJson(json) {
    let listElement = document.querySelector('ul');
    for (let i = 0; i < json.results.length; i++) {
        var user = json.results[i];
        listElement.innerHTML += `<li class="user-card">
            <div class="mc-photo">
                <a><img class="image" width="100" height="" src="${user.picture.medium}"></a>
            </div>
            <div class="content-details">
                <div class="details">
                    <div class="title">${user.name.title}. ${user.name.first} ${user.name.last}</div>
                    <div class="email"><i class="far fa-envelope"></i> ${user.email}</div>
                    <div class="username"><i class="fab fa-twitter"></i> ${user.login.username}</div>
                    <input id="${i+1}button-like" class="button" onclick="likeButton(this.id)" type="button" value="Like">
                </div>
                <div class="otherDetails">
                    <div class="dob-date"><i class="fas fa-birthday-cake"></i> ${user.dob.date.substr(0,10)}</div>
                    <div class="cell"><i class="fas fa-phone"></i> ${user.cell}</div>
                    <div class="location">
                        <div class="street"><i class="fas fa-map-marker-alt"></i> ${user.location.street}</div>
                        <div class="city">${user.location.city}</div>
                        <div class="city">${user.location.postcode}</div>
                    </div>
                </div>
            </div>

        </li>`
    }
}

