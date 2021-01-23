export class ConfirmationDialog {
  constructor(msg, onYesCallback, onCancelCallback) {
    this.msg = msg;
    this.onYesCallback = onYesCallback;
    this.onCancelCallback = onCancelCallback;
    this.confirmationDialogContainer = document.createElement("div");
    this.confirmationDialogContainer.className =
      "confirmationHiddenAtStartClass";
    this.confirmationDialogContainer.id = "confirmation-dialog";

    document.querySelector(".row").appendChild(this.confirmationDialogContainer);
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
    this.onYesCallback();
    this.hideDialog();
  };

  onClickedCancel = () => {
    this.onCancelCallback();
    this.hideDialog();
  };

  dispatchCustomerEvent(eventName) {
    // Emit an event with the payload
    const event = new CustomEvent(eventName, {
      detail: eventName,
    });
    document.dispatchEvent(event);
  }
}
