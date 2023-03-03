import { registerGoogle } from '../lib/registerGoogle.js';
import { signIn } from '../lib/signIn.js';

// eventos del login-dom
export const loginEventos = (onNavigate) => {
  // deteccion de correo en la casilla inputEmail
  document.getElementById('inputEmail').addEventListener('keyup', () => {
    if (document.getElementById('inputEmail').value
      .match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      document.getElementById('botonInicio').style['pointer-events'] = 'all';
    } else {
      document.getElementById('botonInicio').style['pointer-events'] = 'none';
    }
  });
  document
    .getElementById('botonRegistrar')
    .addEventListener('click', () => onNavigate('/registro'));
  document
    .getElementById('botonInicioGoogleLogin')
    .addEventListener('click', async () => {
      const estaLogueado = await registerGoogle();
      if (estaLogueado) {
        onNavigate('/timeline');
      } else {
        alert('Error en login con google');
      }
    });
  document.getElementById('botonInicio').addEventListener('click', async () => {
    // signIn();
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;
    // segun el retorno de signIn en caso true ira a timeline sino mostrara mensaje de error
    const estaLogueado = await signIn(email, password);
    if (estaLogueado) {
      onNavigate('/timeline');
    } else {
      alert('Error correo o contraseña incorrectos verifiquelos por favor')
    }
  });
};
