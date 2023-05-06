const storageUsuario = localStorage.getItem("usuario"); /* string, recuperar valor que dejamos en el browser */
if (storageUsuario == null) {
    // si no está autenticado
    window.location = "participa.html";
}
const objetoUsuario = JSON.parse(storageUsuario);
const token = objetoUsuario.user.stsTokenManager.accessToken;

// console.log(token);

const baseUrl = 'http://localhost:3000';
const url = baseUrl + '/usuario/checktoken';
fetch(url, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authentication': 'Bearer ' + token;
    },
    body: ''
}).then(respuesta => {
    if !(respuesta.ok) {
        throw new Error("Token no válido");
    }
}).catch(error => {
    window.location = "participa.html"
});