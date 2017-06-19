$(document).ready(function() {

    $('#send-email').on('click', function(event) {
        event.preventDefault();

        var name = $('#form-name').val().trim();
        var email = $('#form-email').val().trim();
        var message = $('#form-message').val().trim();

        var inquirer = {
            name: name,
            email: email,
            message: message
        }
        console.log("Before obj", inquirer);

        $.post('/mailer/sendmail', inquirer).done(function(data) {
            console.log(data);
        });
        console.log("yoyo");
    });
});
