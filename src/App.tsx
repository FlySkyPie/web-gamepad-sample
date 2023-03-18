import { useEffect, useState } from 'react'

import { GamepadSvg } from './components/GamepadSvg'
import { useGamepad } from './hooks/useGamepad';
import './App.css'

function App() {
  const { gamepad } = useGamepad();

  // useEffect(()=>{
  //   console.log(gamepad?.buttons[10])
  // },[gamepad?.buttons])

  return (
    <div className="App">
      <GamepadSvg gamepad={gamepad} />
      <p>
        {gamepad ?
          gamepad.id :
          <>
            <p>
              "No Gamepad Detect." <br />
              (Plug-in gamepad and press any button to trigger connect.)
            </p>
          </>}
      </p>
    </div>
  )
}

export default App
