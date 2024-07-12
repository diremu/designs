let buttons = document.querySelectorAll("button");
let output = document.querySelector("#output");
let numbers = document.querySelectorAll(".digits");
let prevOutput = document.querySelector("#prevOutput");
let addArray = output.value.split("");
let prevArray = prevOutput.value.split('');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick);
}

function handleClick(e) {
  switch (e.target.dataset.value) {
    case "clear":
      output.value = "";
      addArray = [''];
      break;
    case "clearAll":
      output.value = "";
      prevOutput.value = "";
      prevArray = [''];
      addArray = [''];
      break;
    case "delete":
      let newArray = output.value.split("");
      newArray.pop();
      output.value = newArray.join("");
      break;
    case "digit":
      addArray.push(e.target.dataset.class);
      output.value = addArray.join('')
      break;
    case "operator":
        prevArray = [...prevArray, output.value, e.target.dataset.class ]
        prevOutput.value = prevArray.join(' ')
        output.value = ' '
        addArray = ['']
        break;
    default:
      alert("Use a proper command");
      break;
  }
}
