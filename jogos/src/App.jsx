import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home/home';
import Produtos from './pages/Produtos/produto';
import Contato from './pages/Contato/contato';


function App() {7
  return (
    <BrowserRouter>
    <div className="layout">
      <nav className="navbar">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/Produtos" className={({ isActive }) => isActive ? 'active' : ''}>Produtos</NavLink>
        <NavLink to="/Contato" className={({ isActive }) => isActive ? 'active' : ''}>Contato</NavLink>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Produtos" element={<Produtos />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>&copy; 2026 - Guia React Router</p>
      </footer>   
    </div>
    </BrowserRouter>
  );
}

export default App;