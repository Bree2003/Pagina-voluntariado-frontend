import ProgramaForm from "./form";
import ProgramaListado from "./listado";
import { useState } from "react";

export default function ProgramaManager(props) {

    const [programas, setProgramas] = useState([]);

    return (
        <>
            <ProgramaForm
                programas={programas}
                setProgramas={setProgramas}
            />
            <hr />
            <ProgramaListado
                programas={programas}
                setProgramas={setProgramas}
            />
        </>
    );
}