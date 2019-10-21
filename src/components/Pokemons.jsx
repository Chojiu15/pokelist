import React from 'react'
import axios from 'axios'
import { Container, Col, Row } from 'reactstrap'
import PokeCard from './PokeCard'

const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=20'

export default class Pokemons extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemons: []
        }
    }

    componentDidMount() {
        axios.get(pokemonUrl)
            .then(response => {
                this.setState({ pokemons: response.data.results })
            })
    }

    getUrl(url) {
        url = url.split('/')
        return url[url.length - 2]
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.state.pokemons.map(pokemon => {
                        return (
                            <Col key={pokemon.name} xs={3}>
                                <div onClick={() => this.props.history.push(`/pokemon/${this.getUrl(pokemon.url)}`)} >
                                    <PokeCard name={pokemon.name} />
                                </div>
                            </Col>
                        )
                    }
                    )}
                </Row>
            </Container>
        )
    }

}
                                                            // <div onClick={() => this.props.history.push(`/pokemon/${this.getUrl(pokemon.url)}`)} >