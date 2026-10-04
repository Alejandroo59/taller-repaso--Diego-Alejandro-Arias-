// =======================================================
// RETO 1: MODO OSCURO INTERACTIVO
// =======================================================

// 1. SELECCIÓN DE ELEMENTOS DEL DOM

// getElementById busca un elemento por medio de su ID, le pasamos
// 'btn-toggle-tema' porque ese es el ID del botón que utilizaremos
// para activar y desactivar el modo oscuro.
const btnTema = document.getElementById('btn-toggle-tema');

// Agregué esta selección porque los elementos de la página no
// estaban cambiando correctamente al activar el modo oscuro. Con
// querySelectorAll puedo seleccionar todos esos elementos para
// aplicarles también la clase del modo oscuro.
const elementos = document.querySelectorAll('#sobremi, #intereses, #objetivos, #contacto, .titulos-principales, .titulos-secundarios, #yo-id, #intereses-id, #objetivos-id, #contacto-id');

// document.body selecciona directamente el elemento <body> de la página.
// Lo usamos porque desde ahí podemos aplicar el modo oscuro a la página
// completa, aunque pues como dije, no funcionaba del todo bien.
const body = document.body;

// 2. MANEJO DE EVENTOS

// El evento 'click' se ejecuta cuando hacemos clic en el botón.
// La función anónima que le pasamos contiene las instrucciones que
// se van a ejecutar cada vez que ocurra ese clic.
btnTema.addEventListener('click', function() {

// classList.toggle('tema-oscuro') agrega la clase 'tema-oscuro' si no
// está presente y la quita si ya está agregada, de esta forma podemos activar
// y desactivar el modo oscuro con el mismo botón.
body.classList.toggle('tema-oscuro');

elementos.forEach(elemento => { // Recorremos cada uno de los elementos seleccionados anteriormente con forEach para aplicarles la clase 'tema-oscuro' individualmente.

  elemento.classList.toggle('tema-oscuro'); 

});

// Cambiar el texto del botón dependiendo del estado

if (body.classList.contains('tema-oscuro')) {

    btnTema.textContent = "☀ Modo Claro";

} else {

    btnTema.textContent = "🌙 Modo Oscuro";

}

});



// =======================================================
// RETO 2: SALUDO DINÁMICO
// =======================================================

// 1. SELECCIÓN DEL CONTENEDOR

const textoSaludo = document.getElementById('saludo-tiempo-real');

// 2. LÓGICA DE TIEMPO

const fechaActual = new Date();

const horaActual = fechaActual.getHours();

let mensaje = "";

if (horaActual >= 6 && horaActual < 12) {

    mensaje = "¡Buenos días! Espero que tengas una excelente mañana.";

} else if (horaActual >= 12 && horaActual < 18) {

    mensaje = "¡Buenas tardes! Gracias por visitar mi perfil.";

} else {

    mensaje = "¡Buenas noches! Descubre mi trabajo.";

}

// 3. INYECCIÓN EN EL DOM

// textContent sirve para cambiar el texto de un elemento sin interpretar
// etiquetas HTML. innerHTML sí permite insertar e interpretar etiquetas HTML.
// Aquí usamos textContent porque solamente queremos mostrar un mensaje
// de texto y no necesitamos agregar código HTML.
textoSaludo.textContent = mensaje;
