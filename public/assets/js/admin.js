/**
 * Created by juancarlosnavarrete on 5/10/17.
 */

$( document ).ready(function() {
    console.log( "ready!" );
    var signUpButton = $(".btn-primary");
    var usernameInput = $("input#name-input");
    var numInput = $("input#num-input");
    var priceInput = $("input#price-input");
    var descriptionInput = $("input#description-input");

    usernameInput.bind('input propertychange', function() {
        if (usernameInput.val().trim().length < 6 ) {
            $("#name-form").removeClass("has-success");
            $("#name-form").addClass("has-error");
            $("#username-feedback").text("username must be at least 6 characters long");
        } else {
            $("#name-form").removeClass("has-error");
            $("#name-form").addClass("has-success");
            $("#username-feedback").text("Username valid!");
        }

    });

    numInput.bind('input propertychange', function() {
        if (numInput.val().trim().length < 1) {
            $("#num-form").removeClass("has-success");
            $("#num-form").addClass("has-error");
            $("#num-feedback").text("Number must not be left empthy");
        } else {
            $("#num-form").removeClass("has-error");
            $("#num-form").addClass("has-success");
            $("#num-feedback").text("valid number");
        }

    });

    priceRegEx =/^\d{0,8}(\.\d{2})?$/;
    priceInput.bind('input propertychange', function() {
        if (!priceRegEx.test($(this).val())) {
            $("#price-form").removeClass("has-success");
            $("#price-form").addClass("has-error");
            $("#price-feedback").text("Enter price with decimal ie 187.34");
        } else {
            $("#price-form").removeClass("has-error");
            $("#price-form").addClass("has-success");
            $("#price-feedback").text("valid price");
        }
    });

    descriptionInput.bind('input propertychange', function() {
        if (descriptionInput.val().trim().length > 140) {
            $("#description-form").removeClass("has-success");
            $("#description-form").addClass("has-error");

        } else {
            $("#description-form").removeClass("has-error");
            $("#description-form").addClass("has-success");

        }
    });



    $(".home").click(function(){
       $(".allItems").addClass('hide');
        $(".addItem").addClass('hide');
        $(".adminActive").addClass('hide');
        $(".adminPending").addClass('hide');
        $(".main").removeClass('hide');

    });
    $(".items").click(function(){
        $(".main").addClass('hide');
        $(".addItem").addClass('hide');
        $(".adminActive").addClass('hide');
        $(".adminPending").addClass('hide');
        $(".allItems").removeClass('hide');
    });
    $(".add-Items").click(function(){
        $(".main").addClass('hide');
        $(".allItems").addClass('hide');
        $(".adminActive").addClass('hide');
        $(".adminPending").addClass('hide');
        $(".addItem").removeClass('hide');
    });
    $(".active-clients").click(function(){
        $(".main").addClass('hide');
        $(".allItems").addClass('hide');
        $(".addItem").addClass('hide');
        $(".adminPending").addClass('hide');
        $(".adminActive").removeClass('hide');
    });
    $(".pending-clients").click(function(){
        $(".main").addClass('hide');
        $(".allItems").addClass('hide');
        $(".addItem").addClass('hide');
        $(".adminActive").addClass('hide');
        $(".adminPending").removeClass('hide');
    });
});


function previewFile(){
    var preview = document.querySelector('img'); //selects the query named img
    var file    = document.querySelector('input[type=file]').files[0]; //sames as here
    var reader  = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        preview.src = "";
    }
}

previewFile();
