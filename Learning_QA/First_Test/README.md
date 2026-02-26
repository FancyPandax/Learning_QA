# QA_Learning_Login

## Goal
Get a small test working for Playwright to validate a basic login form with email and password inputs.

---

## What I did
- Created a **login form** using HTML, CSS, and JavaScript.  
- Added **client-side validation**:
  - Email must contain `@`.  
  - Password must be at least 6 characters.  
- Displayed **error messages** for invalid input and a **success message** for valid input.  
- Set up **Playwright** tests to:
  - Check invalid email/password error messages.  
  - Check that the success message appears for valid credentials.  
- Ran the form through a **local HTTP server** to make it accessible for Playwright.  

---

## Results
- Playwright successfully ran the test:
  - Invalid input triggered the correct error messages.  
  - Valid input triggered the success message `"Login Successful!"`.  
- Test passed in **Chromium** browser (can extend to Firefox and WebKit).  
- Learned how to append and check dynamic DOM elements with Playwright.  

---

## Learning
- How to **use Playwright to test client-side validation**.  
- Importance of running HTML pages via **HTTP server** for browser automation.  
- Playwright locators are very strict; **text must match exactly**.  
- Handling dynamic elements (like success/error messages) in tests.  
- Organizing tests in a `tests/` folder and using `npx playwright test`.  

---

## AI Ask: 5 Questions with Answers

1. **Q:** Why do we need a local HTTP server for Playwright tests?  
   **A:** Browsers block certain scripts and resources when using `file://` paths, so serving files over `http://localhost` ensures Playwright can load the page reliably.

2. **Q:** How does Playwright detect elements on the page?  
   **A:** Playwright uses **locators**, which can match elements by selectors, text content, or attributes. For example, `page.locator('p:has-text("Login Successful!")')`.

3. **Q:** Why did the success message fail initially in the test?  
   **A:** The JS text didn’t exactly match the test locator, and dynamic elements may need explicit waits or correct text to be detected as visible.

4. **Q:** What’s the difference between `toBeVisible()` and `toHaveText()` in Playwright?  
   **A:** `toBeVisible()` checks that an element exists and is visible; `toHaveText()` checks that the element contains exactly the expected text.

5. **Q:** What files should we ignore in Git for this project?  
   **A:** `node_modules/`, Playwright browsers (`playwright/.local-browsers/`), test reports (`test-results/`, `playwright-report/`), and OS files like `.DS_Store`.  