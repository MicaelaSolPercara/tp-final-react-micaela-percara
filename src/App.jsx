import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import ListaPokemones from './paginas/ListaPokemones';
import DetallesPokemones from './paginas/DetallesPokemones';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listado" element={<ListaPokemones />} />
        <Route path="/detalle/:id" element={<DetallesPokemones />} />
      </Routes>
    </Router>
  );
}

export default App;