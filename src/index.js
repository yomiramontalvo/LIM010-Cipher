/* Acá va tu código */
let screen1 = document.getElementById('boton1');
let screen2 = document.getElementById('boton2');
let screen3 = document.getElementById('boton3');
let screen4 = document.getElementById('boton4');
let screen5 = document.getElementById('boton5');
let screen6 = document.getElementById('boton6');
let screen7 = document.getElementById('boton7');
let screen8 = document.getElementById('boton8');

const hide1 = () => {
  screen1.classList.remove('show');
  screen2.classList.remove('show');
  screen3.classList.remove('show');
  screen4.classList.remove('show');
  screen5.classList.remove('show');
  screen6.classList.remove('show');
  screen7.classList.remove('show');
  screen8.classList.remove('show');
  screen1.classList.add('hide');
  screen2.classList.add('hide');
  screen3.classList.add('hide');
  screen4.classList.add('hide');
  screen5.classList.add('hide');
  screen6.classList.add('hide');
  screen7.classList.add('hide');
  screen8.classList.add('hide');
}
const showscreen2 = () => {
  hide1();
  screen2.classList.add('show');
}
const showscreen3 = () => {    /*show screen DE PREGUNTAS PERU*/
  hide1();
  screen3.classList.add('show');

}
const showscreen4 = () => {
  hide1();
  screen4.classList.add('show'); /*show screen DE PREGUNTAS MATEMATICAS*/
}
const showscreen5 = () => {
  hide1();
  screen5.classList.add('show');
}
const showscreen6 = () => {
  hide1();
  screen6.classList.add('show');
}
const showscreen7 = () => {
  hide1();
  screen7.classList.add('show');
}
const showscreen8 = () => {
  hide1();
  screen8.classList.add('show');
}
let i = 0;
/* Validando password LABORATORIA */
let btn = document.getElementById('btn');
let password = document.getElementById('password');
let input = document.getElementById("password");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btn").click();
  }
});

btn.addEventListener('click', () => {
  let n = password.value;
  if (n == "LABORATORIA") {
   document.getElementById('body').classList.add('body2');
   document.getElementById('body').classList.remove('body1');
   document.getElementById('cabecera').classList.add('logo1');
   document.getElementById('cabecera').classList.remove('logo');
    name.value = "";
    text1.value = "";
    displacement1.value = 1;
    textdescifrado.value = "";
    text.value = "";
    displacement.value = 1;
    textCifrado.value = "";
    showscreen2(); document.getElementById('cabecera').innerHTML = "¡Empecemos!";
  }
  if (i > 1) {
    showscreen8();
  }
  else {
    if (i == 0) {
      i++;
      password.value = ''; document.getElementById('intentos').innerHTML = "Tienes solo 2 intentos más";
    }
    else { i++; password.value = ''; document.getElementById('intentos').innerHTML = "Tienes solo 1 intento más"; }
  }
});
const displacement = document.getElementById("displacement");
const text = document.getElementById("text");
const textCifrado = document.getElementById("cifrado1");

const cifrado = () => {
  const numCif = displacement.value;
  const texCif = text.value;
  textCifrado.value = window.cipher.encode(numCif, texCif);
}

text.addEventListener("keyup", cifrado);
displacement.addEventListener("change", cifrado);

const displacement1 = document.getElementById("displacement1");
const text1 = document.getElementById("text1");
const textdescifrado = document.getElementById("descifrado1");

const descifrado = () => {
  const numDes = displacement1.value;
  const texDes = text1.value;
  textdescifrado.value = window.cipher.decode(numDes, texDes);
}

text1.addEventListener("keyup", descifrado);
displacement1.addEventListener("change", descifrado);
/* Ingresa name y muestra interaccion en screen 3 */

let btn1 = document.getElementById('btn1');
let name = document.getElementById('name');
let input1 = document.getElementById('name');
// Execute a function when the user releases a key on the keyboard
input1.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btn1").click();
  }
});
btn1.addEventListener('click', () => {
  let m = name.value;
  if (m == "") {
    document.getElementById('noname').innerHTML = "Debes completar el campo";
  }
  else {
    document.getElementById('cabecera').innerHTML = "¡Genial " + m + " !";
    showscreen3();
  }
});

/* show screen de descifrado */
let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
  document.getElementById('cabecera').innerHTML = "¡Descifra pistas!";
  showscreen6();
});


/* show screen de ingreso de numero para descifrar */
let btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => {
  document.getElementById('cabecera').innerHTML = "Oculta tus pistas";
  showscreen4();
});

let btn4 = document.getElementById('btn4');
let input2 = document.getElementById("displacement");
// Execute a function when the user releases a key on the keyboard
input2.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btn4").click();
  }
});

btn4.addEventListener('click', () => {
  const m = textCifrado.value;
  if (m == "") {
    document.getElementById('notextc').innerHTML = "Debes ingresar tu pista";
  }
  else {
    document.getElementById('nuevapista').innerHTML = m;
    showscreen5();
  }
});
let btn9 = document.getElementById('btn9');
btn9.addEventListener('click', () => {
  showscreen3();
  text.value = "";
  displacement.value = 1;
  textCifrado.value = "";
  text1.value = "";
  displacement1.value = 1;
  textdescifrado.value = "";
});

let btn10 = document.getElementById('btn10');
btn10.addEventListener('click', () => {
  showscreen3();
  text.value = "";
  displacement.value = 1;
  textCifrado.value = "";
  text1.value = "";
  displacement1.value = 1;
  textdescifrado.value = "";
});
let btn5 = document.getElementById('btn5');
btn5.addEventListener('click', () => {
  text.value = "";
  displacement.value = 1;
  textCifrado.value = "";
  let m = name.value;
  document.getElementById('cabecera').innerHTML = "¡Genial " + m + " !";
  showscreen3();
});
let btn6 = document.getElementById('btn6');
let input3 = document.getElementById("displacement1");
// Execute a function when the user releases a key on the keyboard
input3.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btn6").click();
  }
});

btn6.addEventListener('click', () => {
  const m = textdescifrado.value;
  if (m == "") {
    document.getElementById('notextd').innerHTML = "Debes ingresar la pista";
  }
  else {
    document.getElementById('pistadescifrada').innerHTML = m;
    showscreen7();
  }
});
let btn7 = document.getElementById('btn7');
btn7.addEventListener('click', () => {
  text1.value = "";
  displacement1.value = 1;
  textdescifrado.value = "";
  let m = name.value;
  document.getElementById('cabecera').innerHTML = "¡Genial " + m + " !";
  showscreen3();
});
let btn8 = document.getElementById('btn8');
btn8.addEventListener('click', () => {
  location.reload();
});

let btn12 = document.getElementById('btn12');
btn12.addEventListener("click", () => {
  let email = prompt('Escribe el correo electrónico de tu Amigo Secreto y envíale tu pista:');
  let subject = 'Envío pista Amigo Secreto';
  let body = textCifrado.value;
  window.open(`mailto:${email}?subject=${subject}&body=${body}`);
});



/*AJAX*/