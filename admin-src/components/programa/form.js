import { useState } from "react";

export default function ProgramaForm({ programas, setProgramas }) {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');


    const procesarFormulario = async (eventoSubmit) => {

        try {
            eventoSubmit.preventDefault();

            const programa = {
                nombre,
                descripcion
            };

            const baseUrl = 'https://pagina-voluntariado-frontend-glitch.glitch.me';
            const url = baseUrl + '/programa';

            const respuesta = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(programa)
            });

            if (!respuesta.ok) throw new Error("No se pudo guardar la categoría...");

            const programaGuardado = await respuesta.json();
            console.dir(programaGuardado);

            // actualiza la variable de estado que contiene los programas que muestra la tabla
            setProgramas([...programas, programaGuardado]);


        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <form action="form" method="post" onSubmit={procesarFormulario}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                <label>Descripción</label>
                <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />

                <button type="submit">Guardar</button>
            </form>

            Nombre: {nombre} | Descripción: {descripcion}
        </>
    );
}