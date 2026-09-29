import { useState } from 'react'
import './App.css'
import From from './From'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <From/>
    </>
  )
}

export default App
