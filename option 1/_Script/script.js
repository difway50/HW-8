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