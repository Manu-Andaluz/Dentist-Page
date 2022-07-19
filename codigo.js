//Form
const nombre = document.getElementById('contacto-texto');
const email = document.getElementById('contacto-email');
const numero = document.getElementById('contacto-numero');
const textholder = document.getElementById('contacto-text-area');
const boton = document.getElementById('contacto-btn');
const alerta = document.querySelectorAll('.contact-form-txt');

  for(let i = 0;i < alerta.length;i++){
    alerta[i].addEventListener('click', () => alert('Por el momento este formulario no esta en funcionamiento') )
  }
