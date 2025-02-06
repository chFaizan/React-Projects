import React from 'react'

export default function PokemonCards({PokemonData}) {
  return (
    <>
    <li className='pokemon-card'>
       <figure>
        <img className='pokemon-image' src={PokemonData.sprites.other.dream_world.front_default} alt="PokemonData.name" />
       </figure>
       <h1 className='pokemon-name'>{PokemonData.name}</h1>
       <div className='pokemon-info pokemon-highlight'>
        <p>
            {
                PokemonData.types.map((curData) =>curData.type.name).join(", ")
            }
        </p>
       </div>
       </li>
    </>
  )
}


