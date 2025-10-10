import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div className="layout">
      
      <header className="header">
        <h1>Pokémon App</h1>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/listado">Listado</Link>
        </nav>
      </header>

      
      <main className="main">
        {children}
      </main>

      
      <footer className="footer">
        <p>© 2025 Micaela Percara - TP Final React</p>
      </footer>
    </div>
  );
}

export default Layout;