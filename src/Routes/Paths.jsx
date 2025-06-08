import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produtos from "../Pages/Produtos";
import Home from "../Pages/Home";
import PageLayout from "../Layouts/PageLayout";
import NotFound from "../Pages/NotFound";
import Produto from "../Pages/Produto";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout/>}>
                    <Route index element={<Home />} />
                    <Route path="/Produtos" element={<Produtos />} />
                    <Route path="/Produto/:id/:nome" element={<Produto />} />
                    
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Paths;
