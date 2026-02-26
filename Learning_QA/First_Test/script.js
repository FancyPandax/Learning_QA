
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("button");


const emailErrorMessage = document.createElement('p');
const passwordErrorMessage = document.createElement('p');
const Successmessage = document.createElement('p');
Successmessage.style.color = 'green';
emailErrorMessage.style.color = 'red';
passwordErrorMessage.style.color = 'red';
emailInput.parentElement.appendChild(emailErrorMessage);  
passwordInput.parentElement.appendChild(passwordErrorMessage);  
loginButton.parentElement.appendChild(Successmessage);


function isEmailValid(email) {
    return email.includes('@'); 
}

function isPasswordValid(password) {
    return password.length >= 6; 
}


function highlightInvalidField(inputElement) {
    inputElement.style.border = '2px solid red'; 
}


function removeHighlight(inputElement) {
    inputElement.style.border = ''; 
}


loginButton.addEventListener("click", function(event) {
    
    event.preventDefault();

    
    const email = emailInput.value;
    const password = passwordInput.value;

    
    emailErrorMessage.textContent = "";
    passwordErrorMessage.textContent = "";

    
    removeHighlight(emailInput);
    removeHighlight(passwordInput);
    
    const emailIsValid = isEmailValid(email);
    const passwordIsValid = isPasswordValid(password);

    
    if (emailIsValid && passwordIsValid) {
        Successmessage.textContent = "Login Successful!";
    } else {
        
        if (!emailIsValid) {
            emailErrorMessage.textContent = "Please enter a valid email address.";
            highlightInvalidField(emailInput); 
        }

        if (!passwordIsValid) {
            passwordErrorMessage.textContent = "Password must be at least 6 characters long.";
            highlightInvalidField(passwordInput); 
        }
    }
});