let buttons = document.querySelectorAll("button");
let output = document.querySelector("#output");
let numbers = document.querySelectorAll(".digits");
let prevOutput = document.querySelector("#prevOutput");
// the addArray is for adding numbers to the prevoutput
let addArray = output.value.split("");
let prevArray = prevOutput.value.split("");
let result;
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick);
}

function calculateAvalue(value) {
  // it should first check if the prevoutput is empty
  //if it is it should just push the current output and the operator to the output
  //if it isn't, it will calculate the two values based on the dataset.class
  if (prevOutput.value === "") {
    prevArray = [output.value," ", value.class];
    prevOutput.value = prevArray.join('');
    output.value = ""
    addArray = ['']
  } else {
    switch (value.class) {
      case "x":
        console.log(prevArray)
        // pop the array[2] so that subsequent clicks don't affect it
        // output.value = result;
        // prevOutput.value = "";
    }
  }
}

// another way to go about this is to add the operator surrounded by space to the output
//when it is time to calculate, you then replace the operators and convert them to numbers

function handleClick(e) {
  switch (e.target.dataset.value) {
    case "clear":
      // clears the output value
      output.value = "";
      // empties the add array
      addArray = [""];
      break;
    case "clearAll":
      output.value = "";
      prevOutput.value = "";
      prevArray = [""];
      addArray = [""];
      break;
    case "delete":
      let newArray = output.value.split("");
      newArray.pop();
      output.value = newArray.join("");
      break;
    case "digit":
      addArray.push(e.target.dataset.class);
      output.value = addArray.join("");
      break;
    case "operator":
      calculateAvalue(e.target.dataset);
      break;
    default:
      alert("Use a proper command");
      break;
  }
}
