// script.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var isValid = true;
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var eventSelection = document.getElementById('eventSelection').value;

    // Reset previous validation messages
    var validationMessages = document.querySelectorAll('.validation-message');
    validationMessages.forEach(function(message) {
        message.remove();
    });

    // Custom validation logic
    if (!fullName) {
        isValid = false;
        showError('fullName', 'Please enter your full name.');
    }
    if (!email) {
        isValid = false;
        showError('email', 'Please enter your email.');
    } else if (!validateEmail(email)) {
        isValid = false;
        showError('email', 'Please enter a valid email address.');
    }
    if (!address) {
        isValid = false;
        showError('address', 'Please enter your address.');
    }
    if (!phoneNumber) {
        isValid = false;
        showError('phoneNumber', 'Please enter your phone number.');
    }
    if (!eventSelection) {
        isValid = false;
        showError('eventSelection', 'Please select an event.');
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function showError(inputId, message) {
    var inputElement = document.getElementById(inputId);
    var errorElement = document.createElement('div');
    errorElement.className = 'validation-message text-danger';
    errorElement.innerText = message;
    inputElement.parentNode.appendChild(errorElement);
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}