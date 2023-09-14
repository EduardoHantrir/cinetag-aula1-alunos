import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Rodape from "components/Rodape";
import Favoritos from "pages/Favoritos";
import CadFilme from "pages/CadFilme"
import Inicio from "pages/Inicio";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function AppRoutes () {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <Routes>
                    <Route path="/" element={<Inicio />}></Route>
                    <Route path="/favoritos" element={<Favoritos />}></Route>
                    <Route path="/CadFilme" element={<CadFilme />}></Route>
                </Routes>
            </Container>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;