import Layout from "@/components/layout";
import ProgramaManager from "@/components/programa/manager";

export default function PaginaPrograma() {
    return (
        <>
            <Layout>
                <h1 className="titulo">Programas</h1>
                <ProgramaManager />
            </Layout>
        </>
    )
}