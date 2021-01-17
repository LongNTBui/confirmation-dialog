const confirmationDialog = document.createElement('div');
confirmationDialog.className = 'confirmationHiddenAtStartClass';
confirmationDialog.id = 'confirmation-dialog';

document.body.appendChild(confirmationDialog);
// create the dialog and add to body
document.getElementById('confirmation-dialog').innerHTML =
    '<div class="confirmation-dialog">' +
        '<div class="confirmation-content"></div>' +
        '<div class="confirmation-controls">' +

        '</div>' +
    '</div>';


