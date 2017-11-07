// Getting the input text objects.

var Nombre = document.forms["vform"]["Nombre"];
var Email = document.forms["vform"]["Email"];
var Dirección = document.forms["vform"]["Dirección"];
var Telefono = document.forms["vform"]["Telefono"];

// getting all the errors

var Nombre_error = document.getElementById("Nombre_error");
var Email_error = document.getElementById("Email_error");
var Dirección_error = document.getElementById("Dirección_error");
var Telefono_error = document.getElementById("Telefono_error");

// getting the events listeners

Nombre.addEventListener("blur", NombreVerify, true);
Email.addEventListener("blur", EmailVerify, true);
Dirección.addEventListener("blur", DirecciónVerify, true);
Telefono.addEventListener("blur", TelefonoVerify, true);

// Validation

function validate(){
  // validacion Nombre
  if (Nombre.value == "") {
    Nombre.style.border = "1px solid red";
    Nombre_error.textContent = "Nombre requerido";
    Nombre.focus();
    return false;
  }

// Validacion Email

  if (Email.value == "") {
    Email.style.border = "1px solid red";
    Email_error.textContent = "Email requerido";
    Email.focus();
    return false;
  }

  // contraseña validacion

  if (Dirección.value == "") {
    Dirección.style.border = "1px solid red";
    Dirección_error.textContent = "Dirección requerida";
    Dirección.focus();
    return false;
  }

  // si ambas contraseñas son iguales.

   if (Telefono.value == "") {
    Telefono.style.border = "1px solid red";
    Telefono_error.textContent = "Telefono requerido";
    Dirección.focus();
    return false;
  }
}

// Event handler functions

function NombreVerify(){
  if (Nombre.value !=""){
    Nombre.style.border = "1px solid #5E6E66";
    Nombre_error.innerHTML ="";
    return true;
  }
}

function EmailVerify(){
  if (Email.value !=""){
    Email.style.border = "1px solid #5E6E66";
    Email_error.innerHTML ="";
    return true;
  }
}

function DirecciónVerify(){
  if (Contraseña.value !=""){
    Contraseña.style.border = "1px solid #5E6E66";
    Contraseña_error.innerHTML ="";
    return true;
  }
}

function TelefonoVerify(){
  if (Contraseña.value !=""){
    Contraseña.style.border = "1px solid #5E6E66";
    Contraseña_error.innerHTML ="";
    return true;
  }
}

$(".button1").click(function() {
  var $btn = $(this),
      $step = $btn.parents(".modal-body"),
      stepIndex = $step.index(),
      $pag = $(".modal-header span").eq(stepIndex);

  if (stepIndex === 0 || stepIndex === 1) {
    step1($step, $pag);
  } else {
    step3($step, $pag);
  }
});

function step1($step, $pag) {
  console.log("step1");
  // animate the step out
  $step.addClass("animate-out");

  // animate the step in
  setTimeout(function() {
    $step
      .removeClass("animate-out is-showing")
      .next()
      .addClass("animate-in");
    $pag
      .removeClass("is-active")
      .next()
      .addClass("is-active");
  }, 600);

  // after the animation, adjust the classes
  setTimeout(function() {
    $step
      .next()
      .removeClass("animate-in")
      .addClass("is-showing");
  }, 1200);
}

function step3($step, $pag) {
  console.log("3");

  // animate the step out
  $step.parents(".modal-wrap").addClass("animate-up");

  setTimeout(function() {
    $(".rerun-button").css("display", "inline-block");
  }, 300);
}

$(".rerun-button").click(function() {
  $(".modal-wrap")
    .removeClass("animate-up")
    .find(".modal-body")
    .first()
    .addClass("is-showing")
    .siblings()
    .removeClass("is-showing");

  $(".modal-header span")
    .first()
    .addClass("is-active")
    .siblings()
    .removeClass("is-active");
  $(this).hide();
});


