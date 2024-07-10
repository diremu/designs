let buttons = document.querySelectorAll("button");
let output = document.querySelector("#output").value;
let numbers = document.querySelectorAll(".digits")

for (let i=0; i < buttons.length;i++) {
    buttons[i].addEventListener("click", handleClick);
}

function handleClick(e) {
    switch (e.target.dataset.value) {
        case "clear":
            output = ""
            break;
        case "clearAll":
            output = ""
            break;
        case "delete":
            let outputString = output.split('');
            outputString.pop()
            output = outputString.join('')
            break;
        case "/":
    }
}