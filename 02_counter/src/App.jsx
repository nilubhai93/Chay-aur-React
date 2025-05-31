import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  let addValue =()=>{
    // counter = counter+1
    if(counter==20){
      setCounter(20 )
    }else{
      setCounter(counter+1)
    }
  }
  let removeValue =()=>{
    // counter = counter+1
    if(counter==0){
      setCounter(0)
    }else{
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1> Nilu counter</h1>
      <h2> Counter Value : {counter} </h2>
      <button onClick={addValue}> Add Value</button>
      <button onClick={removeValue}> Remove Value</button>

      <p> footer: {counter}</p>
    </>
  )
}

export default App
