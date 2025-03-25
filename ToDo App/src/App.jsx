import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TodoUi from './components/TodoUi'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <TodoUi />
    </>
  )
}

export default App
