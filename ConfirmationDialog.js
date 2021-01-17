export class ConfirmationDialog {
  constructor(msg) {
    this.msg = msg;
    this.confirmationDialogContainer = document.createElement("div");
    this.confirmationDialogContainer.className =
      "confirmationHiddenAtStartClass";
    this.confirmationDialogContainer.id = "confirmation-dialog";

    document.body.appendChild(this.confirmationDialogContainer);
    // create the dialog and add to body
    document.querySelector("#confirmation-dialog").innerHTML =
      '<div class="confirmation-dialog">' +
      '<div class="confirmation-content"></div>' +
      '<div class="confirmation-controls">' +
      '<button id="yesBtn" class="btn yesBtn">Yes</button>' +
      '<button id="cancelBtn" class="btn cancelBtn">Cancel</button>' +
      "</div>" +
      "</div>";
  }

  showDialog() {
    this.confirmationDialogContainer.style.display = "flex";
    document.querySelector(".confirmation-content").innerHTML = this.msg;
    document.querySelector("#confirmation-dialog").focus();

    const yesBtn = document.querySelector("#yesBtn");
    yesBtn.onclick = () => {
      this.onClickedYes();
    };

    const cancelBtn = document.querySelector("#cancelBtn");
    cancelBtn.onclick = () => {
      this.onClickedCancel();
    };
  }

  hideDialog() {
    this.confirmationDialogContainer.style.display = "none";
  }

  onClickedYes = () => {
    // Emit an event with the payload
    const event = new CustomEvent("clickedYes", {
      detail: "You have clicked yes",
    });
    document.dispatchEvent(event);
    this.hideDialog();
  };

  onClickedCancel = () => {
    // Emit an event with the payload
    const event = new CustomEvent("clickedCancel", {
      detail: "You have clicked cancel",
    });
    document.dispatchEvent(event);
    this.hideDialog();
  };
}
