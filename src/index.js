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
let btn=document.getElementById('btn');
let contraseña=document.getElementById('contraseña');
btn.addEventListener('click', () => {
  let n = contraseña.value;
  if (n == "LABORATORIA") {
    mostrarpantalla2(); document.getElementById('cabecera').innerHTML = "¡Empecemos!";
  }
  if (i > 1) {
    mostrarpantalla8();
  }
  else {
    i++;
    contraseña.value = ''; document.getElementById('intentos').innerHTML = "Tienes solo 3 intentos";
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

let btn1=document.getElementById('btn1');
let nombre=document.getElementById('nombre');
btn1.addEventListener('click', () => {
  let m = nombre.value;
  document.getElementById('cabecera').innerHTML = "¡Genial " + m + " !";
  mostrarpantalla3();
});

/* Mostrar pantalla de descifrado */
let btn2=document.getElementById('btn2');
btn2.addEventListener('click', () => {
  document.getElementById('cabecera').innerHTML = "¡Descifra pistas!";
  mostrarpantalla6();
});


/* Mostrar pantalla de ingreso de numero para descifrar */
let btn3=document.getElementById('btn3');
btn3.addEventListener('click', () => {
  document.getElementById('cabecera').innerHTML = "Oculta tus pistas";
  mostrarpantalla4();
});

let btn4=document.getElementById('btn4');
btn4.addEventListener('click', () => {
  const m = textoCifrado.value;
  document.getElementById('nuevapista').innerHTML = m;
  mostrarpantalla5();
});
let btn5=document.getElementById('btn5');

btn5.addEventListener('click', () => {
  texto.value = "";
  desplazamiento.value = 1;
  textoCifrado.value = "";
  let m = nombre.value;
  document.getElementById('cabecera').innerHTML = "¡Genial " + m + " !";
  mostrarpantalla3();
});
let btn6=document.getElementById('btn6');
btn6.addEventListener('click', () => {
  const m = textodescifrado.value;
  document.getElementById('pistadescifrada').innerHTML = m;
  mostrarpantalla7();
});
let btn7=document.getElementById('btn7');
btn7.addEventListener('click', () => {
  texto1.value = "";
  desplazamiento1.value = 1;
  textodescifrado.value = "";
  let m = nombre.value;
  document.getElementById('cabecera').innerHTML = "¡Genial " + m + " !";
  mostrarpantalla3();
});

/*const soloLetras = (e) => {
  let key = e.keyCode || e.which;
  let tecla = String.fromCharCode(key).toLowerCase();
  const letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
  const especiales = "8-37-39-46";

  let tecla_especial = false
  for (var i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }
  if (letras.indexOf(tecla) == -1 && !tecla_especial) {
    return false;
  }
};
onkeypress="return soloLetras(event)" en el HTML, donde vas a colocar el texto TEXTAREA*/

/*AJAX*/