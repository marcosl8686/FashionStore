$(document).ready(function() {
  console.log("something");
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var firstNameInput = $("#firstName-input");
  var lastNameInput = $("#lastName-input");
  var companyNameInput = $("#companyName-input");
  var addressInput= $("#address-input");
  var phoneInput = $("#phone-input");
  var taxIdInput = $("#taxId-input");
  var suiteInput = $("#suite-input");
  var cityInput = $("#city-input");
  var countryInput = $("#country-input");
  var zipInput = $("#zip-input");
  var stateInput = $("#state-input")

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      firstName: firstNameInput.val().trim(),
      lastName: lastNameInput.val().trim(),
      companyName: companyNameInput.val().trim(),
      address: addressInput.val().trim(),
      suite: suiteInput.val().trim(),
      city: cityInput.val().trim(),
      country: countryInput.val().trim(),
      phone: phoneInput.val().trim(),
      taxID: taxIdInput.val().trim(),
      zip: zipInput.val().trim(),
      state: stateInput.val().trim(),
      approvedBuyer: false,
      admin: false

    };


    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.firstName, userData.lastName, userData.companyName, userData.address, userData.phone, userData.taxID, userData.suite, userData.country, userData.city, userData.zip, userData.state, userData.approvedBuyer, userData.admin);

    emailInput.val("");
    passwordInput.val("");
    firstNameInput.val("");
    lastNameInput.val("");
    companyNameInput.val("");
    addressInput.val("");
    phoneInput.val("");
    taxIdInput.val("");
    cityInput.val("");
    suiteInput.val("");
    countryInput.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, firstName, lastName, companyName, address, phone, taxId, suite, country, city, zip, state, approvedBuyer, admin) {
    $.post("/accounts/signup", {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      companyName: companyName,
      address: address,
      phone: phone,
      taxID: taxId,
      suite: suite,
      country: country,
      city: city,
      zip: zip,
      state: state,
      approvedBuyer: approvedBuyer,
      admin: admin
    }).then(function(data) {
      if (data.duplicateUser) {
        alert("Sorry, that username has been taken");
      } else {
        window.location.replace(data);
      }
    }).catch(function(err) {
      console.log(err);
    });
  }

});
