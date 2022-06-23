import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const {name, type, averageWeight, image} = this.props.pokemonData;
        return (
            <div className="pokemon">
                <div>
                    <h2>{ name }</h2>
                    <p>{ type }</p>
                    <p>Average Weight: { averageWeight.value }{ averageWeight.measurementUnit }</p>
                </div>
                <img src={ image } alt={ name } />
            </div>
        )
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
        measurementUnit: PropTypes.string,
        value: PropTypes.number,
    }),
    image: PropTypes.string,
    }).isRequired,
};

export default Pokemon;