/* Acá va tu código */
let pantalla1 = document.getElementById('boton1');
let pantalla2 = document.getElementById('boton2');
let pantalla3 = document.getElementById('boton3');
let pantalla4 = document.getElementById('boton4');
let pantalla5 = document.getElementById('boton5');
let pantalla6 = document.getElementById('boton6');
let pantalla7 = document.getElementById('boton7');
let pantalla8 = document.getElementById('boton8');


const ocultar1 = () => {
  pantalla1.classList.remove('mostrar');
  pantalla2.classList.remove('mostrar');
  pantalla3.classList.remove('mostrar');
  pantalla4.classList.remove('mostrar');
  pantalla5.classList.remove('mostrar');
  pantalla6.classList.remove('mostrar');
  pantalla7.classList.remove('mostrar');
  pantalla8.classList.remove('mostrar');
  pantalla1.classList.add('ocultar');
  pantalla2.classList.add('ocultar');
  pantalla3.classList.add('ocultar');
  pantalla4.classList.add('ocultar');
  pantalla5.classList.add('ocultar');
  pantalla6.classList.add('ocultar');
  pantalla7.classList.add('ocultar');
  pantalla8.classList.add('ocultar');
}
/*const mostrarpantalla1 = () => {
  ocultar1();
  pantalla1.classList.add('mostrar');
}*/
const mostrarpantalla2 = () => {
  ocultar1();
  pantalla2.classList.add('mostrar');
}
const mostrarpantalla3 = () => {    /*MOSTRAR PANTALLA DE PREGUNTAS PERU*/
  ocultar1();
  pantalla3.classList.add('mostrar');

}
const mostrarpantalla4 = () => {
  ocultar1();
  pantalla4.classList.add('mostrar'); /*MOSTRAR PANTALLA DE PREGUNTAS MATEMATICAS*/
}
const mostrarpantalla5 = () => {
  ocultar1();
  pantalla5.classList.add('mostrar');
}
const mostrarpantalla6 = () => {
  ocultar1();
  pantalla6.classList.add('mostrar');
}
const mostrarpantalla7 = () => {
  ocultar1();
  pantalla7.classList.add('mostrar');
}
const mostrarpantalla8 = () => {
  ocultar1();
  pantalla8.classList.add('mostrar');
}
let i = 0;
/* Validando contraseña LABORATORIA */
let btn = document.getElementById('btn');
let contraseña = document.getElementById('contraseña');
let input = document.getElementById("contraseña");

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
  let n = contraseña.value;
  if (n == "LABORATORIA") {
    nombre.value="";
    texto1.value = "";
    desplazamiento1.value = 1;
    textodescifrado.value = "";
    texto.value = "";
    desplazamiento.value = 1;
    textoCifrado.value = "";
    mostrarpantalla2(); document.getElementById('cabecera').innerHTML = "¡Empecemos!";
  }
  if (i > 1) {
    mostrarpantalla8();
  }
  else {
    if (i == 0) {
      i++;
      contraseña.value = ''; document.getElementById('intentos').innerHTML = "Tienes solo 2 intentos más";
    }
    else { i++; contraseña.value = ''; document.getElementById('intentos').innerHTML = "Tienes solo 1 intento más"; }
  }
});
const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const textoCifrado = document.getElementById("cifrado1");

const cifrado = () => {
  const numCif = desplazamiento.value;
  const texCif = texto.value;
  textoCifrado.value = window.cipher.encode(numCif, texCif);
}

texto.addEventListener("keyup", cifrado);
desplazamiento.addEventListener("change", cifrado);

const desplazamiento1 = document.getElementById("desplazamiento1");
const texto1 = document.getElementById("texto1");
const textodescifrado = document.getElementById("descifrado1");

const descifrado = () => {
  const numDes = desplazamiento1.value;
  const texDes = texto1.value;
  textodescifrado.value = window.cipher.decode(numDes, texDes);
}

texto1.addEventListener("keyup", descifrado);
desplazamiento1.addEventListener("change", descifrado);
/* Ingresa nombre y muestra interaccion en pantalla 3 */

let btn1 = document.getElementById('btn1');
let nombre = document.getElementById('nombre');
let input1 = document.getElementById("nombre");
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
  let m = nombre.value;
  if (m == "") {
    document.getElementById('noname').innerHTML = "Debes completar el campo";
  }
  else {
    document.getElementById('cabecera').innerHTML = "¡Genial " + m + " !";
    mostrarpantalla3();
  }
});

/* Mostrar pantalla de descifrado */
let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
  document.getElementById('cabecera').innerHTML = "¡Descifra pistas!";
  mostrarpantalla6();
});


/* Mostrar pantalla de ingreso de numero para descifrar */
let btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => {
  document.getElementById('cabecera').innerHTML = "Oculta tus pistas";
  mostrarpantalla4();
});

let btn4 = document.getElementById('btn4');
let input2 = document.getElementById("desplazamiento");
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
  const m = textoCifrado.value;
  if (m == "") {
    document.getElementById('notextc').innerHTML = "Debes ingresar tu pista";
  }
  else {
    document.getElementById('nuevapista').innerHTML = m;
    mostrarpantalla5();
  }
});
let btn9 = document.getElementById('btn9');
btn9.addEventListener('click', () => {
  mostrarpantalla3();
  texto.value = "";
  desplazamiento.value = 1;
  textoCifrado.value = "";
  texto1.value = "";
  desplazamiento1.value = 1;
  textodescifrado.value = "";
});

let btn10 = document.getElementById('btn10');
btn10.addEventListener('click', () => {
  mostrarpantalla3();
  texto.value = "";
  desplazamiento.value = 1;
  textoCifrado.value = "";
  texto1.value = "";
  desplazamiento1.value = 1;
  textodescifrado.value = "";
});
let btn5 = document.getElementById('btn5');
btn5.addEventListener('click', () => {
  texto.value = "";
  desplazamiento.value = 1;
  textoCifrado.value = "";
  let m = nombre.value;
  document.getElementById('cabecera').innerHTML = "¡Genial " + m + " !";
  mostrarpantalla3();
});
let btn6 = document.getElementById('btn6');
let input3 = document.getElementById("desplazamiento1");
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
  const m = textodescifrado.value;
  if (m == "") {
    document.getElementById('notextd').innerHTML = "Debes ingresar la pista";
  }
  else {
    document.getElementById('pistadescifrada').innerHTML = m;
    mostrarpantalla7();
  }
});
let btn7 = document.getElementById('btn7');
btn7.addEventListener('click', () => {
  texto1.value = "";
  desplazamiento1.value = 1;
  textodescifrado.value = "";
  let m = nombre.value;
  document.getElementById('cabecera').innerHTML = "¡Genial " + m + " !";
  mostrarpantalla3();
});
let btn8 = document.getElementById('btn8');
btn8.addEventListener('click', () => {
  location.reload();
});

let btn12=document.getElementById('btn12');
btn12.addEventListener("click", () => {
  let email=prompt('Escribe el correo electrónico de tu Amigo Secreto y envíale tu pista:');
  let subject='Envío pista Amigo Secreto';
  let body=textoCifrado.value;
  window.open(`mailto:${email}?subject=${subject}&body=${body}`);
});



/*AJAX*/