import { useEffect, useState } from 'react'

import { GamepadSvg } from './components/GamepadSvg'
import { useGamepad } from './hooks/useGamepad';
import './App.css'

function App() {
  const { gamepad } = useGamepad();

  return (
    <div className="App">
      <GamepadSvg axes={gamepad?.axes} />
      <p>
        {gamepad ?
          gamepad.id :
          "No Gamepad Detect."}
      </p>
    </div>
  )
}

export default App
