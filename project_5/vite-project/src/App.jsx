import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Navbar} from "./Navbar.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Studio Ghibli API</h1>
      <div className="Navbar">
        <Navbar />
        {/* Your main page content here */}
      </div>
    </>
  );
}

export default App
