import { useState } from 'react'
import Card from "./components/Card"
import './App.css'

function App() {
  // Remove unused state if not needed, or use it
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className='bg-green-800 text-white px-4 py-2 rounded-2xl mb-6 text-2xl font-bold'>
        Tailwind test
      </h1>
      <div className='flex gap-2'>
        <Card username="Nilu" btn="go profile"/>
        <Card username="Himu"  /> 

      </div>
    </div>
  )
}

export default App