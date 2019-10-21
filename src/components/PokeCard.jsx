import React from 'react'
import './PokeCard.scss'


const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


export default class PokeCard extends React.Component {
  render() {
    const { name   } = this.props
    return (  
      <>
        <p className="pokecard" style={{ backgroundColor: getRandomColor() }} >{name}</p>
      </>
    )
  }
}