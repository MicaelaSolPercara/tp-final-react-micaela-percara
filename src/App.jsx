import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Home from './paginas/Home';
import ListaPokemones from './paginas/ListaPokemones';
import DetallesPokemones from './paginas/DetallesPokemones';
import './App.css'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listado" element={<ListaPokemones />} />
        <Route path="/detalle/:id" element={<DetallesPokemones />} />
      </Routes>
  );
}

export default App;