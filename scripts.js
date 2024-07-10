let buttons = document.querySelectorAll("button");
let output = document.querySelector("#output").value;

for (let i=0; i < buttons.length;i++) {
    buttons[i].addEventListener("click", handleClick);
}

function handleClick(e) {
    
}