function swap () {
    var h1 = document.querySelector("#h1");
    h1.innerText = "Derrick Le";
}

function removeuser () {
    var user = document.querySelector("#user1");
    var num = document.querySelector("#conreq").innerText;
    user.remove();
    num = parseInt(num) - 1;
    document.querySelector("#conreq").innerText = num;
}

function removeuser2 () {
    var user = document.querySelector("#user2");
    var num = document.querySelector("#conreq").innerText;
    user.remove();
    num = parseInt(num) - 1;
    document.querySelector("#conreq").innerText = num;
}

function accept () {
    var num = document.querySelector("#mycon").innerText;
    num = parseInt(num) + 1;
    document.querySelector("#mycon").innerText = num;
}