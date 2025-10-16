import React from 'react';
import Layout from '../componentes/Layout';
import Personajes from '../images/personajes.png'

function Home() {
  return (
    <Layout>
      <h1>¡Hola, bienvenidos a PokemApp!</h1>
      <p>Esta es una aplicación que hice como parte del trabajo final integrador del curso de Programación Web Inicial - Front End Developer. <br />
      Mi propósito es demostrar a través de este proyecto algunos contenidos abordados a lo largo del curso.</p> 
      <h2>¡Espero que les guste!</h2>
      <img src={Personajes} alt="Personajes de Pokemon" class-name="pokemon-personajes" />
      
    
    </Layout>
  );
}

export default Home;