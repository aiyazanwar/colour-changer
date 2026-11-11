let colors = ["red", "orange", "yellow", "green", "skyblue", "blue", "purple", "pink"];

let colorName = document.getElementById("color-name");
let changeBtn = document.getElementById("change-btn");


changeBtn.onclick = function() {
    
    let randomNumber = Math.floor(Math.random() * colors.length);

    let newColor = colors[randomNumber];

    document.body.style.backgroundColor = newColor;

    colorName.innerHTML = newColor;
}