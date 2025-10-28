
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import ProductAll from './pages/ProductAll'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import './App.css'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/product/:id"
          element={<ProductDetail />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App