var h1 = document.querySelector("#h1");
var conreq = document.querySelector("#conreq");
var mycon = document.querySelector("#mycon");

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    conreq.innerText--;
    mycon.innerText++;
}

function removeuser(id) {
    var element = document.querySelector(id);
    element.remove();
    conreq.innerText--;
}

function swap() {
    h1.innerText = "Derrick Le";
}