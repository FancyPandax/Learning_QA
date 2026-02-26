# QA Learning Login Form

## Description

This project is a simple login form built with **HTML** and **JavaScript**. The form allows the user to enter an **email** and **password**, validates the inputs, and dynamically displays error messages if the input is invalid. If both fields are valid, a success message is shown.

### Key Features:
- **Email and Password Validation**: Basic validation checks for valid email format and password length.
- **Dynamic Error Messages**: Displays specific error messages for invalid inputs.
- **Field Highlighting**: Invalid fields are highlighted with a red border for better user experience.
- **Real-Time Error Clearing**: As the user starts typing, error messages are cleared dynamically once the input becomes valid.
  
### Tech Stack:
- **HTML**: Structure of the form.
- **JavaScript**: Logic for form validation, dynamic error display, and DOM manipulation.

---

## What I Learned

### 1. **HTML Form Elements**:
   - Learned how to create basic form elements such as **input fields** (`email`, `password`) and **buttons** for user interaction.
   - Used the **`<form>`** tag and **`<input>`** fields with attributes like `type="email"` and `type="password"`.

### 2. **JavaScript DOM Manipulation**:
   - Learned how to select DOM elements using **`document.getElementById()`**.
   - Created dynamic **error message elements** and appended them to the DOM.
   - Used **`style`** properties to manipulate the appearance of elements, such as adding a red border for invalid fields.

### 3. **Event Handling**:
   - Implemented **event listeners** for user interactions like **button clicks** and **input changes**.
   - Used **`event.preventDefault()`** to prevent form submission and page reload when the button is clicked.
   - Added **`input` event listeners** to allow real-time validation feedback.

### 4. **Form Validation**:
   - Built **validation functions** to check if the email contains an `@` symbol and if the password is at least 6 characters long.
   - Learned to **dynamically show and hide error messages** based on the validity of the form fields.
   - Used **conditional rendering** (showing success and failure messages) based on the form’s validation results.


---

## Future Improvements
- **Regex Email Validation**: Implement more robust email validation using regular expressions.
- **CSS Enhancements**: Add CSS animations for showing and hiding error messages for a smoother experience.
- **API Integration**: Simulate a real-world login by sending the form data to a backend API using **`fetch()`**.

## Having AI ask me questions about the project

1. What is the purpose of the event.preventDefault() method in the form validation process?

Answer: **This prevents the default behaviour of the event from happening we can use this to validate the inputs before submitting the form**

2. How does the input event listener work in JavaScript, and how did you use it in this project?

Answer:**Triggered when a user changes a field listens for an event**

3. What is the role of the style property in JavaScript, and how did you use it to highlight invalid fields in your form?

Answer:**Allows us to change the style of an element dynamically**

4. How did you dynamically add error messages below the email and password input fields in your form?

Answer: **We made a variable and changed it's value dynamically based on which error we get**

5. What are the advantages of validating form inputs dynamically (as the user types), instead of just when the form is submitted?

Answer:**Makes a much better user experince and makes it so they submit less errors**

