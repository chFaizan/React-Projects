import React, { useEffect, useState } from "react";
import "./pokemon.css";

export default function FetchApi() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const fetchPokemon = async () => {
    try {
        
        const res =await fetch(API);
        const data = await res.json();
        setPokemon(data);
        setLoading(false);
    } catch (err) {
        console.log(err)
        setLoading(false)
        setError(err);
    }
}
  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading) {
    return <h1>Data is Loading...</h1>;
  }
  
  if (error) {
    return <h1>Error: {error.message}</h1>;
  }
  

  return (
    <section className="container">
      <header>
        <h1>Let's Catch a Pokémon</h1>
      </header>
      <ul className="card-demo">
        <li className="pokemon-card">
        <figure>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
              className="pokemon-image"
            />
          </figure>
          <h1>{pokemon.name}</h1>
          <div className="grid-three-cols">
            <p className="pokemon-info">
              Height: <span> {pokemon.height} </span>
            </p>
            <p className="pokemon-info">
              Weight: <span> {pokemon.weight}</span>
            </p>
            <p className="pokemon-info">
              speed: <span>{pokemon.stats[5].base_stat}</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
