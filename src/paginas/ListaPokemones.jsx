import React , {useEffect, useState} from 'react';
import Layout from '../componentes/Layout';
import {Link} from 'react-router-dom';

function ListaPokemones() {
    const [pokemones, setPokemones] = useState ([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
    async function fetchPokemones() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        const data = await response.json();
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
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px'
        }}>
          {pokemones.map((pokemon) => (
            <Link 
              key={pokemon.name} 
              to={`/detalle/${pokemon.id}`} 
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <div 
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '10px',
                  padding: '10px',
                  width: '120px',
                  textAlign: 'center',
                  backgroundColor: '#f9f9f9'
                }}
              >
                <img src={pokemon.image} alt={pokemon.name} />
                <p>{pokemon.name}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </Layout>
  );
}

export default ListaPokemones;