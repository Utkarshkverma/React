import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
      <Card username  = "Utkarsh"  image = "https://www.shutterstock.com/shutterstock/photos/692492665/display_1500/stock-photo-water-splash-art-692492665.jpg"/>
      <Card/>
    </h1>
    </>
  )
}

export default App
