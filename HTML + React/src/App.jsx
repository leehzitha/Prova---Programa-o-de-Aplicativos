import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Contador, { Counter } from './Components/Counter/Counter'
import { Typing } from './Components/Typing/Typing'
import { Visible } from './Components/Visible.jsx/Visible'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter></Counter>
      <Typing></Typing>
      <Visible text="Lele"></Visible>
    </>
  )
}

export default App
