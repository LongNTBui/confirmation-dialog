import { ConfirmationDialog } from "./ConfirmationDialog.js";

const confirmationDialog = new ConfirmationDialog(
  "Are you sure you want to continue?"
);

const myBtn = document.querySelector("#myButton");
myBtn.onclick = (event) => {
  document.querySelector("#myContent").innerHTML = "";
  confirmationDialog.showDialog();
};

// Listen for an event here with the payload and act accordingly
// For example if an, 'yes' event is emitted make an async called and display the result
document.addEventListener("clickedYes", function (e) {
  document.querySelector("#myContent").innerHTML = "You have clicked Yes";
});

document.addEventListener("clickedCancel", function (e) {
  document.querySelector("#myContent").innerHTML = "You have clicked cancel";
});
