import React , {useEffect, useState} from 'react';
import Layout from '../componentes/Layout';
import {Link} from 'react-router-dom';
import PokemonCard from '../componentes/PokemonCard';

function ListaPokemones() {
    const [pokemones, setPokemones] = useState ([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
    async function fetchPokemones() {
      try {
        const respuestaAPI = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        const data = await respuestaAPI.json();
    const pokemonesConImagen = data.results.map((pokemon, index) => {
          const id = index + 1;
          return {
            ...pokemon,
            id: id,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          };
        });

        setPokemones(pokemonesConImagen);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los pokemones:', error);
      }
    }

    fetchPokemones();
  }, []);
  
  
    return (
    <Layout>
      <h2>Conocé todos los pokemones</h2>
      <p>Buscá el Pókemon que más te guste y explorá todas sus características.</p>
         {loading ? (
        <p>Cargando pokémones...</p>
      ) : (
        <div className="pokemon-grid">
          {pokemones.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
            />
          ))}
        </div>
      )}
    </Layout>
  );
}

export default ListaPokemones;