/*global $, document, window, setTimeout, navigator, console, location*/
$(document).ready(function () {
  "use strict";

  var usernameError = true,
    emailError = true,
    passwordError = true,
    passConfirm = true,
    rnoError = true;

  // Detect browser for css purpose
  if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
    $(".form form label").addClass("fontSwitch");
  }

  // Label effect
  $("input").focus(function () {
    $(this).siblings("label").addClass("active");
  });

  // Form validation

  $("input").keyup(function () {
    // User Name
    if ($(this).hasClass("name")) {
      if ($(this).val().length === 0) {
        $(this)
          .siblings("span.error")
          .text("Please type your full name")
          .fadeIn()
          .parent(".form-group")
          .addClass("hasError");
        usernameError = true;
      } else if ($(this).val().length > 1 && $(this).val().length < 6) {
        $(this)
          .siblings("span.error")
          .text("Please type at least 6 characters")
          .fadeIn()
          .parent(".form-group")
          .addClass("hasError");
        usernameError = true;
      } else {
        $(this)
          .siblings(".error")
          .text("")
          .fadeOut()
          .parent(".form-group")
          .removeClass("hasError");
        usernameError = false;
      }
    }
    // Email
    if ($(this).hasClass("email")) {
      if ($(this).val().length == "") {
        $(this)
          .siblings("span.error")
          .text("Please type your email address")
          .fadeIn()
          .parent(".form-group")
          .addClass("hasError");
        emailError = true;
      } else {
        $(this)
          .siblings(".error")
          .text("")
          .fadeOut()
          .parent(".form-group")
          .removeClass("hasError");
        emailError = false;
      }
    }
    //registration number
    if ($(this).hasClass("rno")) {
      if ($(this).val().length === 0) {
        $(this)
          .siblings("span.error")
          .text("Please type your registration number")
          .fadeIn()
          .parent(".form-group")
          .addClass("hasError");
        rnoError = true;
      } else if ($(this).val().length != 10) {
        $(this)
          .siblings("span.error")
          .text("Registration Number should have 10 digits")
          .fadeIn()
          .parent(".form-group")
          .addClass("hasError");
        rnoError = true;
      } else {
        $(this)
          .siblings(".error")
          .text("")
          .fadeOut()
          .parent(".form-group")
          .removeClass("hasError");
        rnoError = false;
      }
    }
    // PassWord
    if ($(this).hasClass("pass")) {
      if ($(this).val().length < 8) {
        $(this)
          .siblings("span.error")
          .text("Please type at least 8 charcters")
          .fadeIn()
          .parent(".form-group")
          .addClass("hasError");
        passwordError = true;
      } else {
        $(this)
          .siblings(".error")
          .text("")
          .fadeOut()
          .parent(".form-group")
          .removeClass("hasError");
        passwordError = false;
      }
    }

    // PassWord confirmation
    if ($(".pass").val() !== $(".passConfirm").val()) {
      $(".passConfirm")
        .siblings(".error")
        .text("Passwords don't match")
        .fadeIn()
        .parent(".form-group")
        .addClass("hasError");
      passConfirm = true;
    } else {
      $(".passConfirm")
        .siblings(".error")
        .text("")
        .fadeOut()
        .parent(".form-group")
        .removeClass("hasError");
      passConfirm = false;
    }

    // label effect
    if ($(this).val().length > 0) {
      $(this).siblings("label").addClass("active");
    } else {
      $(this).siblings("label").removeClass("active");
    }
  });

  // form switch
  $("a.switch").click(function (e) {
    $(this).toggleClass("active");
    e.preventDefault();

    if ($("a.switch").hasClass("active")) {
      $(this)
        .parents(".form-peice")
        .addClass("switched")
        .siblings(".form-peice")
        .removeClass("switched");
    } else {
      $(this)
        .parents(".form-peice")
        .removeClass("switched")
        .siblings(".form-peice")
        .addClass("switched");
    }
  });

  // Form submit
  $("form.signup-form").submit(function (event) {
    if (
      usernameError == true ||
      emailError == true ||
      passwordError == true ||
      passConfirm == true ||
      rnoError == true
    ) {
      event.preventDefault();
      console.log("Not validated");
      $(".name, .email, .pass, .passConfirm, .rno").blur();
    } else {
      $("#form-sign-up").submit();
    }
  });

  // Reload page
  $("a.profile").on("click", function () {
    location.reload(true);
  });
});
