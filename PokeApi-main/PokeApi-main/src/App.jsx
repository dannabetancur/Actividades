import { Boton } from './Components/Boton';
import { Targeta } from './Components/Targeta';
import './sass/App.scss'; // estilos
import { CgArrowLeftO } from "react-icons/cg";
import { CgArrowRightO } from "react-icons/cg";
import { useState, useEffect } from 'react'; //Hooks

const App = () => {

  const [PokemonId, setPokemonId] = useState(1);
  const [pokemonArreglo, setpokemonArreglo] = useState([])

  useEffect(() => {
    getPokemon(PokemonId);
    console.log('useEffect ejecutado')
  }, [PokemonId]);

  async function getPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
    const data = await response.json();

    let pokemonArray = [];
    let pokemonN1 = data.chain.species.name
    let pokemonN1person = await getPokemonperso(pokemonN1)
    pokemonArray.push([pokemonN1, pokemonN1person])

    if (data.chain.evolves_to.length !== 0) {
      let pokemonN2 = data.chain.evolves_to[0].species.name;
      let pokemonN2person = await getPokemonperso(pokemonN2)
      pokemonArray.push([pokemonN2, pokemonN2person])

      if (data.chain.evolves_to[0].evolves_to.length !== 0) {
        let pokemonN3 = data.chain.evolves_to[0].evolves_to[0].species.name;
        let pokemonN3person = await getPokemonperso(pokemonN3)
        pokemonArray.push([pokemonN3, pokemonN3person])
        setpokemonArreglo(pokemonArray)
      }
    }
  }

  async function getPokemonperso(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    const data = await response.json()
    return data.sprites.other['official-artwork'].
      front_default;
  }

  return (
    <>
      <div className='targeta-contenedor'>
        {pokemonArreglo.map(pokemon =>
          <Targeta
            key={pokemon[0]}
            name={pokemon[0]}
            img={pokemon[1]} />)}
      </div>
      <div className='contenedorBotones'>
        <Boton
          icon={<CgArrowLeftO />}
          handleClick={() => {
            if (PokemonId === 1) {
              setPokemonId(1)
            } else {
              setPokemonId(PokemonId - 1)
            }
          }}
        />

        <Boton
          icon={<CgArrowRightO />}
          handleClick={() => { setPokemonId(PokemonId + 1) }}
        />
      </div>
    </>
  )
}

export { App }

