// tests/login.test.js
const { test, expect } = require('@playwright/test');

test('login form validation', async ({ page }) => {
  // Navigate to your HTML page (make sure it's running on a local server or use a local path)
  await page.goto('http://localhost:3000'); // Adjust the URL to where your HTML is running

  // Test invalid email and password
  await page.fill('input#email', 'invalid@-email');
  await page.fill('input#password', '123456');
  await page.click('button#button');

  // Assert error messages
  await expect(page.locator('p:has-text("Please enter a valid email address.")')).toBeVisible();
  await expect(page.locator('p:has-text("Password must be at least 6 characters long.")')).toBeVisible();

  // Test valid email and password
  await page.fill('input#email', 'testcom');
  await page.fill('input#password', 'pa');
  await page.click('button#button');

  // Assert success message
  await expect(page.locator('p:has-text("Login Successful!")')).toBeVisible();
});