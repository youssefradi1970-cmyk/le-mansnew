// Wait for the form to exist before adding the listener
document.getElementById('trackForm').addEventListener('submit', function(e) {
    // 1. Prevent the page from refreshing (standard for modern web apps)
    e.preventDefault();
    
    // 2. Get the values from the input boxes
    const driver = document.getElementById('driverName').value;
    const license = document.getElementById('license').value;
    const output = document.getElementById('output');
    
    // 3. Simple Validation: Check if fields are empty
    if (driver === "" || license === "") {
        output.innerHTML = "Error: Please enter both Name and License.";
        output.style.color = "yellow";
        return;
    }

    // 4. Success Message: This is what Selenium will look for
    output.innerHTML = "Engine Started for " + driver + " (ID: " + license + ")! Preparing for Night Sprint...";
    output.style.color = "#ff3e3e"; // Racing red color
    
    // 5. Log to console for debugging (good practice in software testing)
    console.log("Reservation successful for: " + driver);
});
