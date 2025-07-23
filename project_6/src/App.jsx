import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {Navbar} from './components/Navbar';
import {Dashboard} from './components/Dashboard';
import {BookDetail} from './components/BookDetail';

function App() {
  const [count, setCount] = useState(0)

  return (
  <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/book/*" element={<BookDetail />} />
        <Route path="/book" element={<p>Invalid book ID. Please go back.</p>} />
      </Routes>
    </Router>
  )
}

export default App
