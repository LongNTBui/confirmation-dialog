#Introduction

ConfirmationDialog class constructor takes in "message" as an argument.
The message will be displayed as the dialog title.

##Usage
Create an instance of ConfirmationDialog passing in the message title you want

const confirmationDialog = new ConfirmationDialog("Are you sure you want to proceed?");

##Show the dialog by calling showDialog()
Example: upon clicking a button show the dialog
myBtn.onclick = (e) => {
    confirmationDialog.showDialog();
}

##Event "clickedYes" will be dispatched when "Yes" btn is clicked.
##Event "clickedCancel" will be dispatched when "Cancel" btn is clicked.

##Subscribe to those events and act accordingly
document.addEventListener("clickedYes", function (e) {
document.querySelector("#myContent").innerHTML = "You have clicked Yes";
});

document.addEventListener("clickedCancel", function (e) {
document.querySelector("#myContent").innerHTML = "You have clicked cancel";
});
