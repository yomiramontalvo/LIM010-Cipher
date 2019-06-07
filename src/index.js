/* Acá va tu código */
let pantalla1 = document.getElementById('boton1');
let pantalla2 = document.getElementById('boton2');
const botoncontraseña = document.getElementById('btn');
let valcontra = document.getElementById('contraseña');
const botonnombre = document.getElementById('btn1');
let valnombre = document.getElementById('nombre');
const botondescifra = document.getElementById('btn2');
const botoncifra = document.getElementById('btn3');
const validarpista = document.getElementById('btn4');


let inicio = document.getElementById('inicio');
let resultado = document.getElementById('resultado');
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
let i=0;
/* Validando contraseña LABORATORIA */
btn.addEventListener('click',() => { 
    let n=contraseña.value;
    if(n=="LABORATORIA")
    { mostrarpantalla2();
    } 
    if(i>1)
     { mostrarpantalla8();   
     }
     else {
      i++;   
      contraseña.value='';document.getElementById('intentos').innerHTML="Tienes solo 3 intentos";
    }      
});

function soloLetras(e){
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toLowerCase();
  letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
  especiales = "8-37-39-46";

  tecla_especial = false
  for(var i in especiales){
       if(key == especiales[i]){
           tecla_especial = true;
           break;
       }
   }

   if(letras.indexOf(tecla)==-1 && !tecla_especial){
       return false;
   }
};
const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const textoCifrado = document.getElementById("cifrado");

function cifrado(){
	const textoIngresado = texto.value;
	textoCifrado.value = textoIngresado.split('').map(c=>{
		let mayus = (c === c.toUpperCase()) ? true : false;
		let valorEntero = c.toLowerCase().charCodeAt(0);
		if(valorEntero >= 97 && valorEntero <= 122)
			{
				const valorDesplazamiento = parseInt(desplazamiento.value);
				
				if(valorEntero + valorDesplazamiento > 122)
					valorEntero = 97 + (valorEntero - 122) + valorDesplazamiento - 1;
				else
					valorEntero = valorEntero + valorDesplazamiento;
			}
	
			let cifrado = String.fromCharCode(valorEntero);
			return mayus ? cifrado.toUpperCase() : cifrado;
		}).join('');
}

texto.addEventListener("keyup",cifrado);
desplazamiento.addEventListener("change", cifrado);







/* Ingresa nombre y muestra interaccion en pantalla 3 */
btn1.addEventListener('click',() => { 
    let m=nombre.value;
    document.getElementById('escogeropcion').innerHTML="¡Genial "+m+ " !";
    mostrarpantalla3();     
});

/* Mostrar pantalla de descifrado */
btn2.addEventListener('click',() => { 
    mostrarpantalla4();         
});


/* Mostrar pantalla de ingreso de numero para descifrar */
btn3.addEventListener('click',() => { 
    mostrarpantalla4();         
});

btn4.addEventListener('click',() => { 
 mostrarpantalla5(); 
});

