let buttons = document.querySelectorAll("button");
let output = document.querySelector("#output");
let numbers = document.querySelectorAll(".digits")

for (let i=0; i < buttons.length;i++) {
    buttons[i].addEventListener("click", handleClick);
}

function handleClick(e) {
    switch (e.target.dataset.value) {
        case "clear":
            output.value = '';
            break;
        case "clearAll":
            output = ""
            break;
        case "delete":
            let outputString = output.split('');
            outputString.pop()
            output = outputString.join('')
            break;
        default:
            alert('Use a proper command');
            break;
    }
}