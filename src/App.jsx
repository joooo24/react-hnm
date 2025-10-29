import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Nav from "./components/Nav";
import ProductAll from "./pages/ProductAll";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./App.scss";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <div className="app-wrap">
            <Nav isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            <Routes>
                <Route path="/" element={<ProductAll />} />
                <Route
                    path="/product/:id"
                    element={
                        <PrivateRoute isAuthenticated={isAuthenticated}>
                            <ProductDetail />
                        </PrivateRoute>
                    }
                />
                <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
            </Routes>
        </div>
    );
}

export default App;
