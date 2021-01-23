import { ConfirmationDialog } from "./ConfirmationDialog.js";

const confirmationDialog = new ConfirmationDialog(
  "Are you sure you want to continue?", function() {
      document.querySelector("#myContent").innerHTML = "You have clicked yes";
    }, function() {
      document.querySelector("#myContent").innerHTML = "You have clicked cancel";
    }
);

const myBtn = document.querySelector("#myButton");
myBtn.onclick = (event) => {
  document.querySelector("#myContent").innerHTML = "";
  confirmationDialog.showDialog();
};
