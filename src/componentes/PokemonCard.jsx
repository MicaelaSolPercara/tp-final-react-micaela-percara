import React from "react";
import { Link } from "react-router-dom";
import "./PokemonCard.css";

function PokemonCard ({ id, name, image }) {
return (
    <Link to={`/detalle/${id}`} className="pokemon-card-link">
        <div className="pokemon-card">
            <img src={image} alt={name} className="pokemon-image"/>
            <p className="pokemon-name">{name}</p>
        </div>
</Link>
);

}

export default PokemonCard;