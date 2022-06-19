import React from 'react'
import './Pokemon.css'

class Pokemon extends React.Component {
    render() {
        const {name, type, averageWeight, image} = this.props.pokemonData;
        return (
        <section className= 'pokemon'>
            <h2 className='name'>{ name }</h2>
            <p className='type'>{ type }</p>
            <p className='kg'>Average Weight: { averageWeight.value }{ averageWeight.measurementUnit }</p>
            <img src= {image} alt={ name } />
        </section>
        )
    };
};

export default Pokemon;