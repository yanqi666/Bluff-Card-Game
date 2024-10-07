import React from 'react'

    // CARD RANKS ARE CAPITALIZED 
    // A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
    
    // CARD SUITS ARE SINGULAR AND ALL LOWERCASE
    // heart, diamond, spade, club

function Card({rank, suit}) {
    
    // assign each suit to it's equivalent image (ex. 3 of diamonds = 4.4.png)
    switch(suit){
    case "heart":
        suit = 2;
        break;
    case "diamond":
        suit = 4;
        break;
    case "spade":
        suit = 5;
        break;
    case "club":
        suit = 7;
        break;
    default:
        suit = 2;
        break;
  }
  return (
    <div>
        <img src={`/sprites/cards/${rank}.${suit}.png`} alt={`Card rank:${rank} suit:${suit}`}></img>
    </div>
  )
}

export default Card