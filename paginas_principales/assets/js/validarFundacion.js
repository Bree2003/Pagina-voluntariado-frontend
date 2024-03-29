
const rut = document.querySelector("#rut");
const correo = document.querySelector("#email");
const telefono = document.querySelector("#telefono");
const razonSocial = document.querySelector("#razon-social");
const contrasena = document.querySelector("#password");

// generalizamos código para reutilizarlo
const validateEmptyField2 = (e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.trim().length == 0) { /* trim -> elimina los espacios al comienzo y al final*/
        field.classList.add("error");
        field.classList.remove("validado");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "*";
        // field.nextElementSibling.innerText = `${field.name} is required`;
    } else {
        field.classList.remove("error");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}

const validateEmptyField = (e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.trim().length == 0) { /* trim -> elimina los espacios al comienzo y al final*/
        field.classList.add("error");
        field.classList.remove("validado");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "El campo es requerido";
        // field.nextElementSibling.innerText = `${field.name} is required`;
    } else {
        field.classList.remove("error");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}


const validateEmailFormat = (e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    const regex = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
    // una cantidad de cosas, un arroba, una cantidad de cosas, un punto, una cantidad de cosas
    if (fieldValue.trim().length > 0 && !regex.test(fieldValue)) {
        field.classList.add("error");
        field.classList.remove("validado");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Ingrese un email válido";
    } else if (regex.test(fieldValue)) {
        // quitamos la clase error
        field.classList.remove("error");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
        // agregamos la clase validado
        field.classList.add("validado");
    }
}

var Rut = {
    // valida el rut con su cadena completa "xxxxxxxxx-x"
    validaRut: function (rutCompleto) {
        rutCompleto = rutCompleto.replaceAll(".", "") /* reemplaza el punto por nada */
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
            return false;
        var tmp = rutCompleto.split('-');
        var digv = tmp[1];
        var rut = tmp[0];
        if (digv == 'K') digv = 'k';

        return (Rut.dv(rut) == digv);
    },
    dv: function (T) {
        var M = 0, S = 1;
        for (; T; T = Math.floor(T / 10))
            S = (S + T % 10 * (9 - M++ % 6)) % 11;
        return S ? S - 1 : 'k';
    }
};

const validateRut = (e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.trim().length > 0 && !Rut.validaRut(fieldValue)) {
        field.classList.add("error");
        field.classList.remove("validado");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "RUT inválido";
    } else if (Rut.validaRut(fieldValue)) {
        // quitamos la clase error
        field.classList.remove("error");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
        // agregamos la clase validado
        field.classList.add("validado");
    }
}

const validatePhoneNumber = (e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.trim().length == 9 && !isNaN(field.value)) {
        // console.log(!isNaN(field.value));
        // quitamos la clase error
        field.classList.remove("error");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
        // agregamos la clase validado
        field.classList.add("validado");
    } else if (fieldValue.trim().length > 0) {
        field.classList.add("error");
        field.classList.remove("validado");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Número inválido";
    }
}

// si el campo está vacío
rut.addEventListener("blur", validateEmptyField2);
correo.addEventListener("blur", validateEmptyField);
telefono.addEventListener("blur", validateEmptyField);
razonSocial.addEventListener("blur", validateEmptyField2);
contrasena.addEventListener("blur", validateEmptyField);

// // validar formato correo
correo.addEventListener("blur", validateEmailFormat);

// // validar rut
rut.addEventListener("blur", validateRut);

// //validar telefono
telefono.addEventListener("blur", validatePhoneNumber);