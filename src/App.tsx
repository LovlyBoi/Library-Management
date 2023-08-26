import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="mt-5">Counter: {count}</h1>
      <button
        className="border px-2 py-1 bg-red-300 hover:bg-red-400 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        +1
      </button>
      <h2>lzw猪比！</h2>
    </div>
  )
}

export default App
