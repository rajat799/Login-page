// Selecting form elements
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('show-password');
// Function to validate the form
function validateForm(event) {
    event.preventDefault(); // Prevents the default form submission

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Clear previous messages
    clearMessages();

    // Basic validation
    if (!username) {
        displayMessage('Username is required.', 'error');
        usernameInput.focus();
        return;
    }

    if (!password) {
        displayMessage('Password is required.', 'error');
        passwordInput.focus();
        return;
    }

    // Here you could add further checks, such as password length or format

    // Simulate successful login (for demo purposes)
    displayMessage('Login successful!', 'success');
}

// Function to display messages
function displayMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`; // Adds classes based on the type (error/success)
    messageDiv.textContent = message;
    loginForm.prepend(messageDiv); // Adds message at the top of the form

    // Remove message after a few seconds
    setTimeout(() => messageDiv.remove(), 3000);
}

// Function to clear previous messages
function clearMessages() {
    const messages = document.querySelectorAll('.message');
    messages.forEach(msg => msg.remove());
}

// Add event listener to the form
loginForm.addEventListener('submit', validateForm);



// Event listener to toggle password visibility
showPasswordCheckbox.addEventListener('change', function() {
    // Toggle the type attribute
    passwordInput.type = this.checked ? 'text' : 'password';
});
