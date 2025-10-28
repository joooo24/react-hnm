import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ProductAll from "./pages/ProductAll";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./App.scss";

function App() {
    return (
        <div className="app-wrap">
            <Nav />
            <Routes>
                <Route path="/" element={<ProductAll />} />
                <Route
                    path="/product/:id"
                    element={
                        <PrivateRoute>
                            <ProductDetail />
                        </PrivateRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
