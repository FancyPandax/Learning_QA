# Test Case: Login Page
**Test Case Title:** Login Form Validation Test  
**Test Case Description:**  
This test case verifies that the login form correctly handles both invalid and valid inputs for email and password, displaying appropriate validation messages.

**Preconditions:**  
- The user is on the login page (URL: `http://localhost:3000`).
- The application is running locally and is accessible.

---

### Test Steps:

1. **Navigate to Login Page:**  
   - **Action:** Open the login page.  
   - **Expected Result:** The login page is loaded with fields for email, password, and a login button.

2. **Test Invalid Email and Password:**  
   - **Action:** Enter the invalid email `invalid-email` in the email field.
   - **Action:** Enter the password `123` in the password field.
   - **Action:** Click the login button.  
   - **Expected Result:** 
     - An error message stating "Please enter a valid email address." is displayed.
     - An error message stating "Password must be at least 6 characters long." is displayed.

3. **Test Valid Email and Password:**  
   - **Action:** Enter a valid email `test@example.com` in the email field.
   - **Action:** Enter the valid password `password123` in the password field.
   - **Action:** Click the login button.  
   - **Expected Result:** A success message stating "Login Successful!" is displayed.

---

### Test Data:

| Field    | Invalid Input      | Valid Input       |
|----------|--------------------|-------------------|
| Email    | invalid-email      | test@example.com  |
| Password | 123                | password123       |

---

### Expected Results:
- When invalid data is entered, the following error messages must be shown:
  - "Please enter a valid email address."
  - "Password must be at least 6 characters long."
- When valid data is entered, the success message "Login Successful!" should be displayed.

---

### Postconditions:
- If the test is successful, the user should be able to log in successfully.

---

### Pass/Fail Criteria:
- **Pass:** If all validation messages for both invalid and valid inputs are displayed as expected.
- **Fail:** If any validation message is missing or incorrect.

---

**Priority:** High  
**Automated:** Yes (This test case is automated using Playwright.)