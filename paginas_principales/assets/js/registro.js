const formulario = document.querySelector("form");
formulario.addEventListener("submit", async (submitEvent) => {
    // cancela la propagación del evento submit
    submitEvent.preventDefault();
    /* currentTarget: es lo mismo que la constante "formulario" que está
    arriba, representa el elemento HTML que disparó el evento */
    const formElement = submitEvent.currentTarget;
    const formData = new FormData(formElement);
    // con formData.get(nombreCampoForm)
    /* const nombre = formData.get("nombre");
    const apellido = formData.get("apellido"); */
    const email = formData.get("email");
    const contrasena = formData.get("password");
    const nuevoUsuario = {
        /* nombre,
        apellido, */
        email,
        contrasena
    };

    const baseUrl = "https://pagina-voluntariado-frontend-glitch.glitch.me";
    const url = baseUrl + "/registro";
    const fetchConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoUsuario)
    };


    try {
        const respuesta = await fetch(url, fetchConfig);
        // si la respuesta no es OK
        if (!respuesta.ok) {
            // gestionar error o mensajes recibidos
            console.error("La respuesta no está OK");
            return;
        }

        // en caso de exito
        const objetoJson = await respuesta.json();
        console.dir(objetoJson);
        // redirijo a página protegida
        window.location = 'participa.html';

    } catch (error) {
        // gestion errores
        console.error(error.code);
        console.error(error.message);
    }
});









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

/*
// CON ESTO OCUPABAMOS GLITCH

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
        email, // esto equivale a email: email 
        contrasena
    };


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
*/
