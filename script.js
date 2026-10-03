function sendMessage() {
    let name = document.getElementById("name").value;

    alert("Thank you, " + name + "!");
}

function changeMessage() {
    document.getElementById("message").innerHTML = "Welcome to my contact form!";

}

function changeBackground() {
    document.body.style.backgroundColor = "lightblue";
}
function hidePhoto() {
    document.getElementById("myPhoto").style.display = "none";
}

function showPhoto() {
    document.getElementById("myPhoto").style.display = "block";
}
function changeTitleColor() {
    document.getElementById("title").style.color = "red";
}
function updateClock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    document.getElementById("clock").innerHTML =
        hours + ":" + minutes + ":" + seconds;
}

setInterval(updateClock, 1000);
updateClock();
}