import React from 'react';
import "./MainMenu.css";

function MainMenu({ changeScene }) {

  const handleNewGame = () => {
    changeScene('game');
  }

  const handleSignUp = () => {
    changeScene('signup');
  }

  return (
    <div className='mainMenu'>
        <h1>Bluff!</h1>
        <h2>A card game of fooling your friends!</h2>

        <button id="btn_signUp" onClick={handleSignUp}>SignUp</button>
        <button id="btn_newGame" onClick={handleNewGame}>New Game</button>
        <small>Developed by <a href='http://apeffer.dev'>Alex Peffer</a>, Muhammad Qassim, Yan Qi</small>
    </div>
  );
}

export default MainMenu;