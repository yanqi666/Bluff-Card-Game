import React from 'react';
import "./MainMenu.css";
import { auth } from '../../firebase.js';
import { signOut } from '@firebase/auth';

function MainMenu({ changeScene, user }) {

  const handleNewGame = () => {
    changeScene('game');
  }

  const handleChangeToSignUp = () => {
    changeScene('signup');
  }

  const handleChangeToLogin = () => {
    changeScene('login');
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert(`${user.email} Signed Out Successfully`)
      changeScene('mainmenu');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  }
  return (
    <div className='mainMenu'>
        <h1>Bluff!</h1>
        <h2>A card game of fooling your friends!</h2>

        {user ? 
          (
            <div>
              <h4>Welcome {user.email} </h4>
              <button id="btn_newGame" onClick={handleNewGame}>New Game</button>
              <button id="btn_logout" onClick={handleLogout}>Log Out</button>
            </div>
          ) : (
            <div>
              <button id="btn_signUp" onClick={handleChangeToSignUp}>Sign Up</button>
              <button id="btn_login" onClick={handleChangeToLogin}>Log In</button>
            </div>
          )
        }
        
        
        <small>Developed by <a href='http://apeffer.dev'>Alex Peffer</a>, Muhammad Qassim, Yan Qi</small>
    </div>
  );
}

export default MainMenu;