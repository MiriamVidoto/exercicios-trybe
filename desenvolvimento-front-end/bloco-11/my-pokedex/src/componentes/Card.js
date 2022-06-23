import React from "react";
import Pokemon from "./Pokemon";
import pokemons from "../data";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            pokemonIndex: 0,
        };
    }

    nextPokemon (numberPokemons) {
        this.setState((prevState) => ({
            pokemonIndex: (prevState.pokemonIndex + 1) % numberPokemons,
        }));
    }

    render() {
        const { pokemonIndex } = this.state;
        return(
            <div className="card">
                <Pokemon pokemonData={ pokemons[pokemonIndex] } />
                <div>
                    <button 
                    type="button"
                    onClick={ () => this.nextPokemon(pokemons.length) }>Próximo Pokemon</button>
                </div>
            </div>
        )
    }
}

export default Card;