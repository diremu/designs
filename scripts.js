let buttons = document.querySelectorAll("button");
let output = document.querySelector("#output");
let numbers = document.querySelectorAll(".digits");
let prevOutput = document.querySelector("#prevOutput")
let addArray = [];

for (let i=0; i < buttons.length;i++) {
    buttons[i].addEventListener("click", handleClick);
}

function handleClick(e) {
    switch (e.target.dataset.value) {
        case "clear":
            output.value = '';
            break;
        case "clearAll":
            output.value = '';
            prevOutput.value = '';
            break;
        case "delete":
            let newArray = output.value.split('');
            newArray.pop()
            output.value = newArray.join('')
            break;
        default:
            alert('Use a proper command');
            break;
    }
}