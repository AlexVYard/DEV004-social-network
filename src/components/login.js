export const login = () => {
  const root = document.getElementById('pantallaMostrada');
  const pantallaInicio = document.createElement('main')
  const cajaInicio = document.createElement('section')
  const imagenFondo = document.createElement('img')
  const inputEmail = document.createElement('input')

  pantallaInicio.className = "PantallaInicio";
  cajaInicio.className = "cajaInicio";
  imagenFondo.src = "./img/img_libro_rojo.png"
  imagenFondo.alt = "Imagen de libro"
  inputEmail.type = "text"
  inputEmail.placeholder = " Correo Electronico"
  inputEmail.id = "inputEmail"
  
  root.appendChild(pantallaInicio)
  pantallaInicio.appendChild(cajaInicio)
  cajaInicio.appendChild(imagenFondo)
  cajaInicio.appendChild(inputEmail)
};
