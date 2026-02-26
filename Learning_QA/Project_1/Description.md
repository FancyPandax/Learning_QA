# Day 1 

## Goal
**Build a simple login for using html and css be able to use devtools and understand what things look like**

### What I did Learn

- How to properly structure a login form using semantic HTML.
- The purpose of `label` and how the `for` attribute connects it to an input.
- The difference between `id`, `class`, `name`, and `data-testid`.
- Why `data-testid` is more stable for automation than styling-based selectors.
- How form submission works by default.
- How form inputs are converted into key-value pairs when submitted.
- How to inspect form elements and network behavior using Chrome DevTools.

I also observed that when submitting the form, the browser appends input values to the URL because the default method is `GET`. This helped me understand how data is transmitted.

## QA Perspective (What This Means for Automation)

- Class-based selectors are unstable and can break tests if styling changes.
- `data-testid` creates a stronger contract between developers and automation.
- Inputs without a `name` attribute are not submitted with the form.
- A `button` inside a form defaults to `type="submit"` if not specified.
- Understanding default browser behavior is critical for debugging failing tests.

### Resources I Used For Study 
https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms
https://developer.chrome.com/docs/devtools/overview
https://www.youtube.com/watch?v=gTVpBbFWry8
https://www.youtube.com/watch?v=fNcJuPIZ2WE



## I Had OpenAI ask me 5 questions about my project a Jr QA Dev could answer here they are and my answers

### Question 1: What is the purpose of the for attribute in a <label> tag?

To associate a label with a specific form element

### Question 2: Which selector is generally more stable for automation?

A) .btn-primary
B) #submit-btn
C) [data-testid="submit-button"]

**I did not know the answer**

In summary, attributes specifically designed for testing, like data-testid, provide the strongest contract between developers and test automation, ensuring the selector remains valid even if the element's appearance or structure changes 

**In my own words** 
data-testid because it makes sure the selector remains valid even if the elements experience changes

### Question 3: What does the name attribute typically affect?

This determines how form data is sent to the server - there is no server for this project yet.
It is the Key in a Key-Value pair 

### Question 4: Changing a CSS class name can break an automation test that relies on that class.

True because the class you are trying to select no longer exists and can't be found this makes classes unstable
This is why we would use **"data-testid"** 

### Question 5: If a button has type="submit" inside a form, what happens when it’s clicked (by default)?

Collect all inputs inside the form that have a name attribute
Package them as key-value pairs
Send them to the URL in the form’s action attribute
Reload or navigate the page
When you put the email and password in right now you can see them in the URL 












