$(document).ready(function () {

    $("#contactForm").submit(function (e) {
        e.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let message = $("#message").val().trim();

        if (name === "" || email === "" || message === "") {
            $("#formMessage").css("color", "red");
            $("#formMessage").text("Please fill in all fields.");
        } else {
            $("#formMessage").css("color", "green");
            $("#formMessage").text("Message sent successfully!");
            $("#contactForm")[0].reset();
        }
    });

});
