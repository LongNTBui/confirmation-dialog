import {
  showDialog,
  onClickedYes,
  onClickedCancel,
} from "./confirmation-dialog.js";

const myBtn = document.querySelector("#myButton");
myBtn.onclick = (event) => {
  showDialog("Hello!!!");
};

// Listen for an event here with the payload and act accordingly
// For example if an, 'yes' event is emitted make an async called and display the result
