// Grab the dodger element and store it in a variable
const dodger = document.getElementById("dodger");
const game = document.getElementById("game");
const gameWidth = 400; // Width of the game field

// Function to move dodger left
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", ""); // Get current left position
    const left = parseInt(leftNumbers, 10); // Convert to an integer

    if (left > 0) { // Prevents dodger from moving off the left edge
        dodger.style.left = `${left - 1}px`; // Move left by 1 pixel
    }
}

// Function to move dodger right
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", ""); // Get current left position
    const left = parseInt(leftNumbers, 10); // Convert to an integer

    // Prevents dodger from moving off the right edge
    if (left < gameWidth - dodger.offsetWidth) {
        dodger.style.left = `${left + 1}px`; // Move right by 1 pixel
    }
}

// Event listener for keydown events
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft(); // Call moveDodgerLeft on left arrow key press
    }
    if (event.key === "ArrowRight") {
        moveDodgerRight(); // Call moveDodgerRight on right arrow key press
    }
});

