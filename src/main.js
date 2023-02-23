//componentes a importar
import { login } from './components/login.js';
import { registro } from './components/registro.js';
import { timeline } from './components/timeline.js';

//direcciones de las rutas
const rutas = {
  '/' : login,
  '/registro' : registro,
  '/timeline' : timeline,
}

//funcion para moverse a traves de las rutas
const onNavigate = (pathName) => {
  window.history.pushState(
      {},
      pathName,
      window.location.origin + pathName
  )
  rutas[pathName]();
}

//carga la ruta principal
rutas[window.location.pathname]()

//eventListeners que interactuan con el DOM
window.onload = () => {
  document.getElementById("botonRegistrar").addEventListener("click", () => onNavigate("/registro"))
}

window.addEventListener('click',() => {
  document.getElementById("botonInicioGoogle").addEventListener("click", () => onNavigate("/timeline"))
})




// mi intento de SPA usando el codigo de yesica para la pantalla de Login
/*
const pantallas = {
  "pantallaLogIn" : `
  <main class="PantallaInicio">
    <section class="cajaInicio">
      <img src="./img/img_libro_rojo.png" alt="Imagen de libro">
      <input type="text" placeholder=" Nombre o Nick" id="inputNick">
      <input type="text" placeholder=" E-mail" id="inputEmail">
      <input type="password" placeholder=" Password" id="inputEmail">
      <button id="botonInicio">Log in</button>
      <hr style="width:100%;text-align:center">
      <button id="botonInicioGoogle"><img src="./img/btn_google_signin.png" alt="boton de google" class="imgButton"></button>
      <p class="textoCrearCuenta">Dont have an account?
      <button id="botonRegistrar"> Register</button></p>
    </section>
  </main> 
  `,
  "pantallaRegister" : `Aqui va la pantalla de registro`,
  "pantallaTimeline" : `Aqui va la pantalla del muro`,
}

window.onload = () => {
  mostrarPantalla("pantallaLogIn");
}   

function mostrarPantalla(pantalla) {
  let pantallaAMostrar;

  switch(pantalla) {

    case "pantallaLogIn" : 
      pantallaAMostrar = pantallas.pantallaLogIn;
      break;

    case "pantallaRegister" :
      pantallaAMostrar = pantallas.pantallaRegister;
      break;

    case "pantallaTimeline" :
      pantallaAMostrar = pantallas.pantallaTimeline;
      break;

  }
  document.getElementById("pantallaMostrada").innerHTML = pantallaAMostrar
  console.log(pantallaAMostrar)
}
console.log(document.getElementById("botonRegistrar"))
document.getElementById("botonRegistrar").addEventListener("click", function() {
  mostrarPantalla("pantallaRegister")
})
*/

// maqueteo de yesica para la pantalla de login
/*
function iniciar(){
  const root = document.getElementById("root")
  root.innerHTML=`
  <main class="PantallaInicio">
    <section class="cajaInicio">
      <img src="./img/img_libro_rojo.png" alt="Imagen de libro">
      <input type="text" placeholder=" Nombre o Nick" id="inputNick">
      <input type="text" placeholder=" E-mail" id="inputEmail">
      <input type="password" placeholder=" Password" id="inputEmail">
      <button id="botonInicio">Log in</button>
      <hr style="width:100%;text-align:center">
      <button id="botonInicioGoogle"><img src="./img/btn_google_signin.png" alt="boton de google" class="imgButton"></button>
      <p class="textoCrearCuenta">Dont have an account?
      <a id="botonRegistrar" href="#"> Register</a></p>
    </section>
  </main> 
  `
}

iniciar()
*/