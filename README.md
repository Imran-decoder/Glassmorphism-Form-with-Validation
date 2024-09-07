# Glassmorphism Form with Validation

This project demonstrates a **Glassmorphism-themed form** with **client-side validation** using HTML, CSS, and JavaScript. The form includes fields for user details such as Name, Email, Phone Number, and Password, with validation rules to ensure data correctness before submission.

##VIEW
<img width="1470" alt="Screenshot 2024-09-07 at 11 54 16 PM" src="https://github.com/user-attachments/assets/15d77a1d-a46e-4de5-941e-7551e0ceae42">

## Features

- **Responsive Design**: The form layout adjusts based on the screen size and maintains a clean, centered appearance.
- **Glassmorphism Style**: The form has a semi-transparent, frosted-glass effect that looks modern and visually appealing.
- **Input Validation**: Basic validation for each field is done using JavaScript to ensure proper form submission.
- **Interactive Effects**: Input fields and buttons include hover and focus animations for a better user experience.
- **User-Friendly Interface**: The design ensures ease of use, making it intuitive for users to fill in their details.

## Technologies Used

- **HTML5**: Markup language used to create the form structure and layout.
- **CSS3**: Styling the form with glassmorphism effects and creating responsive, animated components.
- **JavaScript**: Provides validation logic to handle form inputs and ensures the form meets basic requirements before submission.

## Project Structure

```
📁 Project Root
│
├── index.html         # Main HTML structure
├── index.css          # CSS for styling and layout
└── exp6.js            # JavaScript for form validation
```

### File Descriptions

1. **`index.html`**:
    - The main structure of the form with input fields for Name, Email, Phone Number, and Password.
    - Includes a submit button, "Remember Me" checkbox, and links for "Forgot Password" and "Register".
    - The form uses the `onsubmit` event to trigger JavaScript validation before submission.

2. **`index.css`**:
    - Implements a glassmorphism effect with a transparent and blurred background.
    - The form fields are styled to float labels when focused or filled, using custom animations.
    - Ensures responsiveness across different screen sizes, including mobile, by utilizing flexbox layout properties.

3. **`exp6.js`**:
    - Handles basic form validation logic.
    - Validates that:
        - The Name field is not empty.
        - The Password is at least 6 characters long.
        - The Phone Number is at least 9 digits long.
    - Alerts the user if validation fails, preventing form submission until all conditions are met.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/glassmorphism-form.git
   ```

2. **Open the project in a code editor** and modify the form if necessary:
   - Customize input fields and labels as needed.
   - Update the JavaScript validation rules if different requirements are needed.

3. **Run the project**:
   - Simply open `index.html` in any modern web browser.
   - The form will load and be ready to use.

## Validation Logic

The form validation is performed by the `formvalidation()` function in `form.js`. The following conditions are checked before form submission:

1. **Name**: This field cannot be empty. If left blank, an alert will be shown.
2. **Password**: The password must be at least 6 characters long.
3. **Phone Number**: The number must be at least 9 digits long. If it doesn’t meet this requirement, an alert is shown.

If all conditions are satisfied, the form is considered valid and can be submitted.



## Future Enhancements

- **Enhanced Validation**: Add email format validation, or integrate with a third-party validation library for more comprehensive checks.
- **Backend Integration**: Connect the form to a backend (e.g., using Node.js or PHP) for user registration and data storage.
- **Accessibility**: Improve accessibility by adding ARIA attributes and ensuring better keyboard navigation support.

## License

This project is open-source and available under the MIT License. Feel free to use, modify, and distribute it as needed.
