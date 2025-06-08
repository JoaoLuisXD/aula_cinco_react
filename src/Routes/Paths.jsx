import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produtos from "../Pages/Produtos";
import Home from "../Pages/Home";
import PageLayout from "../Layouts/PageLayout";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout/>}>
                    <Route index element={<Home />} />
                    <Route path="/Produtos" element={<Produtos />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Paths;
