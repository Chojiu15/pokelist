import React, { Component } from 'react'
import axios from 'axios'


const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon'

export default class Pokemon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemon: {
                sprites: {}
            }
        }
    }

    componentDidMount() {
        axios.get(`${pokemonUrl}/${this.props.match.params.id}`)
            .then(response => {
                this.setState({ pokemon: response.data })
            })
    }

    render() {
        const {pokemon} = this.state
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={pokemon.sprites.front_default} alt='' />
                <img src={pokemon.sprites.back_default} alt='' />
                <h1>{pokemon.name}</h1>
                
            </div>
        )
    }
}