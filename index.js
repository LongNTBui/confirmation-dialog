import { showDialog } from "./confirmation-dialog.js";

const myBtn = document.querySelector("#myButton");
myBtn.onclick = (event) => {
  showDialog("Hello!!!");
};

// listen for event (do this before you dispatch)
document.addEventListener("clickedYes", function (e) {
  console.log(e);
  document.querySelector("#myContent").innerHTML = "You have clicked Yes";
});

// listen for event (do this before you dispatch)
document.addEventListener("clickedCancel", function (e) {
  console.log(e);
  document.querySelector("#myContent").innerHTML = "You have clicked cancel";
});

// Listen for an event here with the payload and act accordingly
// For example if an, 'yes' event is emitted make an async called and display the result
