
/* MUST ONLINE APPLICATION PORTAL*/

document.addEventListener("DOMContentLoaded", () => {

    // Automatically update footer year
    const yearElement = document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Display feedback messages
    function showMessage(element, message, type) {
        if (!element) return;

        element.textContent = message;
        element.className = `form-message visible ${type}`;
    }

    // Clear feedback messages
    function clearMessage(element) {
        if (!element) return;

        element.textContent = "";
        element.className = "form-message";
    }

    // APPLICATION FORM
    const applicationForm = document.getElementById("application-form");

    if (applicationForm) {

        const message = document.getElementById("application-message");

        applicationForm.addEventListener("submit", (event) => {

            event.preventDefault();
            clearMessage(message);

            // Use built-in HTML validation
            if (!applicationForm.reportValidity()) {
                return;
            }

            const fullName = document
                .getElementById("fullName")
                .value.trim();

            const email = document
                .getElementById("email")
                .value.trim();

            const programme = document
                .getElementById("programme")
                .value.trim();

            const confirmed = document
                .getElementById("confirmDetails")
                .checked;

            if (fullName.length < 3) {
                showMessage(
                    message,
                    "Please enter your full name correctly.",
                    "error"
                );
                return;
            }

            if (!email) {
                showMessage(
                    message,
                    "Please provide your email address.",
                    "error"
                );
                return;
            }

            if (programme.length < 2) {
                showMessage(
                    message,
                    "Please enter your preferred programme.",
                    "error"
                );
                return;
            }

            if (!confirmed) {
                showMessage(
                    message,
                    "Please confirm that your information is accurate.",
                    "error"
                );
                return;
            }

            showMessage(
                message,
                "Your information passed the frontend checks. This is a demonstration: no application has been sent to MUST.",
                "success"
            );

            console.log("Application form validated:", {
                fullName,
                email,
                programme
            });

        });
    }


    // REGISTRATION FORM
    const registrationForm = document.getElementById("registration-form");

    if (registrationForm) {

        const message = document.getElementById("registration-message");

        const passwordInput = document.getElementById("password");

        const confirmPasswordInput = document.getElementById("confirm-password");

        // Clear password mismatch feedback while editing
        confirmPasswordInput.addEventListener("input", () => {
            clearMessage(message);
        });

        registrationForm.addEventListener("submit", (event) => {

            event.preventDefault();
            clearMessage(message);

            // Check browser form validation
            if (!registrationForm.reportValidity()) {
                return;
            }

            const fullName = document
                .getElementById("fullname")
                .value.trim();

            const email = document
                .getElementById("email")
                .value.trim();

            const studentNumber = document
                .getElementById("studentnumber")
                .value.trim();

            const password = passwordInput.value;

            const confirmPassword = confirmPasswordInput.value;

            const termsAccepted = document
                .getElementById("terms")
                .checked;

            // Full name validation
            if (fullName.length < 3) {
                showMessage(
                    message,
                    "Please enter your full name correctly.",
                    "error"
                );
                return;
            }

            // Password length validation
            if (password.length < 8) {
                showMessage(
                    message,
                    "Your password must contain at least 8 characters.",
                    "error"
                );
                return;
            }

            // Password matching validation
            if (password !== confirmPassword) {
                showMessage(
                    message,
                    "Your passwords do not match. Please try again.",
                    "error"
                );

                confirmPasswordInput.focus();
                return;
            }

            // Confirmation checkbox
            if (!termsAccepted) {
                showMessage(
                    message,
                    "Please confirm that your information is accurate.",
                    "error"
                );
                return;
            }

            // Frontend demonstration only
            showMessage(
                message,
                "Registration details passed frontend validation. No account has been created because a backend is not connected.",
                "success"
            );

            console.log("Registration form validated:", {
                fullName,
                email,
                studentNumber
            });

            // Do not store or log passwords.
        });
    }

});
