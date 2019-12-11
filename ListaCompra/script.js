

function checkInput() {
    var inputId = document.getElementById("input");
    var buttonId = document.getElementById("buttonAdd");

    if (inputId.value.length >= 1){
        buttonId.disabled = false;
    }
    else {
        buttonId.disabled = true;
    }
}

var button = document.getElementById("buttonAdd");
button.addEventListener("", event=> {
    addItem();
});

list = document.getElementById("list");
tituloListaCompra = document.getElementById("title");
count_items = 0;
function addItem() {
    var textInput = document.querySelector("input").value;
    var elementList = document.createElement("li");
    elementList.id = count_items;
    elementList.innerHTML= textInput + "<button id='buttonDelete' onclick='deleteItem(this)'>Delete</button>";
    list.appendChild(elementList);
    count_items++;
    addNumItem(count_items);
    document.getElementById("input").value ="";
}

function addNumItem(count_items){
    var numbers_items = ("My shopping list  (" + count_items + " items)");
    tituloListaCompra.innerHTML = numbers_items;
}

function deleteItem(element) {
    var id = element.parentNode.getAttribute("id");
    node = document.getElementById(id);
    node.parentNode.removeChild(node);
    count_items--;
    var numbers_items = ("My shopping list  (" + count_items + " items)");
    tituloListaCompra.innerHTML = numbers_items;
}

function readKey(event) {
    var key = (document.all) ? event.keyCode : event.which;
    var inputId = document.getElementById("input");
    var buttonAd = document.getElementById("buttonAd");

    if (inputId.value.length >= 1 && key === 13){
        addItem();
        buttonAd.disabled = true;
    }
}

