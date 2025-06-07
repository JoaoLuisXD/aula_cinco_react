import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produtos from "../pages/Produtos";
import Home from "../pages/Home";
import Header from "../Components/Header";

const Paths = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Produtos" element={<Produtos />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Paths;
