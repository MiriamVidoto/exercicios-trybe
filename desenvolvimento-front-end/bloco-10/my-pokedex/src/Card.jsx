import React from 'react'
import pokemons from './data';
import Pokemon from './Pokemon';

class Card extends React.Component {
    render() {
    return (<>
        { pokemons.map((pokemon) => <Pokemon pokemonData={pokemon} key={pokemon.id}/>) }
        </>)
    }
}

export default Card;