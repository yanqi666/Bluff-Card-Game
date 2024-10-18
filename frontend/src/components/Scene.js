import React from 'react'
import { useState } from 'react'
import Gameboard from './Gameboard'
import MainMenu from './MainMenu'


function Scene() {
  const [currentScene, setCurrentScene] = useState(<MainMenu />)

  const renderScene = () => {
    switch (currentScene) {
        case 'mainMenu':
            return <MainMenu changeScene={setCurrentScene} />;
        case 'game':
            return <Gameboard />;
        default:
            return <MainMenu changeScene={setCurrentScene} />
    }
  };


  return (
    <div>
        {renderScene()}
    </div>
  )
}

export default Scene