import { useEffect } from "react";

export default function ProgramaListado({ programas, setProgramas }) {



    const cargarDatos = async () => {
        try {
            const baseUrl = 'https://pagina-voluntariado-frontend-glitch.glitch.me';
            const url = baseUrl + '/programa';
            const respuesta = await fetch(url);

            if (!respuesta.ok) throw new Error("Problemas al recuperar los programas!");

            const programs = await respuesta.json();
            setProgramas(programs); /* LO MÁS IMPORTANTE */
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        cargarDatos();
    }, []);

    const eliminar = async (programa) => {
        try {
            // const baseUrl = Configuracion.getBaseUrl();
            const baseUrl = 'https://pagina-voluntariado-frontend-glitch.glitch.me/';
            const url = baseUrl + '/programa?id=' + programa.id;
            // const url = baseUrl + '/programa/' + programa.id;
            const respuesta = await fetch(url, {
                method: 'DELETE'
            });
            if (!respuesta.ok) throw new Error("Problemas al eliminar el programa!");
            const resultado = await respuesta.json();
            console.log("Programa borrado de manera exitosa");

            // actualizar el listado 
            cargarDatos();
        } catch (error) {
            console.error({ error: error.message });
        }
    };

    return (
        <>
            <h2>Listado de Programas</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        programas.map(programa => (
                            <tr key={programa.id}> {/* se identifica por el id */}
                                <td>{programa.id}</td>
                                <td>{programa.nombre}</td>
                                <td>{programa.descripcion}</td>
                                <td>
                                    <button>Editar</button>
                                    <button onClick={() => eliminar(programa)}>Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}