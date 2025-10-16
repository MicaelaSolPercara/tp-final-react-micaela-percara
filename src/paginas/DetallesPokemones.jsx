import React, { useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Layout from '../componentes/Layout';
import Ash from '../images/ash.png'

function DetallesPokemones() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPokemon(){
            try {
                const respuestaApiDetalle = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
                const data = await respuestaApiDetalle.json();
                setPokemon(data);
                setLoading(false);
            } catch (error) {
                console.error("Error al obtener el Pókemon", error);
            }
        }

        fetchPokemon();
    }, [id]);

if (loading) return <Layout><p>Cargando...</p></Layout>;

  return (
    <Layout>
      <div className='detalle-contenedor'> 
        <div className='pokemon-detalle'> 
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{width: "150px", height: "150px"}} />
      <p>Altura: {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
       <p>Tipo: {pokemon.types.map((t) => t.type.name).join(", ")} </p>
      <p>Habilidades: {pokemon.abilities.map((a) => a.ability.name).join(", ")}</p>
    </div>
    <div className='imagen-ash'>
      <img src={Ash} alt="Ash, personaje de Pokemon" />
    </div>
    </div>
    </Layout>
  );
}

export default DetallesPokemones;