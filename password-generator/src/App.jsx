import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let num = "0123456789"
    let char = "!@#$%^&*()_+"

    if(number) str += num;
    if(character) str += char;
    for(let i = 0; i < length; i++){
      let random = Math.floor(Math.random() * str.length);
      pass += str[random];
    }
    setPassword(pass)
    
  }, [length, number, character])



  useEffect(()=> passwordGenerator(),
  [length, number, character,passwordGenerator])

  // use ref

  const passwordRef = useRef(null)

  let copyPassword = useCallback(()=>{
    passwordRef.current.select();
    passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(password);
  },[password])


  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
     <h1 className='text-white text-center my-3'>Password generator</h1>
     <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
      type='text'
      value={password}
      className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
            ></input>
            <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyPassword}
        >copy</button>
     </div>
     <div className='flex text-sm gap-x-2'>
     <div className='flex items-center gap-x-1'>
      </div>
      <input 
        type="range"
        min={8}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e)=> setLength(e.target.value)}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
              type="checkbox"
              defaultChecked={character}
              id="characterInput"
              onChange={()=>setCharacter((prev)=> !prev)}/>
               <label htmlFor="characterInput">Characters</label>
        </div>
        <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={() => {
              setNumber((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
     </div>
    </>
  )
}

export default App
