/* Acá va tu código */
const botoncontraseña = document.getElementById('btn');
let valcontra = document.getElementById('contraseña');
const botonnombre = document.getElementById('btn1');
let valnombre = document.getElementById('nombre');
const botondescifra = document.getElementById('btn2');
const botoncifra = document.getElementById('btn3');


let inicio = document.getElementById('inicio');
let resultado = document.getElementById('resultado');
let pantalla1 = document.getElementById('boton1');
let pantalla2 = document.getElementById('boton2');
let pantalla3 = document.getElementById('boton3');
let pantalla4 = document.getElementById('boton4');
let pantalla5 = document.getElementById('boton5');
let pantalla6 = document.getElementById('boton6');
let pantalla7 = document.getElementById('boton7');
let pantalla8 = document.getElementById('boton8');
const boton10 = document.getElementById('btn1');


function ocultar1() {
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
function mostrarpantalla1() {
  ocultar1();
  pantalla1.classList.add('mostrar');
}
function mostrarpantallasaludo() {
  ocultar1();
  const n=llamar.value;
  document.getElementById('saludo').innerHTML="Hola! "+ n+" bienvenida(o)" ;
  pantallasaludo.classList.add('mostrar');
}
function mostrarpantalla2() {
  ocultar1();
  pantalla2.classList.add('mostrar');
}
function mostrarpantalla3() {    /*MOSTRAR PANTALLA DE PREGUNTAS PERU*/
  ocultar1();
  pantalla3.classList.add('mostrar');
}
function mostrarpantalla4() {
  ocultar1();
  pantalla4.classList.add('mostrar'); /*MOSTRAR PANTALLA DE PREGUNTAS MATEMATICAS*/
}
function mostrarpantalla5() {
  ocultar1();
  pantalla5.classList.add('mostrar');
}
function mostrarpantalla6() {
  ocultar1();
  pantalla6.classList.add('mostrar');
}
function mostrarpantalla7() {
  ocultar1();
  pantalla7.classList.add('mostrar');
}
function mostrarpantalla8() {
  ocultar1();
  pantalla8.classList.add('mostrar');
}

function dar_enviar() {
  let correctas = 0;
  let opciones1 = document.getElementsByName("opcion1");
  let opciones2 = document.getElementsByName("opcion2");
  for (let i = 0; i < opciones1.length; i++) {
    if (opciones1[i].checked) {
      if (opciones1[i].value === 'correcto')
        correctas++;
    }
  }
  for (let i = 0; i < opciones2.length; i++) {
    if (opciones2[i].checked) {
      if (opciones2[i].value === 'correcto')
        correctas++;
    }
  }
  console.log(correctas);
  let m=correctas;
  const n=llamar.value;
  document.getElementById('res1').innerHTML=n+"! Obtuvistes "+ m+" respuesta(s) correctas" ; 
}
function dar_enviar1() {
  let correctas = 0;
  let opciones3 = document.getElementsByName("opcion3");
  let opciones4 = document.getElementsByName("opcion4");
  for (let i = 0; i < opciones3.length; i++) {
    if (opciones3[i].checked) {
      if (opciones3[i].value === 'correcto')
        correctas++;
    }
  }
  for (let i = 0; i < opciones4.length; i++) {
    if (opciones4[i].checked) {
      if (opciones4[i].value === 'correcto')
        correctas++;
    }
  }
  console.log(correctas);
  let m=correctas;
  const n=llamar.value;
  document.getElementById('res2').innerHTML=n+"! Obtuvistes "+ m+" respuesta(s) correctas" ;  
}
function dar_enviar2() {
  let correctas = 0;
  let opciones5 = document.getElementsByName("opcion5");
  let opciones6 = document.getElementsByName("opcion6");
  for (let i = 0; i < opciones5.length; i++) {
    if (opciones5[i].checked) {
      if (opciones5[i].value === 'correcto')
        correctas++;
    }
  }
  for (let i = 0; i < opciones6.length; i++) {
    if (opciones6[i].checked) {
      if (opciones6[i].value === 'correcto')
        correctas++;
    }
  }
  console.log(correctas);
  let m=correctas;
  const n=llamar.value;
  document.getElementById('res3').innerHTML=n+"! Obtuvistes "+ m+" respuesta(s) correctas" ; 
}

let i=0;
btn.addEventListener('click',() => { 
    let n=contraseña.value;
    if(n=="LABORATORIA")
    { mostrarpantalla2();
    } 
    if(i>1)
     { mostrarpantalla10();   
     }
     else {
      i++;   
      contraseña.value='';document.getElementById('intentos').innerHTML="Tienes solo 3 intentos";
    }      
});
btn1.addEventListener('click',() => { 
    let m=nombre.value;
    document.getElementById('escogeropcion').innerHTML="¡Genial "+m+ " !";
    mostrarpantalla3();
          
});
btn2.addEventListener('click',() => { 
    mostrarpantalla4();         
});
btn3.addEventListener('click',() => { 
    mostrarpantalla5();         
});