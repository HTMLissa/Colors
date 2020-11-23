let color = "";
let square = document.querySelector(".square");
let startButton = document.querySelector("#start");
let colorDisplay = document.getElementById("colorDisplay");
let p = document.querySelector("p");
let pComment = [
    "How about some ",
    "Maybe you'd like a little bit of ",
    "You might also enjoy some ",
    "You should check out ",
    "Have a taste of ",
    "Your recommendation for the day: ",
    "Try ",
]

square.style.backgroundColor = randomColor();

startButton.addEventListener("click", function () {
    changeColor();
    startButton.textContent = "Do it again!";
});

function changeColor() {
    square.style.backgroundColor = randomColor();
    p.textContent = pComment[pickComment()];
    colorDisplay.textContent = randomColor();
}

function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function pickComment() {
    return Math.floor(Math.random() * pComment.length);
}

