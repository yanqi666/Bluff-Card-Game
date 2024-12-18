import React from 'react'
import { useState } from 'react';
import "./Card.css";

    // CARD RANKS ARE CAPITALIZED 
    // A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
    
    // CARD SUITS ARE SINGULAR AND ALL LOWERCASE
    // heart, diamond, spade, club

function Card({rank, suit}) {
    // cards are initially face down
    const [upright, setUpright] = useState(false);


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
        throw new Error ("Suit is not a valid suitname, either invalid, pluralized, or capitalized. Please make sure suit name is singular and lowercase i.e. club, heart, diamond, spade.")
        break;
  }

  // function to flip the card back and forth
  const flipCard = () => {
    setUpright(!upright);
  };

  return (
    <div className={"card"} onClick={flipCard}>
        { // card is upright? show card, else show cardback
          upright ? 
          <img src={`/sprites/cards/${rank}.${suit}.png`} alt={`Card rank:${rank} suit:${suit}`}></img>
          : <img src={`/sprites/cards/Back2.png`} alt={`Card facedown`}></img>
        }

    </div>
  )
}

export default Card