let confirmationDialog = document.createElement("div");
confirmationDialog.className = "confirmationHiddenAtStartClass";
confirmationDialog.id = "confirmation-dialog";

document.body.appendChild(confirmationDialog);
// create the dialog and add to body
document.querySelector("#confirmation-dialog").innerHTML =
  '<div class="confirmation-dialog">' +
  '<div class="confirmation-content"></div>' +
  '<div class="confirmation-controls">' +
  '<button id="yesBtn" class="yesBtn">Yes</button>' +
  '<button id="cancelBtn" class="cancelBtn">Cancel</button>' +
  "</div>" +
  "</div>";

function showDialog(msg) {
  document.querySelector(".confirmationHiddenAtStartClass").style.display =
    "flex";
  document.querySelector(".confirmation-content").innerHTML = msg;
  document.querySelector("#confirmation-dialog").focus();
}
