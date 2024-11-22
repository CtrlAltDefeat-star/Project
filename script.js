// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0; // Counter for number of attempts

// Select DOM elements
const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const resetGame = document.getElementById('resetGame');
const message = document.getElementById('message');
const attemptsDisplay = document.createElement('p'); // Element to display attempts
document.querySelector('.container').appendChild(attemptsDisplay); // Add to the container

// Reset the message when user starts typing a new guess
guessInput.addEventListener('input', () => {
    message.textContent = '';
    message.style.color = 'black';
});

// Event listener for "Submit Guess"
submitGuess.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        message.style.color = 'red';
        setTimeout(() => {
            message.textContent = ''; // Clear message after 3 seconds
        }, 3000);
        return;
    }

    attempts++; // Increment attempts count
    attemptsDisplay.textContent = `Attempts: ${attempts}`; // Update attempts display

    if (userGuess === randomNumber) {
        message.textContent = `🎉 Congratulations! ${userGuess} is correct!`;
        message.style.color = 'green';
        
        // Disable input and submit button after a correct guess
        guessInput.disabled = true;
        submitGuess.disabled = true;

        // Clear the success message after 3 seconds
        setTimeout(() => {
            message.textContent = ''; // Clear message
        }, 3000);

    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
        message.style.color = 'red';
        
        // Clear message after 3 seconds
        setTimeout(() => {
            message.textContent = ''; // Clear message
        }, 3000);

    } else {
        message.textContent = 'Too high! Try again.';
        message.style.color = 'red';
        
        // Clear message after 3 seconds
        setTimeout(() => {
            message.textContent = ''; // Clear message
        }, 3000);
    }
});

// Event listener for "Reset Game"
resetGame.addEventListener('click', resetGameHandler);

// Function to reset the game
function resetGameHandler() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0; // Reset attempts
    attemptsDisplay.textContent = `Attempts: ${attempts}`; // Reset attempts display
    guessInput.value = '';
    guessInput.disabled = false;
    submitGuess.disabled = false;
    message.textContent = 'Game reset! Guess the new number.';
    message.style.color = 'black';
    
    // Clear message after 3 seconds
    setTimeout(() => {
        message.textContent = ''; // Clear message
    }, 3000);
}