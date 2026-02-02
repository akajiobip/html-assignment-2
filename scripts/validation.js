$(document).ready(function () {

    $("#contactForm").on("submit", function (e) {
        e.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let message = $("#message").val().trim();

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Default error color
        $("#formMessage").css("color", "red");

        // Name validation (min 3 characters)
        if (name === "") {
            $("#formMessage").text("Name is required.");
            return;
        }

        if (name.length < 3) {
            $("#formMessage").text("Name must be at least 3 characters long.");
            return;
        }

        // Email validation
        if (email === "") {
            $("#formMessage").text("Email is required.");
            return;
        }

        if (!emailPattern.test(email)) {
            $("#formMessage").text("Please enter a valid email address.");
            return;
        }

        // Message validation (min 10 characters)
        if (message === "") {
            $("#formMessage").text("Message is required.");
            return;
        }

        if (message.length < 10) {
            $("#formMessage").text("Message must be at least 10 characters long.");
            return;
        }

        // Success
        $("#formMessage").css("color", "green");
        $("#formMessage").text("Message sent successfully!");
        $("#contactForm")[0].reset();
    });

});
