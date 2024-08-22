import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  // useState is used to change the state of any hook

  //let counter = 15

  const addValue = () =>{
    if(counter<20)
    {
    setCounter(counter +1)
    }

    else{
      setCounter(counter)
    }
  }

  const subtractValue = () =>{
    if(counter>0){
    setCounter(counter-1)
    }

    else{
      setCounter(counter)
    }
  }


  return (
   <>
   <h1>React Js</h1>
   <h2>Counter value: {counter}</h2>
   <button onClick={addValue}>Add value</button>
   <br/>
   <br/>
   <button onClick={subtractValue}>Remove value</button>
   
   </>
  )
}

export default App
