import React from 'react'

const Card = ({ name, player }) => {
  return (
    <div>
      <h1>Mi nombre es: {name}</h1>
      <h2> Mi jugador favorito es: {player}</h2>

    </div>
  )
}

export default Card

