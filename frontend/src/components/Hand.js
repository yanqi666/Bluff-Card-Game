import Card from "./Card";
import React from 'react';
import "./Hand.css";

function Hand({ player }) {
  return (
    <div className="player">
      {player ? (
        <>
          <div className="playerName">{player.name}</div>
          <div className="playerHand">
          {player.hand.length > 0 ? (
            player.hand.map((card, index) => (
              <Card key={index} rank={card.rank} suit={card.suit} />
            ))
          ) : (
            <p>No cards in hand</p>
          )}
          </div>
        </>
      ) : (
        <p>Player doesn't exist</p>
      )}
    </div>
  );
}

export default Hand;
