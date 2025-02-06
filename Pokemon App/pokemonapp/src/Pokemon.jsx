import React, { useState } from 'react'
import "./index.css";
import { useEffect } from 'react';
import PokemonCards from './PokemonCards';

export default function Pokemon() {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

    const searchData = pokemon.filter((curData) =>
        curData.name.toLowerCase().includes(search.toLowerCase())
    );
    const fetchPokemon = async () =>{
        const API = "https://pokeapi.co/api/v2/pokemon?limit=124";
        
        try {
        const res = await fetch(API);
        const data = await res.json();
        

        const detailedPokeData = data.results.map( async (curEle) =>{
              
              const res = await fetch(curEle.url);
              const data = await res.json();
              
              return data; 
        });
        const detailedResponse = await Promise.all(detailedPokeData);
        setPokemon(detailedResponse);
        //console.log(detailedResponse);
        setLoading(false);
        
    } catch (error) {

        setError(error);
        setLoading(false);
        
    }

    }
    useEffect(()=>{
        fetchPokemon();
    },[])

    if(loading){
       return <div> <h1>Data is Loading...</h1></div>
    }
    if(error){
        <div>
            <h1>
                {error.message}
            </h1>
        </div>
    }
    
  return (
    <>
      <section className="container">
        <header>
          <h1> Lets Catch Pokémon</h1>
        </header>
        <div className="pokemon-search">
          <input 
            type="text"
            placeholder="search Pokemon"
            value={search}
            onChange={(e)=>setSearch(e.target.value) }
          />
        </div>
        <div style={{padding:"20px"}}>

            <ul className='cards'>
                { 
                searchData.map((currPokeData,index)=>{
                    return <PokemonCards key={pokemon.id} PokemonData={currPokeData} />
                })
            }
            </ul>

        </div>
        </section>
        <div >
            

        </div>
    </>
  )
}
