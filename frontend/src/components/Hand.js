import Card from "./Card";
import React from 'react'

function Hand({ cards }) {
  return (
    <div className="hand">
        {cards.map((card, index) => (
            <Card key={index} rank={card.rank} suit={card.suit} />
        ))}
    </div>
  )
}

export default Hand;