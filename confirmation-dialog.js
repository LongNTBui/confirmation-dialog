export const showDialog = (msg) => {
  document.querySelector(".confirmationHiddenAtStartClass").style.display =
    "flex";
  document.querySelector(".confirmation-content").innerHTML = msg;
  document.querySelector("#confirmation-dialog").focus();
};

const onClickedYes = () => {
  // Emit an event with the payload
  const event = new CustomEvent("clickedYes", {
    msg: "You have clicked yes",
  });
  document.dispatchEvent(event); //Trigger/Dispatch the event
};

const onClickedCancel = () => {
  // event an event with the payload
  const event = new CustomEvent("clickedCancel", {
    msg: "You have clicked cancel",
  });
  document.dispatchEvent(event); //Trigger/Dispatch the event
};

const confirmationDialog = document.createElement("div");
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

const yesBtn = document.querySelector("#yesBtn");
yesBtn.onclick = () => {
  onClickedYes();
};

const cancelBtn = document.querySelector("#cancelBtn");
cancelBtn.onclick = () => {
  onClickedCancel();
};
