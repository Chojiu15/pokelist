import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Pokemons from './components/Pokemons'
import PokeCard from './components/PokeCard'
import Pokemon from './components/Pokemon'


const App = () => {
  return (
    
    <Switch>
      <Route exact path='/pokemons' component={Pokemons} />
      <Route exact path='/pokemon/:id' component={Pokemon} />
    </Switch>

  )
}

export default App
