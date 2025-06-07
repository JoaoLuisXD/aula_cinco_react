import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produto from "../pages/Produto";
import Home from "../pages/Home";

const Paths = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Home/>}></Route>
                <Route path="/Produto" element = {<Produto/>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}
 
export default Paths;