import { useState } from 'react'
// import './App.css'

function App() {
  // Remove unused state if not needed, or use it
  const [color, setColor] = useState("black");

  return (
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

          <button
            onClick={() => setColor("red")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "red" }}>Red
          </button>

          <button
            onClick={() => setColor("Green")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "Green" }}>Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "blue" }}>blue
          </button>

          <button
            onClick={() => setColor("yellow")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "yellow" }}>yellow
          </button>

          <button
            onClick={() => setColor("olive")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "olive" }}>olive
          </button>

          <button
            onClick={() => setColor("aqua")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "aqua" }}>aqua
          </button>

        </div>
      </div>
    </div>
  )
}

export default App