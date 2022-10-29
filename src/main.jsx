import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./normalize.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Man from "./Components/Shop/Man";
import Shop from "./Components/Shop/Shop";
import Woman from "./Components/Shop/Woman";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/man" element={<Man />} />
                <Route path="/shop/woman" element={<Woman />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
