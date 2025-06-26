import { useState, useCallback,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str = str + "0123456789"
    if (charAllowed) str = str + "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"


    for (let i = 1; i <length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)


  }, [length, numberAllowed, charAllowed])


useEffect(()=>{
  passwordGenerator()
},[length, numberAllowed, charAllowed,passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-200">
        <h1 className="text-xl font-bold text-center my-4">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-8 bg-gray-400">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 text-black"
            placeholder="Password"
            readOnly
          />
          <button className='outline-none bg-blue-700 text-white p-3 py-0.5 shrink-0'>copy</button>
        </div>

        <div className='flex justify-around text-sm gap-x-2 mb-5'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={10}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label> Length:{length} </label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='numberInput'> Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='numberInput'> Charecters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
