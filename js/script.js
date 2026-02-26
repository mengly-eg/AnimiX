// Show popup message for unauthenticated users trying to add status or rate
document.addEventListener('DOMContentLoaded', function() {
    // Handle statue/status selector
    const statusSelector = document.getElementById('statue');
    if (statusSelector) {
        statusSelector.addEventListener('change', function(e) {
            e.preventDefault();
            // Reset the select to default option
            this.selectedIndex = 0;
            // Show popup
            showLoginPopup();
        });
    }
});

// Function to show login popup
function showLoginPopup() {
    alert("you haven't log in yet");
}
