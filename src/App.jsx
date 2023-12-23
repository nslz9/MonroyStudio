import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (

    <><Navbar />
    <ItemListContainer greetings="Mensaje de Bienvenida" /></>


  )
}

export default App
