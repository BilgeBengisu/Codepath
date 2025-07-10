import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Navbar} from "./components/Navbar.jsx"
import {Dashboard} from "./components/Dashboard.jsx" 
import {About} from "./components/About.jsx" 
import {Search} from "./components/Search.jsx" 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App
