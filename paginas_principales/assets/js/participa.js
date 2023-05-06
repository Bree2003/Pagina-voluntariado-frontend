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

    const baseUrl = "http://localhost:3000";
    const url = baseUrl + "/login";
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

        const usuario = objetoJson.usuario;
        // caso exito
        // guardo datos del usuario y token
        localStorage.setItem('usuario', JSON.stringify(usuario));
        // redirijo a página protegida
        window.location = 'perfilUsuario.html';

    } catch (error) {
        // gestion errores
        console.error(error.code);
        console.error(error.message);
    }
});