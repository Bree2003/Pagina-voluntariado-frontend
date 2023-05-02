// PRUEBA
/* const persona = {
    name: 'Jhon',
    age: 25
};
fetch('https://pagina-voluntariado-frontend.glitch.me/registro-voluntario', {
    method: 'POST',
    body: JSON.stringify(persona),
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => console.dir(data))
    .catch(error => console.error(error))
; */

// recuperar datos del formulario
const formulario = document.querySelector("form");

formulario.addEventListener('submit', (evento) => {

    // cancela la propagación del evento submit
    evento.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const email = document.querySelector("#email").value;
    const contrasena = document.querySelector("#password").value;

    // configurar el objeto que se enviará por POST
    const usuario = {
        nombre,
        apellido,
        email, /* esto equivale a email: email */
        contrasena
    };

    // llamada remota
    fetch('https://pagina-voluntariado-frontend.glitch.me/registro-voluntario', {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => console.dir(data))
    .catch(error => console.error(error))
    ;

});
